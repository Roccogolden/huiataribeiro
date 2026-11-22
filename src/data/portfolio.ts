/**
 * Fonte única de conteúdo do portfólio.
 *
 * REGRA: nada aqui pode ser inventado. Todo o conteúdo abaixo vem do
 * currículo oficial (Huiatã Ribeiro Coutinho — Instrutor de TI, 2026)
 * e do briefing enviado. Campos sem informação confirmada ficam vazios
 * para que a interface exiba um espaço reservado.
 */

import resumeAsset from "@/assets/Huiata-Ribeiro-Curriculo-2026.pdf?url";
import awardResultAsset from "@/assets/Docente-TOP-10-6a-edicao-resultado-oficial.pdf?url";

export interface Chapter {
  readonly id: string;
  readonly index: string;
  readonly label: string;
}

export const chapters: readonly Chapter[] = [
  { id: "intro", index: "01", label: "INTRO" },
  { id: "sobre", index: "02", label: "SOBRE" },
  { id: "premio", index: "03", label: "DOCENTE TOP 10" },
  { id: "trajetoria", index: "04", label: "TRAJETÓRIA" },
  { id: "experiencia", index: "05", label: "EXPERIÊNCIA" },
  { id: "atuacao", index: "06", label: "ATUAÇÃO" },
  { id: "tecnologias", index: "07", label: "TECNOLOGIAS" },
  { id: "projetos", index: "08", label: "PROJETOS" },
  { id: "pratica", index: "09", label: "PRÁTICA" },
  { id: "educacao", index: "10", label: "EDUCAÇÃO" },
  { id: "dinamicas", index: "11", label: "DINÂMICAS" },
  { id: "ia", index: "12", label: "IA" },
  { id: "formacao", index: "13", label: "FORMAÇÃO" },
  { id: "impacto", index: "14", label: "IMPACTO" },
  { id: "depoimentos", index: "15", label: "DEPOIMENTOS" },
  { id: "futuro", index: "16", label: "FUTURO" },
  { id: "contato", index: "17", label: "CONTATO" },
];

/**
 * Ordem enxuta para quem rola a página no celular ou no computador.
 * O modo apresentação continua com os 17 capítulos, na ordem de `chapters`.
 */
export const webChapterIds: readonly string[] = [
  "intro",
  "sobre",
  "premio",
  "projetos",
  "webdesign",
  "educacao",
  "dinamicas",
  "impacto",
  "experiencia",
  "formacao",
  "tecnologias",
  "depoimentos",
  "contato",
];

export const profile = {
  name: "Huiatã Ribeiro Coutinho",
  role: "Instrutor de Informática no SENAI e docente mentor de mais de 70 professores da rede estadual de Goiás.",
  tagline:
    "Ensino desenvolvimento de sistemas com projetos reais: as turmas criam aplicativos que vão para o ar.",
  closing: "O conhecimento ganha valor quando transforma pessoas e cria novas possibilidades.",
  location: "Senador Canedo – GO",
  phone: "(62) 98618-4295",
  email: "huiataribeiro@gmail.com",
  credential: "CRT-01 ativo",
} as const;

/**
 * Docente TOP 10 — 6ª edição (ciclo 2026/2027).
 * Fonte: resultado oficial do Edital nº 006/2026, assinado em 17/11/2026 pelo
 * Diretor Regional do SENAI Goiás, e o vídeo "Vencedores Docente TOP 10 - 6ª Edição"
 * do canal Sistema FIEG no YouTube.
 */
export const award = {
  name: "Docente TOP 10",
  edition: "6ª edição · ciclo 2026/2027",
  program: "Programa Valorização Docente · SESI SENAI Goiás",
  unit: "SENAI Aparecida de Goiânia",
  publishedAt: "17 de novembro de 2026",
  notice: "Edital nº 006/2026",
  resultUrl: awardResultAsset,
  video: {
    id: "y3RUpArnYE8",
    title: "Vencedores Docente TOP 10 - 6ª Edição",
    channel: "Sistema FIEG",
  },
  facts: [
    {
      label: "Seleção",
      text: "10 vagas para toda a rede SESI SENAI de Educação em Goiás: 5 para docentes do SESI e 5 para docentes do SENAI, com no máximo 2 por unidade escolar.",
    },
    {
      label: "Critério",
      text: "Entraram as maiores pontuações totais, depois que a comissão avaliadora analisou a documentação comprobatória de cada inscrição.",
    },
    {
      label: "Prêmio",
      text: "Missão internacional à Itália em 2027, com visitas técnicas a instituições de educação básica, profissional e superior e à indústria e tecnologia.",
    },
  ],
} as const;

/**
 * Trabalho particular como web designer e desenvolvedor.
 * Fonte: huiataribeiro.dev (serviços sempre nesta ordem e clientes com site no ar).
 */
export const webDesign = {
  url: "https://huiataribeiro.dev",
  lead: "Fora da sala de aula, sou web designer e desenvolvedor em Senador Canedo – GO. Faço sites, landing pages, aplicativos e sistemas para negócios, cada um com a identidade da própria marca.",
  services: [
    {
      title: "Sites",
      text: "Para barbearia, clínica, estúdio, loja e outros negócios locais. O site mostra os serviços, as fotos e as avaliações e leva o cliente até o contato.",
    },
    {
      title: "Landing pages",
      text: "Para quem anuncia no Instagram ou no Google: uma página com um objetivo só, como vender um serviço, divulgar um lançamento ou receber contatos.",
    },
    {
      title: "Aplicativos",
      text: "Para atender o cliente pelo celular, direto no navegador e sem instalar nada: pedidos, agendamentos e acompanhamento.",
    },
    {
      title: "Sistemas",
      text: "Para organizar a rotina da equipe: painéis, agendas, cadastros e relatórios que funcionam no computador e no celular.",
    },
  ],
  clients: [
    {
      name: "Fino Trato Barbearia",
      kind: "Site · Barbearia",
      url: "https://barbearia-finotrato.vercel.app",
    },
    {
      name: "Mood Store",
      kind: "Site · Loja de produtos Apple",
      url: "https://mood-store.lovable.app",
    },
    {
      name: "Personal Lindy",
      kind: "Landing page · Personal trainer",
      url: "https://personallindy.com.br",
    },
    {
      name: "Vitalle Pilates e Fisioterapia",
      kind: "Site · Pilates e fisioterapia",
      url: "https://vitallepilatesefisio.com",
    },
  ],
} as const;

/** Resumo profissional — extraído do currículo. */
export const aboutPoints: readonly string[] = [
  "Instrutor de Informática no SENAI, no Curso Técnico em Desenvolvimento de Sistemas.",
  "Premiado na 6ª edição do Docente TOP 10 (SESI SENAI Goiás, ciclo 2026/2027), com missão internacional à Itália em 2027.",
  "3º lugar no Grand Prix SENAI de Inovação 2026 (SAGA SENAI de Inovação), com equipe de estudantes do SENAI Aparecida de Goiânia.",
  "Técnico em TI com mais de 10 anos em suporte, hardware e infraestrutura de redes.",
  "Docente Mentor de mais de 70 professores da rede estadual (Profissionaliza Goiás).",
  "Palestrante convidado no encerramento da Academia de Neurodocência do SENAI (2025), para mais de 200 professores da rede estadual de Goiás.",
  "Convidado, em 2025 e 2026, como palestrante motivacional para os alunos do 3º ano do Ensino Médio.",
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
    description:
      "Tecnólogo na Faculdade Estácio de Sá de Goiás (FESGO) e primeiras atuações em TI.",
  },
  {
    title: "2011 – 2015 · Base técnica",
    description:
      "Call center, servidores de impressão e suporte de helpdesk na SEGPLAN/Fundação Pró-Cerrado.",
  },
  {
    title: "2017 – 2022 · Hardware e garantia",
    description: "Técnico em RMA na PRIMETEK: diagnóstico, testes e procedência de defeitos.",
  },
  {
    title: "2022 – 2025 · Infraestrutura SENAI",
    description:
      "Técnico de Informática III no SENAI Dr. Celso Charuri: parque tecnológico, rede e data center.",
  },
  {
    title: "2025 · Sala de aula",
    description:
      "Instrutor de Informática III no Profissionaliza Goiás e Docente Mentor da rede estadual.",
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
      "Encontros mensais de mentoria por área para mais de 70 professores dos cursos técnicos em Redes de Computadores e em Desenvolvimento de Sistemas.",
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
      "Planejamento e execução do cabeamento estruturado em salas de aula, áreas administrativas e data center, com mais rastreabilidade da infraestrutura.",
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
      "Redes locais, cabeamento estruturado Furukawa, racks, data center e suporte técnico de níveis 1 e 2.",
  },
  {
    title: "INTELIGÊNCIA ARTIFICIAL",
    description:
      "IA generativa e engenharia de prompt aplicadas a material didático, avaliações, AVA e produtividade.",
  },
  {
    title: "LIDERANÇA",
    description:
      "Mais de 10 anos liderando grupos de jovens, com palestras quatro vezes por ano para públicos de mais de 200 pessoas.",
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
    items: ["Cabeamento estruturado (Furukawa)", "Redes locais (LAN)", "Racks", "Data center"],
  },
  {
    category: "Suporte Técnico e Hardware",
    items: [
      "Helpdesk de níveis 1 e 2",
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
  /** Tipo do projeto, em uma linha. */
  readonly category: string;
  /** O resultado concreto, que abre o card. */
  readonly result: string;
  /** Card largo na grade do computador. */
  readonly featured?: boolean;
  readonly summary: string;
  readonly problem?: string;
  readonly solution?: string;
  readonly tech?: readonly string[];
  readonly url?: string;
}

export const projects: readonly Project[] = [
  {
    name: "Desafio dos R$ 2,00",
    featured: true,
    category: "App gamificado · Educação financeira",
    result: "Em menos de 3 semanas, o patrimônio das equipes passou de R$ 1.200.",
    summary:
      "Aplicativo gamificado de educação financeira e empreendedorismo criado com as turmas.",
    problem:
      "Ensinar educação financeira e empreendedorismo de forma prática para as turmas do 2º ano do Técnico em Desenvolvimento de Sistemas, na disciplina Projeto de Vida.",
    solution:
      "Aplicativo web gamificado (de agosto a novembro): cada dupla recebe um capital inicial de R$ 2,00 e precisa transformá-lo em algo maior por meio de metas mensais progressivas, lançamentos auditados, sistema de XP e ranking ao vivo entre as turmas 2º TDS A e 2º TDS B. Em menos de 3 semanas, o patrimônio total das equipes já havia ultrapassado R$ 1.200.",
    tech: ["Lovable"],
    url: "https://desafio2reais.lovable.app/",
  },
  {
    name: "Top Burguer",
    category: "Sistema · Projeto de culminância",
    result: "Pedido pelo QR Code da mesa e painel da cozinha em tempo real.",
    summary:
      "Simulação de hamburgueria inteligente — projeto de culminância do Técnico em Desenvolvimento de Sistemas.",
    problem:
      "Simular, na prática, como a tecnologia resolve os gargalos do atendimento tradicional: filas e espera, erros de comunicação entre atendimento e cozinha, gestão sem dados em tempo real e processos manuais.",
    solution:
      "Projeto de culminância do Técnico em Desenvolvimento de Sistemas (SENAI, CEPI Elberto Alves Batista, turmas do 2º ano A e B), sob a responsabilidade do professor Huiatã Ribeiro: uma hamburgueria simulada 100% digital, com cardápio e pedidos por QR Code na mesa, painel de pedidos em tempo real na cozinha (KDS) e acompanhamento de status pelo cliente. Os alunos se organizaram em squads (Tech, Experience, Food, Pitch, Design & Marketing, Support), aplicando técnicas como Design Thinking, brainstorming e Business Model Canvas.",
    tech: ["Lovable"],
    url: "https://topburguer.lovable.app/",
  },
  {
    name: "Lógica Quest",
    featured: true,
    category: "Jogo · Lógica de programação",
    result:
      "10 fases e 124 desafios. Depois de cada resposta, o aluno vê o mesmo programa em 21 linguagens.",
    summary:
      "Jogo de plataforma para praticar raciocínio lógico e lógica de programação, criado com os estudantes do Técnico em Desenvolvimento de Sistemas.",
    problem:
      "Lógica de programação é a porta de entrada da área. A ideia foi transformar o conteúdo em jogo: cada conceito vira um obstáculo, e para passar é preciso raciocinar como programador.",
    solution:
      "O robô Bit atravessa 10 fases, do Vale dos Padrões ao Núcleo do Sistema. Cada portão abre com um desafio em Portugol (114 de lógica em 10 temas e 10 de segurança digital), com explicação na hora e o mesmo programa em Python, Java, C, Lua e outras linguagens. Tem ranking por código de turma, painel do professor com os temas em que a turma mais erra e modo apresentação para feiras. Roda no navegador e pode ser instalado como aplicativo. Projeto dos estudantes do 1º ano A (matutino) do Colégio João Carneiro, SENAI Senador Canedo, preparado para o Evento de Ciências e Tecnologia de novembro de 2026.",
    tech: ["JavaScript (Canvas 2D)", "HTML e CSS", "GSAP", "PWA", "Vercel", "Supabase"],
    url: "https://logica-quest-liart.vercel.app/",
  },
  {
    name: "Laboratório de Lógica",
    category: "Jogo · Algoritmos",
    result:
      "O aluno aprende algoritmos montando sequências de comandos, resolvendo labirintos e enfrentando um chefão no final.",
    summary: "Jogo de lógica para a sala de aula, com missões interativas e ranking.",
    url: "https://jogodelogica.com.br/",
  },
  {
    name: "Reserva Lab",
    category: "Sistema · Feito pelas turmas",
    result: "A reserva do laboratório saiu do papel e virou um fluxo digital.",
    summary:
      "Sistema de reserva do laboratório de informática do CEPI Elberto Alves Batista, desenvolvido pelos alunos do 2º ano A e B.",
    problem:
      "O laboratório de informática do CEPI Elberto Alves Batista era reservado em papel, o que dificultava o controle e gerava conflitos de agenda.",
    solution:
      "Sistema digital de reserva de laboratório, desenvolvido pelas turmas do 2º ano A e B do Técnico em Desenvolvimento de Sistemas como projeto das disciplinas de Projetos e Programação de Aplicativos, substituindo o controle em papel por um fluxo digital.",
    tech: ["Lovable"],
    url: "https://reserva-lab.lovable.app/",
  },
  {
    name: "Cápsula do Tempo",
    category: "Dinâmica com app · Projeto de Vida",
    result:
      "Cada aluno guardou o seu “eu de hoje” numa cápsula digital, que será reaberta em novembro de 2027.",
    summary:
      "Cápsula do Tempo — Upgrade 3.0: uma reflexão guiada sobre evolução pessoal ao longo do tempo.",
    problem:
      "Ajudar os alunos a fazer um diagnóstico honesto de si mesmos hoje — reflexões e planos — para comparar com quem eles serão no futuro.",
    solution:
      "Dinâmica estruturada como Upgrade 3.0: cada aluno registra um diagnóstico, reflexões e planos como “eu de hoje” (agosto de 2026), guardados em uma cápsula do tempo digital para serem reabertos como “eu do futuro” em novembro de 2027. A experiência também ganhou uma versão física: uma cápsula real, assinada pelos alunos, lacrada em um case reforçado para ser reaberta só no futuro. A regra central: não é sobre ser perfeito, é sobre perceber o quanto é possível evoluir.",
    tech: ["Lovable"],
    url: "https://upgrade3.lovable.app/",
  },
  {
    name: "Personal Lindy",
    category: "Site · Personal trainer online",
    result: "Site no ar com domínio próprio e contato direto pelo WhatsApp.",
    summary:
      "Landing page para a Personal Lindy, personal trainer online, com captação de clientes via WhatsApp.",
    problem:
      "Dar presença digital profissional a um serviço de personal trainer online, com uma landing page que apresente os treinos personalizados e facilite o contato direto com clientes.",
    solution:
      "Página feita no Lovable, com código versionado no GitHub, publicação contínua na Vercel e cópia do repositório no computador. Domínio próprio (personallindy.com.br) configurado na Hostinger. Desenvolvimento com apoio de Claude Code, VS Code (Python) e Antigravity.",
    tech: [
      "Lovable",
      "GitHub",
      "Vercel",
      "Hostinger",
      "Claude Code",
      "VS Code",
      "Python",
      "Antigravity",
    ],
    url: "https://personallindy.com.br/",
  },
];

export const aiAreas: readonly string[] = [
  "Material didático",
  "Avaliações",
  "Apoio ao AVA",
  "Capacitação docente",
  "Gestão e produtividade",
];

/**
 * Dinâmicas de sala de aula — extraídas do material "Experiências Práticas nas aulas
 * do Curso Técnico em Desenvolvimento de Sistemas (Senai)", turmas do 1º ano A e B.
 */
export const classroomDynamics: readonly string[] = [
  "Montagem de computador",
  "Desafios de lógica",
  "Simulações em grupo",
  "Segurança da informação",
  "Simulação de prototipagem de aplicativo",
  "Montagem de minirrede LAN",
  "Introdução à Internet das Coisas (IoT)",
  "Conceito dos 3 Rs",
  "Aplicando os 5S",
  "Programação em blocos com Scratch e robótica",
  "Simulação de consultoria",
  "Árvores da vida",
  "Estágio, Jovem Aprendiz e simulação de entrevista",
  "Simulação de comunicação",
  "Introdução a banco de dados",
  "Programando um robô humano",
  "Gestão e descarte de resíduos na escola",
  "Lógica de programação com Python",
];

/** Fonte dos resultados abaixo, exibida junto com eles. */
export const classroomResultsSource =
  "Fonte: relatório “Experiências Práticas nas aulas do Curso Técnico em Desenvolvimento de Sistemas (SENAI)”, turmas do 1º ano A e B.";

/** Resultados observados com as dinâmicas práticas, conforme o mesmo material. */
export const classroomResults: readonly Metric[] = [
  { value: "85%", label: "Maior participação durante as aulas práticas" },
  { value: "3x", label: "Mais perguntas e dúvidas em sala — sinal de interesse genuíno" },
  { value: "70%", label: "Autonomia crescente: alunos buscando desafios extras" },
];

/** Formação acadêmica — conforme currículo. */
export const education: readonly TimelineStep[] = [
  {
    title: "MBA em Inteligência Artificial com Ênfase em Inovação e Negócios · 2026 – 2027",
    description:
      "IPOG — Instituto de Pós-Graduação · em andamento. Módulos concluídos: fundamentos de IA e negócios; IA generativa e engenharia de prompt; IA aplicada à gestão, à produtividade, às operações e à comunicação.",
  },
  {
    title: "Técnico em Montagem e Manutenção de Computadores · 2022 – 2023",
    description: "FATESG — SENAI · concluído.",
  },
  {
    title: "Tecnólogo em Redes de Computadores · 2011 – 2013",
    description: "Faculdade Estácio de Sá de Goiás (FESGO) · concluído.",
  },
  {
    title: "Certificações internacionais · 2023 – 2026",
    description:
      "Wadhwani Foundation: Faculty Orientation Program do curso 21st Century Employability Skills (março de 2026, com validação em cert.wfglobal.org/verify, código iukQWsLaUO). Lightera Academy · Furukawa Electric: treinamento Data Cabling System, com 28 horas (abril de 2023).",
  },
  {
    title: "Certificações e desenvolvimento contínuo",
    description:
      "CRT-01 ativo e mais de 65 certificações na UniIndústria SENAI: Formação Docente I e II, Academia de Neurodocência, Mentoria Pedagógica, IA no dia a dia, Cloud Computing, Data Science, IoT, LIBRAS, Liderança e NR-5.",
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
  /** Curtos e concretos: aparecem em destaque no portfólio. */
  readonly featured?: boolean;
}

/** Depoimentos: somente mensagens reais fornecidas pelo usuário. */
export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "Fazer o curso de Desenvolvimento de Sistemas tem sido uma experiência muito boa. Mesmo sem toda a estrutura de que o curso precisa, a gente consegue aprender bastante. O professor Huiatã Ribeiro sempre prepara as aulas e ajuda a gente a desenvolver novas habilidades. Nesse tempo de curso, aprendi muitas coisas que vão me ajudar no futuro e na minha entrada no mercado de trabalho.",
    author: "Nivia Vitória",
    relation: "2º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Durante o curso, aprendi várias coisas que eu não fazia ideia de que conseguia. Com o auxílio do professor Huiatã Ribeiro, aprendemos a lidar não só com os desafios dentro da sala de aula, mas também com os desafios da vida. Vou sempre levar comigo a certeza de que fazer o curso foi a minha melhor escolha.",
    author: "Izabelly Ramos",
    relation: "2º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Ter a oportunidade de fazer o curso de Desenvolvimento de Sistemas com o professor Huiatã Ribeiro não foi somente um aprendizado escolar: são lições que eu vou levar para a vida. Ele não é apenas um professor para a nossa turma, mas também um pai. Ele ensina, educa, pega no pé sempre que necessário e é nosso amigo, que sempre estará ali caso a gente precise de apoio ou de qualquer ajuda. Ter a oportunidade de ter um professor como ele foi a melhor coisa que me aconteceu. Sou muito grata por tudo.",
    author: "Isadora Gomes Lima",
    relation: "2º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Fazer parte do curso de Desenvolvimento de Sistemas está sendo uma experiência muito especial para mim. Além dos conhecimentos que estou aprendendo, também estou aprendendo lições que vou levar para a vida. O professor Huiatã não ensina apenas a matéria, ele se preocupa com cada aluno, incentiva, orienta e sempre procura o melhor para todos nós. Quando precisamos de ajuda, ele está disposto a ouvir e apoiar, e quando é necessário, também nos corrige para que possamos crescer e evoluir. Sua dedicação, sua paciência e seu carinho com a turma fazem toda a diferença. Sou muito grata pela oportunidade de aprender com um professor tão especial e por tudo o que esse curso está me ensinando.",
    author: "Thárcila da Silva Dias",
    relation: "2º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Quando comecei o curso Técnico em Desenvolvimento de Sistemas, não imaginava o quanto essa experiência iria contribuir para o meu crescimento. Ao longo dessa jornada, aprendi muito sobre tecnologia, programação e trabalho em equipe, desenvolvendo habilidades que levarei para a vida toda. Além das aulas, tivemos experiências incríveis, como as visitas técnicas aos data centers, que nos permitiram conhecer na prática como funciona a área de tecnologia e ampliar nossa visão sobre o mercado de trabalho. Também gostaria de agradecer ao professor Huiatã Ribeiro, que sempre nos incentivou a buscar mais conhecimento, enfrentar desafios e acreditar no nosso potencial. Sua dedicação fez toda a diferença na nossa formação. Hoje tenho a certeza de que escolher esse curso foi uma decisão muito importante para o meu futuro, e sou grata por todas as oportunidades, aprendizados e experiências que vivi durante essa trajetória.",
    author: "Ana Beatriz dos Santos Filgueiras",
    relation: "2º Ano B · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Ter a oportunidade de ser aluno do professor Huiatã foi um privilégio. Seu impacto vai muito além do conteúdo do curso, pois ele contribui diretamente para a formação de pessoas melhores e mais preparadas para o futuro. Sou extremamente grato por tudo o que aprendi e tenho certeza de que essa experiência marcará minha vida para sempre.",
    author: "Samuel Vitor Alves Silva",
    relation: "2º Ano B · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Achei que programação seria difícil demais, mas, em um curso que estava fazendo fora da escola, o professor começou a explicar sobre programação. Na hora, lembrei das aulas do curso técnico no SENAI e consegui fazer alguns comandos. O professor ficou impressionado e me elogiou bastante! Foi muito gratificante ver que realmente aprendi.",
    author: "Bryan",
    featured: true,
    relation: "1º Ano B · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "A aula em que desmontamos e montamos um computador foi incrível! Nunca imaginei que tinha tanta coisa dentro. Agora entendo melhor como tudo funciona junto.",
    author: "Pablo",
    featured: true,
    relation: "1º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Na aula prática de entrevista de emprego, recebi vários feedbacks sobre meu currículo e minha postura. Segui todas as orientações, ajustei meu currículo e comecei a me candidatar a vagas. Pouco tempo depois, recebi duas propostas de trabalho! Essa experiência me mostrou o quanto essas aulas práticas fazem diferença de verdade.",
    author: "Jordana",
    featured: true,
    relation: "1º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Entrei no curso técnico em Desenvolvimento de Sistemas no primeiro ano e, hoje, já no segundo ano, posso dizer que foi uma das melhores experiências que já tive. Durante esse tempo, aprendi muito mais do que programação e tecnologia. Aprendi a acreditar mais em mim e a enxergar que sou capaz de ir muito além do que imaginava. Grande parte disso eu devo ao professor Huiatã Ribeiro. Ele é um professor incrível, daqueles que realmente se importam com os alunos. Para mim, ele foi muito mais do que um professor: foi como um pai em vários momentos, sempre incentivando, apoiando e mostrando que eu era capaz de enfrentar qualquer desafio. Sou muito grata por tudo o que aprendi nesse curso e por ter tido a oportunidade de conhecer um profissional e ser humano tão especial. Tenho muito carinho e admiração pelo professor Huiatã e pelo curso, que marcaram minha vida de uma forma que vou levar para sempre.",
    author: "Adrielly",
    relation: "2º Ano A · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "E do Huiatã nem preciso falar... Ele fez o possível e o impossível, e somos eternamente gratos por tudo: por ter nos apoiado e por ter nos confiado essa responsabilidade, que também colocava o nome dele em jogo. Nosso professor e paizão, muito obrigada, Huiatã, por dar sempre o seu máximo por nós! O carinho que eu e todos temos por você nunca vai mudar! Obrigada por ser um grande professor, amigo e parceiro!",
    author: "Bianca",
    relation: "Aluna · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Obrigada pela dedicação, pela paciência e por sempre nos incentivar a dar o nosso melhor. Suas aulas vão muito além do conteúdo — elas nos ensinam responsabilidade, trabalho em equipe e confiança. Se não fosse pelo seu apoio, incentivo e confiança em nossa turma, nada disso teria acontecido da mesma forma.",
    author: "Anna Beatriz",
    relation: "Aluna · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
  {
    quote:
      "Agradeço muito a você, professor! Se não fosse pela sua orientação e pelo que nos ensinou, nada disso teria dado certo. Muito obrigada por tudo!",
    author: "Nara",
    relation: "Aluna · Técnico em Desenvolvimento de Sistemas, SENAI",
  },
];

export const futureSteps: readonly string[] = [
  "Educação profissional",
  "Inteligência artificial",
  "Formação de docentes",
  "Inovação",
  "Novos projetos",
];

export interface ContactLink {
  readonly label: string;
  readonly url?: string;
}

export const contactLinks: readonly ContactLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/huiataribeiro" },
  { label: "WhatsApp", url: "https://wa.me/5562986184295" },
  { label: "E-mail", url: "mailto:huiataribeiro@gmail.com" },
  { label: "Telefone", url: "tel:+5562986184295" },
];

/** Currículo em PDF publicado como asset do projeto. */
export const resumeUrl: string | undefined = resumeAsset;

/** Pasta compartilhada com os registros das aulas do Técnico em Desenvolvimento de Sistemas (SENAI). */
export const classroomDriveUrl =
  "https://drive.google.com/drive/folders/1Wv8JwaqaLX1Awhp_HPAC_hjb1Pz1YBPu?usp=drive_link";
