import { useRef, type ReactNode } from "react";
import { FULL_MOTION, ScrollTrigger, SplitText, gsap, useGSAP } from "@/lib/gsap";

/*
 * Movimento do portfólio, por tipo de elemento (uma vez, ao entrar na tela):
 * - [data-anim="titulo"]: o título sobe linha por linha por trás de uma máscara.
 * - [data-anim="foto"]: a foto abre como cortina, de baixo para cima, e assenta.
 * - [data-anim="palco"]: o vídeo do prêmio cresce até o tamanho final com a rolagem.
 * Sem JavaScript ou com "reduzir movimento", tudo aparece direto.
 */
export function SiteMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = rootRef.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add(FULL_MOTION, () => {
        // Fotos: cortina + leve aproximação que assenta.
        root.querySelectorAll<HTMLElement>('[data-anim="foto"]').forEach((figure) => {
          const media = figure.querySelector("img, video");
          const tl = gsap.timeline({
            // Sem "once": um gatilho que se mata durante o refresh (página recarregada no meio)
            // encolhe a lista interna do ScrollTrigger e quebra a criação dos seguintes.
            scrollTrigger: {
              trigger: figure,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
          tl.fromTo(
            figure,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.inOut" },
          );
          if (media) {
            tl.fromTo(media, { scale: 1.18 }, { scale: 1, duration: 1.6, ease: "expo.out" }, 0);
          }
        });

        // Palco do prêmio: cresce de 88% a 100% enquanto entra na tela.
        root.querySelectorAll<HTMLElement>('[data-anim="palco"]').forEach((palco) => {
          gsap.fromTo(
            palco,
            { scale: 0.88, borderRadius: "28px" },
            {
              scale: 1,
              borderRadius: "6px",
              ease: "none",
              scrollTrigger: { trigger: palco, start: "top bottom", end: "top 25%", scrub: 0.6 },
            },
          );
        });

        // Títulos: dividir só com as fontes carregadas, para as linhas saírem certas.
        const splits: SplitText[] = [];
        const animarTitulos = contextSafe!(() => {
          root.querySelectorAll<HTMLElement>('[data-anim="titulo"]').forEach((titulo) => {
            const split = SplitText.create(titulo, {
              type: "lines",
              mask: "lines",
              linesClass: "titulo-linha",
            });
            splits.push(split);
            gsap.from(split.lines, {
              yPercent: 110,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.09,
              scrollTrigger: {
                trigger: titulo,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            });
          });
          ScrollTrigger.refresh();
        });
        let cancelado = false;
        void document.fonts.ready.then(() => {
          if (!cancelado) animarTitulos();
        });

        return () => {
          cancelado = true;
          splits.forEach((split) => split.revert());
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return <div ref={rootRef}>{children}</div>;
}
