import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import type { PhotoRef } from "@/data/photos";

type RevealTag = "div" | "li" | "article";

/**
 * Revela o conteúdo quando ele entra na viewport (IntersectionObserver + CSS).
 * Use `as="li"` dentro de listas para manter a estrutura certa para leitores de tela.
 */
export function Reveal({
  as = "div",
  children,
  delay = 0,
  className,
  style,
  ...rest
}: { as?: RevealTag; children: ReactNode; delay?: number } & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      style: { ...style, transitionDelay: `${delay}ms` },
      className: cn("reveal", visible && "reveal-in", className),
      ...rest,
    },
    children,
  );
}

export interface SectionShellProps extends Omit<ComponentProps<"section">, "title"> {
  readonly id: string;
  readonly index: string;
  readonly eyebrow?: string;
  readonly title?: ReactNode;
  readonly lead?: ReactNode;
  /** Elemento acima do título. */
  readonly before?: ReactNode;
  /** "tinta" deixa a seção escura (preto com texto claro); o padrão é papel. */
  readonly tema?: "papel" | "tinta";
  readonly children: ReactNode;
}

/**
 * Estrutura comum aos capítulos. No portfólio a seção tem a altura do conteúdo;
 * no modo apresentação ela ocupa a tela (regras em `.presenting section`).
 * O número do capítulo só aparece no modo apresentação.
 */
export function SectionShell({
  id,
  index,
  eyebrow,
  title,
  lead,
  before,
  tema = "papel",
  children,
  className,
  ...rest
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "relative flex w-full flex-col justify-center px-6 py-24 md:px-14 lg:px-24 lg:py-36",
        tema === "tinta" && "tema-tinta",
        className,
      )}
      {...rest}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="eyebrow mb-5 hidden in-[.presenting]:block">
          {index} {eyebrow ? `— ${eyebrow}` : ""}
        </p>
        {before}
        {title ? (
          <h2
            id={`${id}-title`}
            data-anim="titulo"
            className="max-w-5xl text-5xl leading-[0.98] md:text-7xl lg:text-[5.75rem]"
          >
            {title}
          </h2>
        ) : (
          <span id={`${id}-title`} className="sr-only">
            {eyebrow ?? index}
          </span>
        )}
        {lead ? (
          <Reveal delay={80}>
            <p
              data-shell-lead
              className="mt-7 max-w-3xl text-lg text-pretty text-muted-foreground md:text-2xl md:leading-snug"
            >
              {lead}
            </p>
          </Reveal>
        ) : null}
        <div data-shell-corpo className="mt-14 lg:mt-20">
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * Exibe uma fotografia real quando `photo` é fornecida (WebP com srcset).
 * Sem foto, mantém um espaço reservado abstrato (nunca rostos genéricos).
 */
export function PhotoPlaceholder({
  label,
  className,
  ratio = "portrait",
  photo,
  hideCaption = false,
  sizes = "(min-width: 1024px) 33vw, 90vw",
  priority = false,
}: {
  label: string;
  className?: string;
  ratio?: "portrait" | "landscape" | "square";
  photo?: PhotoRef;
  /** Oculta a legenda sobreposta — use quando o nome já aparece em um título logo abaixo. */
  hideCaption?: boolean;
  /** Largura que a foto ocupa na tela, para o navegador escolher a versão certa. */
  sizes?: string;
  /** Foto do topo: carrega primeiro, sem esperar a rolagem. */
  priority?: boolean;
}) {
  const ratioClass =
    ratio === "portrait" ? "aspect-[3/4]" : ratio === "square" ? "aspect-square" : "aspect-video";

  if (photo) {
    return (
      <figure
        data-anim="foto"
        className={cn("group relative overflow-hidden rounded-2xl bg-card", ratioClass, className)}
      >
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={photo.srcSet ? sizes : undefined}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
          style={{ objectPosition: photo.position ?? "50% 30%" }}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {hideCaption ? null : (
          <>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white/90 md:text-base">
              {label}
            </figcaption>
          </>
        )}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border",
        ratioClass,
        className,
      )}
    >
      <div className="bg-tech-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="h-14 w-14 rounded-full border border-primary/50 bg-primary/10" />
        <figcaption className="text-sm font-medium text-muted-foreground md:text-base">
          {label}
        </figcaption>
        <span className="eyebrow text-[0.65rem]">Espaço reservado para foto real</span>
      </div>
    </figure>
  );
}

/** Aviso honesto de conteúdo ainda não fornecido (evita dados inventados). */
export function PendingContent({ children }: { children: ReactNode }) {
  return (
    <div className="surface-glass rounded-2xl p-8 text-base text-muted-foreground md:text-lg">
      {children}
    </div>
  );
}
