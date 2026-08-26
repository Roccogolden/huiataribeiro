/**
 * Fotografias reais do Huiatã, hospedadas no CDN de assets.
 * Centralizadas aqui para que as seções apenas referenciem o slot desejado.
 */
import foto1 from "@/assets/foto-1.jpg";
import foto2 from "@/assets/foto-2.jpg";
import foto3 from "@/assets/foto-3.jpg";
import foto4 from "@/assets/foto-4.jpg";
import foto5 from "@/assets/foto-5.jpg";
import foto6 from "@/assets/foto-6.jpg";
import foto7 from "@/assets/foto-7.jpg";
import foto8 from "@/assets/foto-8.jpg";
import foto9 from "@/assets/foto-9.jpg";
import foto10 from "@/assets/foto-10.jpg";
import fotoHeroPrincipal from "@/assets/foto-hero-principal.jpg";
import capaDesafio2Reais from "@/assets/capa-desafio-2reais.jpg";

export interface PhotoRef {
  readonly src: string;
  readonly alt: string;
  /** Ponto focal para recortes (mantém o rosto visível). */
  readonly position?: string;
}

export const photos = {
  hero: {
    src: fotoHeroPrincipal,
    alt: "Huiatã Ribeiro com camiseta da Academia de Neurodocência do SENAI",
    position: "50% 15%",
  },
  about: {
    src: foto10,
    alt: "Huiatã Ribeiro com credencial do Sistema FIEG",
    position: "50% 30%",
  },
  classroom: {
    src: foto1,
    alt: "Huiatã explicando componentes de hardware em aula no SENAI",
    position: "50% 30%",
  },
  teaching: {
    src: foto2,
    alt: "Huiatã ministrando aula com material impresso em mãos",
    position: "50% 25%",
  },
  candid: {
    src: foto3,
    alt: "Huiatã sorrindo durante uma atividade em sala",
    position: "50% 30%",
  },
  mentoring: {
    src: foto4,
    alt: "Huiatã conduzindo aula sobre educação financeira",
    position: "50% 25%",
  },
  academy: {
    src: foto5,
    alt: "Huiatã no evento da Academia de Neurodocência do Profissionaliza Goiás",
    position: "50% 25%",
  },
  perspective: {
    src: foto6,
    alt: "Huiatã em mirante de vidro com reflexo da paisagem",
    position: "50% 40%",
  },
  award: {
    src: foto7,
    alt: "Huiatã segurando o troféu de 1º lugar do Challenge Day SENAI",
    position: "50% 30%",
  },
  event: {
    src: foto8,
    alt: "Huiatã ao lado do painel da Academia de Neurodocência SENAI FIEG",
    position: "50% 20%",
  },
  desafio2Reais: {
    src: capaDesafio2Reais,
    alt: "Placar ao vivo do Desafio dos R$ 2,00, com o comparativo entre turmas e o pódio das equipes",
    position: "50% 50%",
  },
} as const satisfies Record<string, PhotoRef>;
