/**
 * Estudos de caso dos dois projetos mais fortes.
 * REGRA: nada inventado. Fontes: os textos do portfólio (src/data/portfolio.ts) e o que está
 * escrito nos próprios sistemas no ar (telas capturadas em 22/11/2026). Telas com nomes de
 * alunos (rankings) ficam de fora.
 */
import { webImage, type WebImage } from "@/lib/responsive-image";

export interface TelaEstudo extends WebImage {
  readonly alt: string;
  readonly legenda: string;
  /** Captura de celular (em pé): aparece mais estreita, centralizada no painel. */
  readonly retrato?: boolean;
}

export interface EstudoDeCaso {
  readonly slug: string;
  /** Mesmo nome usado em `projects` (portfolio.ts), para ligar o card ao estudo. */
  readonly projeto: string;
  readonly categoria: string;
  readonly resumo: string;
  readonly ficha: readonly { readonly rotulo: string; readonly valor: string }[];
  readonly capa: WebImage & { readonly alt: string };
  readonly problema: string;
  readonly passos: readonly { readonly titulo: string; readonly texto: string }[];
  readonly telas: readonly TelaEstudo[];
  readonly resultados: readonly { readonly valor: string; readonly rotulo: string }[];
  readonly tecnologias: readonly string[];
  readonly url: string;
}

export const estudos: readonly EstudoDeCaso[] = [
  {
    slug: "logica-quest",
    projeto: "Lógica Quest",
    categoria: "Jogo educacional · Lógica de programação",
    resumo:
      "Um jogo de plataforma em que cada portão só abre com raciocínio de programador. Criado com os estudantes do Técnico em Desenvolvimento de Sistemas.",
    ficha: [
      {
        rotulo: "Turma",
        valor: "1º ano A (matutino), Colégio João Carneiro · SENAI Senador Canedo",
      },
      { rotulo: "Evento", valor: "Evento de Ciências e Tecnologia, novembro de 2026" },
      { rotulo: "Plataforma", valor: "Navegador e aplicativo instalável (PWA)" },
      { rotulo: "Situação", valor: "No ar" },
    ],
    capa: {
      ...webImage("capa-logica-quest"),
      alt: "Tela inicial do jogo Lógica Quest, com as 10 fases",
    },
    problema:
      "Lógica de programação é a porta de entrada da área. A ideia foi transformar o conteúdo em jogo: cada conceito vira um obstáculo, e para passar é preciso raciocinar como programador.",
    passos: [
      {
        titulo: "Uma fase para cada conceito",
        texto:
          "O robô Bit atravessa 10 fases, do Vale dos Padrões ao Núcleo do Sistema: sequências e padrões, operadores E, OU e NÃO, se/senão, repetição, teste de mesa, vetores, funções, matrizes, depuração e uma revisão geral.",
      },
      {
        titulo: "Portões que pedem raciocínio",
        texto:
          "Cada portão abre com um desafio em Portugol. São 124 ao todo: 114 de lógica, em 10 temas, e 10 de segurança digital, com a explicação na hora.",
      },
      {
        titulo: "O mesmo programa em 21 linguagens",
        texto:
          "Depois de cada resposta, o aluno vê o mesmo programa escrito em 21 linguagens, como Python, Java, C e Lua.",
      },
      {
        titulo: "Feito para a sala de aula",
        texto:
          "Ranking separado por código de turma e um painel do professor com os temas em que a turma mais erra.",
      },
      {
        titulo: "Feito para a feira",
        texto:
          "No modo apresentação, o jogo roda sozinho na TV, com um QR Code para os visitantes jogarem no celular. Depois de 1 minuto parado, a demonstração volta.",
      },
    ],
    telas: [
      {
        ...webImage("estudo-logica-quest-desafio"),
        alt: "Desafio de lógica no terminal do jogo: qual número continua a sequência 3, 6, 9, 12?",
        legenda: "Um dos 124 desafios: o portão só abre com a resposta certa.",
      },
    ],
    resultados: [
      { valor: "10", rotulo: "fases, uma para cada conceito" },
      { valor: "124", rotulo: "desafios em Portugol" },
      { valor: "21", rotulo: "linguagens para comparar cada resposta" },
    ],
    tecnologias: ["JavaScript (Canvas 2D)", "HTML e CSS", "GSAP", "PWA", "Vercel", "Supabase"],
    url: "https://logica-quest-liart.vercel.app/",
  },
  {
    slug: "desafio-dos-2-reais",
    projeto: "Desafio dos R$ 2,00",
    categoria: "App gamificado · Educação financeira",
    resumo:
      "Cada dupla começou com R$ 2,00. Em menos de 3 semanas, o patrimônio das equipes passou de R$ 1.200.",
    ficha: [
      { rotulo: "Turmas", valor: "2º TDS A e 2º TDS B · Técnico em Desenvolvimento de Sistemas" },
      { rotulo: "Disciplina", valor: "Projeto de Vida" },
      { rotulo: "Período", valor: "De agosto a novembro" },
      { rotulo: "Ferramenta", valor: "Lovable" },
    ],
    capa: {
      ...webImage("capa-desafio-2reais"),
      alt: "Página inicial do Desafio dos R$ 2,00",
    },
    problema:
      "Ensinar educação financeira e empreendedorismo de forma prática para as turmas do 2º ano do Técnico em Desenvolvimento de Sistemas, na disciplina Projeto de Vida.",
    passos: [
      {
        titulo: "Capital de R$ 2,00",
        texto:
          "Cada dupla recebe R$ 2,00. O desafio é transformar esse capital em algo grande, com estratégia, planejamento e trabalho de verdade.",
      },
      {
        titulo: "Metas mensais progressivas",
        texto: "R$ 80, depois R$ 200, R$ 400 e R$ 800. As metas são desbloqueadas uma a uma.",
      },
      {
        titulo: "Lançamentos auditados",
        texto:
          "Toda movimentação, inclusive as despesas, é registrada no sistema e fica pendente até o professor aprovar. O ranking só considera valores aprovados, e usar dinheiro pessoal para inflar o patrimônio é proibido.",
      },
      {
        titulo: "XP e ranking ao vivo",
        texto:
          "Lançamentos, metas e conquistas rendem pontos de XP, e o placar compara o 2º TDS A e o 2º TDS B em tempo real, com um modo para a TV da sala.",
      },
    ],
    telas: [
      {
        ...webImage("estudo-desafio-placar"),
        alt: "Placar ao vivo com o patrimônio total acumulado do 2º TDS A e do 2º TDS B",
        legenda: "Placar ao vivo: o comparativo de patrimônio entre as duas turmas.",
        retrato: true,
      },
      {
        ...webImage("estudo-desafio-regras"),
        alt: "Regras do Desafio: cada equipe começa com R$ 2,00 e todo lançamento fica pendente até o professor aprovar",
        legenda: "Regras: todo lançamento passa pela aprovação do professor.",
      },
    ],
    resultados: [
      { valor: "+R$ 1.200", rotulo: "de patrimônio somado das equipes" },
      { valor: "< 3", rotulo: "semanas para chegar lá" },
      { valor: "R$ 2,00", rotulo: "de capital inicial por dupla" },
    ],
    tecnologias: ["Lovable"],
    url: "https://desafio2reais.lovable.app/",
  },
];

export function buscarEstudo(slug: string): EstudoDeCaso | undefined {
  return estudos.find((e) => e.slug === slug);
}

/** Slug do estudo de um projeto, para o link no card. */
export function estudoDoProjeto(nome: string): string | undefined {
  return estudos.find((e) => e.projeto === nome)?.slug;
}
