import { useEffect, useRef, useState, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Revela o conteúdo quando ele entra na viewport.
 * Usa IntersectionObserver (leve) em vez de bibliotecas de animação.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: { children: ReactNode; delay?: number } & ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-in", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface SectionShellProps extends Omit<ComponentProps<"section">, "title"> {
  readonly id: string;
  readonly index: string;
  readonly eyebrow?: string;
  readonly title?: ReactNode;
  readonly lead?: ReactNode;
  readonly children: ReactNode;
}

/** Estrutura comum a todos os capítulos: respiro generoso e hierarquia clara. */
export function SectionShell({
  id,
  index,
  eyebrow,
  title,
  lead,
  children,
  className,
  ...rest
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "relative flex min-h-[100svh] w-full flex-col justify-center px-6 py-20 md:px-14 lg:px-24 lg:py-24",
        className,
      )}
      {...rest}
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <Reveal>
          <p className="eyebrow">
            {index} {eyebrow ? `— ${eyebrow}` : ""}
          </p>
        </Reveal>
        {title ? (
          <Reveal delay={80}>
            <h2
              id={`${id}-title`}
              className="mt-5 max-w-5xl text-4xl leading-[1.05] font-semibold md:text-6xl lg:text-7xl"
            >
              {title}
            </h2>
          </Reveal>
        ) : (
          <span id={`${id}-title`} className="sr-only">
            {eyebrow ?? index}
          </span>
        )}
        {lead ? (
          <Reveal delay={140}>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-2xl">{lead}</p>
          </Reveal>
        ) : null}
        <div className="mt-12 lg:mt-16">{children}</div>
      </div>
    </section>
  );
}

/**
 * Exibe uma fotografia real quando `photo` é fornecida.
 * Sem foto, mantém um espaço reservado abstrato (nunca rostos genéricos).
 */
export function PhotoPlaceholder({
  label,
  className,
  ratio = "portrait",
  photo,
}: {
  label: string;
  className?: string;
  ratio?: "portrait" | "landscape" | "square";
  photo?: { readonly src: string; readonly alt: string; readonly position?: string };
}) {
  const ratioClass =
    ratio === "portrait" ? "aspect-[3/4]" : ratio === "square" ? "aspect-square" : "aspect-video";

  if (photo) {
    return (
      <figure
        className={cn(
          "surface-glass group relative overflow-hidden rounded-2xl",
          ratioClass,
          className,
        )}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: photo.position ?? "50% 30%" }}
          className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent"
          aria-hidden="true"
        />
        <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-foreground/90 md:text-base">
          {label}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "surface-glass relative overflow-hidden rounded-2xl",
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
