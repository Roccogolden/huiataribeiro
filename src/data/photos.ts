/**
 * Fotografias reais do Huiatã, hospedadas no CDN de assets.
 * Centralizadas aqui para que as seções apenas referenciem o slot desejado.
 */
import { webImage } from "@/lib/responsive-image";
export interface PhotoRef {
  readonly src: string;
  /** Larguras em WebP para o navegador escolher (ver webImage). */
  readonly srcSet?: string;
  readonly alt: string;
  /** Ponto focal para recortes (mantém o rosto visível). */
  readonly position?: string;
}

export const photos = {
  hero: {
    ...webImage("foto-hero-principal"),
    alt: "Huiatã Ribeiro com camiseta da Academia de Neurodocência do SENAI",
    position: "50% 15%",
  },
  about: {
    ...webImage("foto-6"),
    alt: "Huiatã Ribeiro em mirante de vidro com reflexo da paisagem",
    position: "50% 30%",
  },
  classroom: {
    ...webImage("foto-1"),
    alt: "Huiatã explicando componentes de hardware em aula no SENAI",
    position: "50% 30%",
  },
  teaching: {
    ...webImage("foto-2"),
    alt: "Huiatã ministrando aula com material impresso em mãos",
    position: "50% 25%",
  },
  candid: {
    ...webImage("foto-3"),
    alt: "Huiatã sorrindo durante uma atividade em sala",
    position: "50% 30%",
  },
  mentoring: {
    ...webImage("foto-4"),
    alt: "Huiatã conduzindo aula sobre educação financeira",
    position: "50% 25%",
  },
  academy: {
    ...webImage("foto-5"),
    alt: "Huiatã no evento da Academia de Neurodocência do Profissionaliza Goiás",
    position: "50% 25%",
  },
  perspective: {
    ...webImage("foto-6"),
    alt: "Huiatã em mirante de vidro com reflexo da paisagem",
    position: "50% 40%",
  },
  award: {
    ...webImage("foto-7"),
    alt: "Huiatã segurando o troféu de 1º lugar do Challenge Day SENAI",
    position: "50% 30%",
  },
  event: {
    ...webImage("foto-8"),
    alt: "Huiatã ao lado do painel da Academia de Neurodocência SENAI FIEG",
    position: "50% 20%",
  },
  desafio2Reais: {
    ...webImage("capa-desafio-2reais"),
    alt: "Página inicial do Desafio dos R$ 2,00: “Começa pequeno. Pense grande.”, com as metas mensais e o ranking ao vivo",
    position: "50% 50%",
  },
  personalLindy: {
    ...webImage("capa-personal-lindy"),
    alt: "Página inicial do site Personal Lindy, personal trainer online",
    position: "50% 50%",
  },
  topBurguer: {
    ...webImage("capa-top-burguer"),
    alt: 'Tela inicial do sistema Top Burguer: "Do toque à chapa em segundos", com pedidos em tempo real',
    position: "50% 50%",
  },
  capsulaDoTempo: {
    ...webImage("capa-capsula-do-tempo"),
    alt: "Tela inicial do Upgrade 3.0, a cápsula do tempo digital, com a escolha de avatar",
    position: "50% 50%",
  },
  logicaQuest: {
    ...webImage("capa-logica-quest"),
    alt: "Tela inicial do jogo Lógica Quest, com as 10 fases, do Vale dos Padrões ao Núcleo do Sistema",
    position: "50% 50%",
  },
  laboratorioLogica: {
    ...webImage("capa-laboratorio-logica"),
    alt: "Missão do jogo Laboratório de Lógica, em que o aluno monta uma sequência de comandos",
    position: "50% 50%",
  },
  reservaLab: {
    ...webImage("capa-reserva-lab"),
    alt: "Tela do sistema de reserva do laboratório de informática do CEPI Elberto Alves",
    position: "50% 50%",
  },
  salaManutencao: {
    ...webImage("foto-sala-manutencao"),
    alt: "Huiatã e estudantes fazendo manutenção prática de um notebook em sala de aula",
    position: "50% 25%",
  },
  salaSelfie: {
    ...webImage("foto-sala-selfie"),
    alt: "Huiatã em selfie com a turma completa durante a aula",
    position: "50% 55%",
  },
  salaDestaque: {
    ...webImage("foto-sala-destaque"),
    alt: "Huiatã com estudantes segurando certificados de Destaque por Desempenho em sala de aula",
    position: "50% 35%",
  },
  salaKahoot: {
    ...webImage("foto-sala-kahoot"),
    alt: "Estudante reagindo ao resultado de um quiz Kahoot sobre hardware e software durante a aula",
    position: "50% 30%",
  },
  jornalCepiNews: {
    ...webImage("foto-jornal-cepi-news"),
    alt: "Matéria do jornal CEPI News sobre o curso Técnico em Desenvolvimento de Sistemas, assinada pelo professor Huiatã Ribeiro",
    position: "50% 15%",
  },
  palestraNeurodocencia: {
    ...webImage("foto-palestra-neurodocencia"),
    alt: 'Huiatã palestrando no encerramento da Academia de Neurodocência do SENAI, com o telão "Da Enxada ao Everest"',
    position: "30% 40%",
  },
  palestraPlateia: {
    ...webImage("foto-palestra-plateia"),
    alt: "Huiatã palestrando para a plateia de professores da rede estadual de Goiás na Academia de Neurodocência do SENAI",
    position: "20% 45%",
  },
} as const satisfies Record<string, PhotoRef>;
