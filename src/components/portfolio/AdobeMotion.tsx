import { useEffect, useRef, type VideoHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import fundoTopo from "@/assets/motion/fundo-topo.mp4";
import fundoTopoCapa from "@/assets/motion/fundo-topo-capa.webp";
import premioTop10 from "@/assets/motion/premio-top10.mp4";

/*
 * Animações feitas no After Effects (projeto em DOCUMENTOS PESSOAIS - HUIATÃ RIBEIRO/portfolio-motion)
 * e comprimidas para a web no Media Encoder:
 * - fundo-topo.mp4: névoa de luz (Fractal Noise + Tint + Desfoque gaussiano), loop perfeito de 8 s.
 * - premio-top10.mp4: a arte oficial do prêmio com aproximação lenta, faixa de luz (CC Light Sweep)
 *   e brilho na estrela (Lens Flare). Toca uma vez e para no último quadro.
 * Com "reduzir movimento" ou economia de dados, só a imagem parada aparece.
 */

function motionAllowed() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return !connection?.saveData;
}

/** Fundo animado do topo: começa depois que a página termina de carregar. */
export function HeroMotion({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !motionAllowed()) return;
    const start = () => {
      video.src = fundoTopo;
      void video.play().catch(() => undefined);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  return (
    <video
      ref={ref}
      aria-hidden="true"
      muted
      loop
      playsInline
      preload="none"
      poster={fundoTopoCapa}
      className={cn("pointer-events-none absolute inset-0 size-full object-cover", className)}
    />
  );
}

/** Revelação do prêmio: carrega e toca uma vez quando metade dela aparece na tela. */
export function AwardMotion({
  poster,
  className,
  ...rest
}: { poster: string; className?: string } & VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !motionAllowed() || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        video.src = premioTop10;
        void video.play().catch(() => undefined);
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      aria-hidden="true"
      muted
      playsInline
      preload="none"
      poster={poster}
      className={className}
      {...rest}
    />
  );
}
