/**
 * Fonte única de conteúdo do portfólio.
 *
 * REGRA: nada aqui pode ser inventado. Campos sem informação confirmada
 * ficam como `[]` ou com `pending: true` para que a interface exiba um
 * espaço reservado em vez de dados falsos.
 */

export interface Chapter {
  readonly id: string;
  readonly index: string;
  readonly label: string;
}

export const chapters: readonly Chapter[] = [
  { id: "intro", index: "01", label: "INTRO" },
  { id: "sobre", index: "02", label: "SOBRE" },
  { id: "trajetoria", index: "03", label: "TRAJETÓRIA" },
  { id: "experiencia", index: "04", label: "EXPERIÊNCIA" },
  { id: "atuacao", index: "05", label: "ATUAÇÃO" },
  { id: "tecnologias", index: "06", label: "TECNOLOGIAS" },
  { id: "projetos", index: "07", label: "PROJETOS" },
  { id: "pratica", index: "08", label: "PRÁTICA" },
  { id: "educacao", index: "09", label: "EDUCAÇÃO" },
  { id: "ia", index: "10", label: "IA" },
  { id: "formacao", index: "11", label: "FORMAÇÃO" },
  { id: "impacto", index: "12", label: "IMPACTO" },
  { id: "depoimentos", index: "13", label: "DEPOIMENTOS" },
  { id: "futuro", index: "14", label: "FUTURO" },
  { id: "contato", index: "15", label: "CONTATO" },
];

export const profile = {
  name: "Huiatã Ribeiro",
  role: "Instrutor de Tecnologia | Desenvolvimento de Sistemas | Inteligência Artificial",
  tagline: "Transformando tecnologia em conhecimento, experiências e soluções.",
  closing:
    "O conhecimento ganha valor quando transforma pessoas e cria novas possibilidades.",
} as const;

/** Frases curtas — baseadas exclusivamente no posicionamento informado. */
export const aboutPoints: readonly string[] = [
  "Atuação na interseção entre tecnologia e educação.",
  "Instrutor de tecnologia, formando estudantes na prática.",
  "Desenvolvimento de sistemas e programação.",
  "Inteligência artificial aplicada à educação e à produtividade.",
  "Projetos práticos como método de aprendizagem.",
];

export interface TimelineStep {
  readonly title: string;
  readonly description: string;
}

/** Evolução conceitual informada no briefing (sem datas não confirmadas). */
export const timeline: readonly TimelineStep[] = [
  { title: "Experiência", description: "Base profissional construída na prática." },
  { title: "Tecnologia", description: "Aprofundamento técnico e uso de ferramentas." },
  { title: "Educação", description: "Atuação como instrutor de tecnologia." },
  { title: "Desenvolvimento", description: "Programação e criação de sistemas." },
  {
    title: "Inteligência Artificial",
    description: "IA aplicada à educação, ao desenvolvimento e à produtividade.",
  },
  { title: "Inovação", description: "Novas formas de ensinar e de construir soluções." },
];

export const experienceCards: readonly TimelineStep[] = [
  { title: "Atuação profissional", description: "Instrutor de tecnologia no SENAI." },
  { title: "Ensino de tecnologia", description: "Programação, redes e desenvolvimento." },
  { title: "Formação de estudantes", description: "Acompanhamento técnico e prático." },
  { title: "Aulas práticas", description: "Aprendizagem baseada em execução real." },
  { title: "Desenvolvimento de projetos", description: "Projetos conduzidos com as turmas." },
  { title: "Inovação educacional", description: "Gamificação e experiências de aprendizagem." },
];

export const doingWords: readonly TimelineStep[] = [
  { title: "ENSINO", description: "Mediação técnica e formação de estudantes." },
  { title: "TECNOLOGIA", description: "Programação, redes e infraestrutura." },
  { title: "DESENVOLVIMENTO", description: "Construção de sistemas e soluções web." },
  { title: "INTELIGÊNCIA ARTIFICIAL", description: "IA generativa e engenharia de prompts." },
  { title: "INOVAÇÃO", description: "Novos formatos de ensinar tecnologia." },
];

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

export const skills: readonly SkillGroup[] = [
  {
    category: "Desenvolvimento",
    items: ["HTML", "CSS", "JavaScript", "Python", "Portugol", "Scratch"],
  },
  {
    category: "Redes",
    items: [
      "Redes de computadores",
      "Cabeamento",
      "Configuração de equipamentos",
      "Infraestrutura",
    ],
  },
  {
    category: "Inteligência Artificial",
    items: [
      "Ferramentas de IA",
      "IA generativa",
      "Engenharia de prompts",
      "Aplicações de IA",
    ],
  },
  {
    category: "Ferramentas",
    items: ["Google Colab", "VS Code", "GitHub", "Google Workspace", "Lovable"],
  },
];

export interface Project {
  readonly name: string;
  readonly summary: string;
  readonly problem?: string;
  readonly solution?: string;
  readonly tech?: readonly string[];
  readonly url?: string;
}

export const projects: readonly Project[] = [
  {
    name: "Desafio R$ 2",
    summary: "Projeto educacional gamificado.",
  },
  {
    name: "Cápsula do Tempo",
    summary: "Projeto digital relacionado à experiência educacional.",
  },
  {
    name: "Personal Lindy",
    summary: "Projeto de presença digital e desenvolvimento de solução web.",
  },
];

export const aiAreas: readonly string[] = [
  "Educação",
  "Desenvolvimento",
  "Produtividade",
  "Projetos",
  "Inovação",
];

/** Formação: aguardando os dados do currículo. */
export const education: readonly TimelineStep[] = [];

export interface Metric {
  readonly value: string;
  readonly label: string;
}

export const metrics: readonly Metric[] = [
  { value: "2022", label: "Início da atuação no SENAI" },
  { value: "+90", label: "estudantes envolvidos" },
];

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly relation?: string;
}

/** Depoimentos: somente mensagens reais fornecidas pelo usuário. */
export const testimonials: readonly Testimonial[] = [];

export const futureSteps: readonly string[] = [
  "Tecnologia",
  "Inteligência Artificial",
  "Educação",
  "Inovação",
  "NOVOS PROJETOS",
];

export interface ContactLink {
  readonly label: string;
  readonly url?: string;
}

/** Links: aguardando URLs reais. Sem URL, o item é exibido como pendente. */
export const contactLinks: readonly ContactLink[] = [
  { label: "LinkedIn" },
  { label: "GitHub" },
  { label: "WhatsApp" },
  { label: "E-mail" },
];

/** Currículo em PDF: adicionar o arquivo e preencher a URL. */
export const resumeUrl: string | undefined = undefined;
