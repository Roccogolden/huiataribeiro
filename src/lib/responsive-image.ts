/**
 * Fotos do site em WebP, em várias larguras (src/assets/web/<nome>-<largura>.webp).
 * Geradas a partir dos originais (as de aula e eventos passaram antes pelo Camera Raw)
 * com o preparar-midia.py. O navegador escolhe a largura certa pelo srcset + sizes.
 */
const files = import.meta.glob<string>("/src/assets/web/*.webp", {
  eager: true,
  import: "default",
});

interface Variant {
  readonly width: number;
  readonly url: string;
}

const byName = new Map<string, Variant[]>();
for (const [path, url] of Object.entries(files)) {
  const match = path.match(/\/([^/]+)-(\d+)\.webp$/);
  if (!match) continue;
  const list = byName.get(match[1]!) ?? [];
  list.push({ width: Number(match[2]), url });
  byName.set(match[1]!, list);
}
for (const list of byName.values()) list.sort((a, b) => a.width - b.width);

export interface WebImage {
  readonly src: string;
  readonly srcSet: string;
}

/** `src` (até 960 px, para quem ignora srcset) e `srcSet` de uma foto otimizada. */
export function webImage(name: string): WebImage {
  const list = byName.get(name);
  if (!list?.length) throw new Error(`Foto otimizada não encontrada: ${name}`);
  const fallback = [...list].reverse().find((v) => v.width <= 960) ?? list[0]!;
  return {
    src: fallback.url,
    srcSet: list.map((v) => `${v.url} ${v.width}w`).join(", "),
  };
}
