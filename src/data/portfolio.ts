/**
 * Fonte única de conteúdo do portfólio.
 *
 * REGRA: nada aqui pode ser inventado. Todo o conteúdo abaixo vem do
 * currículo oficial (Huiatã Ribeiro Coutinho — Instrutor de TI, 2026)
 * e do briefing enviado. Campos sem informação confirmada ficam vazios
 * para que a interface exiba um espaço reservado.
 */

import resumeAsset from "@/assets/curriculo.pdf.asset.json";

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
  name: "Huiatã Ribeiro Coutinho",
  role: "Instrutor de Informática — Educação Profissional | Docente Mentor | Técnico em TI",
  tagline: "Transformando tecnologia em conhecimento, experiências e soluções.",
  closing:
    "O conhecimento ganha valor quando transforma pessoas e cria novas possibilidades.",
  location: "Senador Canedo — GO",
  phone: "(62) 98618-4295",
  email: "huiataribeiro@gmail.com",
  credential: "CRT-01 Ativo",
} as const;

/** Resumo profissional — extraído do currículo. */
export const aboutPoints: readonly string[] = [
  "Instrutor de Informática no SENAI, no Curso Técnico em Desenvolvimento de Sistemas.",
  "Técnico em TI com mais de 10 anos em suporte, hardware e infraestrutura de redes.",
  "Docente Mentor de mais de 70 professores da rede estadual (Profissionaliza Goiás).",
  "Palestrante convidado no encerramento da Academia de Neurodocência do SENAI (2025).",
  "Cursando MBA em Inteligência Artificial com ênfase em Inovação e Negócios (IPOG).",
  "Registrado no CRT-01, com mais de 65 certificações na UniIndústria SENAI.",
];

export interface TimelineStep {
  readonly title: string;
  readonly description: string;
}

/** Trajetória com marcos e datas confirmadas no currículo. */
export const timeline: readonly TimelineStep[] = [
  {
    title: "2011 – 2013 · Redes de Computadores",
    description: "Tecnólogo na Faculdade Estácio de Sá de Goiás (FESGO) e primeiras atuações em TI.",
  },
  {
    title: "2011 – 2015 · Base técnica",
    description: "Call center, servidores de impressão e suporte Helpdesk na SEGPLAN/Fund. Pró-Cerrado.",
  },
  {
    title: "2017 – 2022 · Hardware e garantia",
    description: "Técnico em RMA na PRIMETEK: diagnóstico, testes e procedência de defeitos.",
  },
  {
    title: "2022 – 2025 · Infraestrutura SENAI",
    description: "Técnico de Informática III no SENAI Dr. Celso Charuri: parque tecnológico, rede e data center.",
  },
  {
    title: "2025 · Sala de aula",
    description: "Instrutor de Informática III no Profissionaliza Goiás e Docente Mentor da rede estadual.",
  },
  {
    title: "2026 – 2027 · Inteligência Artificial",
    description: "MBA em IA com ênfase em Inovação e Negócios (IPOG), em andamento.",
  },
];

export const experienceCards: readonly TimelineStep[] = [
  {
    title: "SENAI / Profissionaliza Goiás · Jan/2025 – Atual",
    description:
      "Instrutor de Informática III no CEPI Elberto Alves Batista: aulas teóricas e práticas do Técnico em Desenvolvimento de Sistemas, planejamentos conforme a MSEP e o Plano de Curso.",
  },
  {
    title: "Docente Mentor · Formação Docente",
    description:
      "Encontros mensais de mentoria por área para mais de 70 professores dos cursos Técnicos em Redes de Computadores e em Desenvolvimento de Sistemas.",
  },
  {
    title: "Acompanhamento pedagógico",
    description:
      "Orientação de TCC, acompanhamento de estagiários e aprendizes, avaliação, recuperação de notas e preparação para as Olimpíadas do Conhecimento.",
  },
  {
    title: "SENAI Dr. Celso Charuri · Jun/2022 – Jan/2025",
    description:
      "Técnico de Informática III: parque tecnológico da unidade, chamados, perfis e acessos, hosts em domínio, CFTV e controle patrimonial de TI.",
  },
  {
    title: "Cabeamento e data center",
    description:
      "Planejou e executou a organização do cabeamento estruturado em salas de aula, áreas administrativas e data center, elevando a rastreabilidade da infraestrutura.",
  },
  {
    title: "PRIMETEK · Dez/2017 – Jun/2022",
    description:
      "Técnico em RMA: testes, diagnósticos e processos de garantia, suporte em hardware e software, montagem e instalação de sistemas.",
  },
];

export const doingWords: readonly TimelineStep[] = [
  {
    title: "ENSINO",
    description:
      "Aulas teóricas e práticas do Técnico em Desenvolvimento de Sistemas, com planejamento MSEP, SAEP e acompanhamento pelo AVA.",
  },
  {
    title: "MENTORIA",
    description:
      "Formação de mais de 70 docentes da rede estadual com situações de aprendizagem, neurodocência aplicada e rodas de conversa.",
  },
  {
    title: "INFRAESTRUTURA",
    description:
      "Redes locais, cabeamento estruturado Furukawa, racks, data center e suporte técnico nível 1 e 2.",
  },
  {
    title: "INTELIGÊNCIA ARTIFICIAL",
    description:
      "IA generativa e engenharia de prompt aplicadas a material didático, avaliações, AVA e produtividade.",
  },
  {
    title: "LIDERANÇA",
    description:
      "Mais de 10 anos liderando grupos de jovens, com palestras 4 vezes ao ano para públicos de mais de 200 pessoas.",
  },
];

export interface SkillGroup {
  readonly category: string;
  readonly items: readonly string[];
}

export const skills: readonly SkillGroup[] = [
  {
    category: "Docência e Educação Profissional",
    items: [
      "Planos de aula e de curso",
      "Metodologia SENAI (MSEP)",
      "SAEP",
      "Métodos de avaliação",
      "AVA",
      "Didática",
    ],
  },
  {
    category: "Mentoria e Formação de Docentes",
    items: [
      "Mentoria por área",
      "Alinhamento pedagógico",
      "Neurodocência aplicada",
      "Situações de aprendizagem",
      "Roda de conversa",
    ],
  },
  {
    category: "Infraestrutura e Redes",
    items: [
      "Cabeamento estruturado (Furukawa)",
      "Redes locais (LAN)",
      "Racks",
      "Data center",
    ],
  },
  {
    category: "Suporte Técnico e Hardware",
    items: [
      "Helpdesk nível 1 e 2",
      "Gestão de chamados",
      "Manutenção preventiva e corretiva",
      "Diagnóstico de falhas",
      "Processos de RMA",
      "Hosts em domínio",
    ],
  },
  {
    category: "Segurança da Informação",
    items: ["Fundamentos de cibersegurança", "LGPD", "Monitoramento de CFTV"],
  },
  {
    category: "Inteligência Artificial Aplicada",
    items: [
      "IA generativa",
      "Engenharia de prompt",
      "IA na avaliação e no material didático",
      "Microsoft 365 e Copilot",
    ],
  },
  {
    category: "Sistemas e Ferramentas",
    items: ["Windows", "Linux", "Word", "Excel", "PowerPoint"],
  },
  {
    category: "Idiomas",
    items: ["Português (nativo)", "Inglês (básico)", "Espanhol (básico)"],
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
    summary: "Projeto educacional gamificado conduzido com as turmas.",
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
  "Material didático",
  "Avaliações",
  "Apoio ao AVA",
  "Capacitação docente",
  "Gestão e produtividade",
];

/** Formação acadêmica — conforme currículo. */
export const education: readonly TimelineStep[] = [
  {
    title: "MBA em Inteligência Artificial com Ênfase em Inovação e Negócios · 2026 – 2027",
    description:
      "IPOG — Instituto de Pós-Graduação · Em andamento. Módulos concluídos: fundamentos de IA e negócios; IA generativa e engenharia de prompt; IA aplicada a gestão, produtividade, operações e comunicação.",
  },
  {
    title: "Técnico em Montagem e Manutenção de Computadores · 2022 – 2023",
    description: "FATESG — SENAI · Concluído.",
  },
  {
    title: "Tecnólogo em Redes de Computadores · 2011 – 2013",
    description: "Faculdade Estácio de Sá de Goiás (FESGO) · Concluído.",
  },
  {
    title: "Certificações e desenvolvimento contínuo",
    description:
      "CRT-01 ativo e mais de 65 certificações na UniIndústria SENAI: Formação Docente I e II, Academia de Neurodocência, Mentoria Pedagógica, IA no dia a dia, Data Cabling System Furukawa, Cloud Computing, Data Science, IoT, LIBRAS, Liderança e NR-5.",
  },
];

export interface Metric {
  readonly value: string;
  readonly label: string;
}

export const metrics: readonly Metric[] = [
  { value: "+10", label: "anos de experiência em TI" },
  { value: "+70", label: "professores mentorados na rede estadual" },
  { value: "+65", label: "certificações na UniIndústria SENAI" },
  { value: "3,50", label: "avaliação institucional acima do esperado (escala até 4,0)" },
  { value: "+200", label: "pessoas por evento em palestras de projeto de vida" },
];

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  readonly relation?: string;
}

/** Depoimentos: somente mensagens reais fornecidas pelo usuário. */
export const testimonials: readonly Testimonial[] = [];

export const futureSteps: readonly string[] = [
  "Educação Profissional",
  "Inteligência Artificial",
  "Formação de Docentes",
  "Inovação",
  "NOVOS PROJETOS",
];

export interface ContactLink {
  readonly label: string;
  readonly url?: string;
}

export const contactLinks: readonly ContactLink[] = [
  { label: "LinkedIn" },
  { label: "WhatsApp", url: "https://wa.me/5562986184295" },
  { label: "E-mail", url: "mailto:huiataribeiro@gmail.com" },
  { label: "Telefone", url: "tel:+5562986184295" },
];

/** Currículo em PDF publicado como asset do projeto. */
export const resumeUrl: string | undefined = resumeAsset.url;
