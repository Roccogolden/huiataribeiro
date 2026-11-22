import { useRef } from "react";
import { FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";

/** Marca da sessão: a abertura completa só na primeira visita; ao recarregar, a versão curta. */
export const CHAVE_ABERTURA = "abertura-vista";

/**
 * Roda no <head>, antes do primeiro desenho: decide se há abertura (não há com "reduzir movimento")
 * e qual versão. Se o JavaScript do site falhar, a trava de 6 s libera a página sozinha.
 */
export const SCRIPT_ABERTURA = `(function(){try{var d=document.documentElement;if(!window.matchMedia||!matchMedia("(prefers-reduced-motion: no-preference)").matches)return;var v=false;try{v=sessionStorage.getItem("${CHAVE_ABERTURA}")==="1"}catch(e){}d.classList.add("abertura-ativa");if(v)d.setAttribute("data-abertura","curta");setTimeout(function(){d.classList.remove("abertura-ativa")},6000)}catch(e){}})();`;

/** Evento que avisa o resto da página (rolagem suave) que a abertura terminou. */
export const FIM_ABERTURA = "abertura-fim";

/*
 * Abertura em branco, estilo Premium (sem quique, sem traço desenhado):
 * 1. Rótulos de canto sobem e aparecem.
 * 2. O nome sobe linha por linha por trás de uma máscara, com uma leve aproximação de fundo.
 * 3. Cargo e prêmio aparecem embaixo.
 * 4. O nome sai para cima e a cortina preta sobe, revelando o topo, que só então faz a entrada dele.
 */
export function Abertura() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const painel = ref.current;
      const html = document.documentElement;
      if (!painel) return;

      let liberado = false;
      const liberarPagina = () => {
        if (liberado) return;
        liberado = true;
        html.classList.remove("abertura-ativa");
        html.removeAttribute("data-abertura");
        window.dispatchEvent(new Event(FIM_ABERTURA));
      };

      if (!html.classList.contains("abertura-ativa")) {
        liberarPagina();
        return;
      }
      try {
        sessionStorage.setItem(CHAVE_ABERTURA, "1");
      } catch {
        /* navegação privada: segue sem lembrar */
      }

      const mm = gsap.matchMedia();
      mm.add({ movimento: FULL_MOTION, celular: "(max-width: 767px)" }, (ctx) => {
        const { movimento, celular } = ctx.conditions as { movimento: boolean; celular: boolean };
        if (!movimento) {
          liberarPagina();
          return;
        }
        const curta = html.getAttribute("data-abertura") === "curta";
        const q = gsap.utils.selector(painel);
        // y: 0 zera o deslocamento que o GSAP lê do CSS inicial (translateY em %), senão ele soma ao yPercent.
        const linhas = q(".abertura-linha > span");
        const nome = q(".abertura-nome");
        const rotulos = q(".abertura-item");

        const tl = gsap.timeline({
          defaults: { ease: "expo.out" },
          onComplete: () => gsap.set(painel, { display: "none" }),
        });
        // Só em desenvolvimento: permite pausar a abertura num instante exato para conferir.
        if (import.meta.env.DEV && new URLSearchParams(location.search).has("congelar-abertura")) {
          tl.pause();
          (window as unknown as { __abertura?: gsap.core.Timeline }).__abertura = tl;
        }

        if (curta) {
          // Recarregou: o nome já está na tela; só a saída, em cerca de 1 s.
          tl.set(linhas, { y: 0, yPercent: 0 })
            .set(rotulos, { y: 0, yPercent: 0, autoAlpha: 1 })
            .to(rotulos, { autoAlpha: 0, duration: 0.25, ease: "power2.in" }, 0.1)
            .to(linhas, { yPercent: -110, duration: 0.45, ease: "power3.in", stagger: 0.05 }, 0.1)
            .to(painel, { yPercent: -100, duration: 0.75, ease: "expo.inOut" }, 0.3)
            .call(liberarPagina, [], 0.6);
          return;
        }

        tl.fromTo(
          q(".abertura-topo .abertura-item"),
          { y: 0, yPercent: 100, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08 },
          0,
        )
          .fromTo(
            linhas,
            { y: 0, yPercent: 110 },
            { yPercent: 0, duration: 1.1, stagger: 0.12 },
            0.15,
          )
          // Camada de fundo: o nome assenta devagar enquanto está na tela.
          .fromTo(nome, { scale: 1.05 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0.15)
          .fromTo(
            q(".abertura-base .abertura-item"),
            { y: 0, yPercent: 100, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, duration: 0.7, stagger: 0.08 },
            0.75,
          )
          // Saída: acelera para cima (entrada desacelera, saída acelera).
          .to(rotulos, { autoAlpha: 0, duration: 0.35, ease: "power2.in" }, 1.9)
          .to(linhas, { yPercent: -110, duration: 0.6, ease: "power3.in", stagger: 0.06 }, 1.9)
          .to(painel, { yPercent: -100, duration: 0.95, ease: "expo.inOut" }, 2.1)
          // O topo começa a entrada enquanto a cortina ainda sobe, para os dois movimentos se emendarem.
          .call(liberarPagina, [], 2.55);

        if (celular) tl.timeScale(1.25);
      });

      return () => {
        mm.revert();
        liberarPagina();
      };
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="abertura" aria-hidden="true">
      <div className="abertura-topo">
        <span className="abertura-mascara">
          <span className="abertura-item">Portfólio</span>
        </span>
        <span className="abertura-mascara">
          <span className="abertura-item">2026</span>
        </span>
      </div>
      <p className="abertura-nome">
        <span className="abertura-linha">
          <span>Huiatã</span>
        </span>
        <span className="abertura-linha">
          <span>Ribeiro</span>
        </span>
      </p>
      <div className="abertura-base">
        <span className="abertura-mascara">
          <span className="abertura-item">Instrutor de Informática · SENAI</span>
        </span>
        <span className="abertura-mascara">
          <span className="abertura-item">Docente TOP 10 · 6ª edição</span>
        </span>
      </div>
    </div>
  );
}
