/**
 * Fotografias reais do Huiatã, hospedadas no CDN de assets.
 * Centralizadas aqui para que as seções apenas referenciem o slot desejado.
 */
import foto1 from "@/assets/foto-1.jpg.asset.json";
import foto2 from "@/assets/foto-2.jpg.asset.json";
import foto3 from "@/assets/foto-3.jpg.asset.json";
import foto4 from "@/assets/foto-4.jpg.asset.json";
import foto5 from "@/assets/foto-5.jpg.asset.json";
import foto6 from "@/assets/foto-6.jpg.asset.json";
import foto7 from "@/assets/foto-7.jpg.asset.json";
import foto8 from "@/assets/foto-8.jpg.asset.json";
import foto9 from "@/assets/foto-9.jpg.asset.json";
import foto10 from "@/assets/foto-10.jpg.asset.json";

export interface PhotoRef {
  readonly src: string;
  readonly alt: string;
  /** Ponto focal para recortes (mantém o rosto visível). */
  readonly position?: string;
}

export const photos = {
  hero: {
    src: foto9.url,
    alt: "Huiatã Ribeiro com camiseta da Academia de Neurodocência do SENAI",
    position: "50% 25%",
  },
  about: {
    src: foto10.url,
    alt: "Huiatã Ribeiro com credencial do Sistema FIEG",
    position: "50% 30%",
  },
  classroom: {
    src: foto1.url,
    alt: "Huiatã explicando componentes de hardware em aula no SENAI",
    position: "50% 30%",
  },
  teaching: {
    src: foto2.url,
    alt: "Huiatã ministrando aula com material impresso em mãos",
    position: "50% 25%",
  },
  candid: {
    src: foto3.url,
    alt: "Huiatã sorrindo durante uma atividade em sala",
    position: "50% 30%",
  },
  mentoring: {
    src: foto4.url,
    alt: "Huiatã conduzindo aula sobre educação financeira",
    position: "50% 25%",
  },
  academy: {
    src: foto5.url,
    alt: "Huiatã no evento da Academia de Neurodocência do Profissionaliza Goiás",
    position: "50% 25%",
  },
  perspective: {
    src: foto6.url,
    alt: "Huiatã em mirante de vidro com reflexo da paisagem",
    position: "50% 40%",
  },
  award: {
    src: foto7.url,
    alt: "Huiatã segurando o troféu de 1º lugar do Challenge Day SENAI",
    position: "50% 30%",
  },
  event: {
    src: foto8.url,
    alt: "Huiatã ao lado do painel da Academia de Neurodocência SENAI FIEG",
    position: "50% 20%",
  },
} as const satisfies Record<string, PhotoRef>;
