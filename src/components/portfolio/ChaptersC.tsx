import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Mail, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  aiAreas,
  classroomDriveUrl,
  classroomDynamics,
  classroomResults,
  contactLinks,
  education,
  futureSteps,
  metrics,
  profile,
  testimonials,
} from "@/data/portfolio";
import { photos } from "@/data/photos";
import { PendingContent, PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

/** Registros reais de sala de aula e eventos. */
const classroomPhotos = [
  { label: "Sala de aula", photo: photos.salaManutencao },
  { label: "Com estudantes", photo: photos.salaSelfie },
  { label: "Projeto em aula", photo: photos.salaDestaque },
  { label: "Registro espontâneo", photo: photos.salaKahoot },
] as const;
import { ResumeButton } from "./ChaptersA";

export function EducationTechChapter() {
  return (
    <SectionShell
      id="educacao"
      index="09"
      eyebrow="Educação + Tecnologia"
      title={
        <>
          Mais do que ensinar tecnologia.
          <br />
          <span className="text-brand-gradient">
            Eu crio experiências para ensinar tecnologia.
          </span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <ul className="flex flex-wrap gap-3">
          {[
            "Aulas práticas",
            "Projetos",
            "Programação",
            "Redes",
            "Desenvolvimento",
            "Gamificação",
            "Inteligência artificial",
            "Atividades práticas",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <li className="surface-glass rounded-full px-6 py-3 text-lg md:text-2xl">{item}</li>
            </Reveal>
          ))}
        </ul>
        <div>
          <div className="grid grid-cols-2 gap-5">
            {classroomPhotos.map(({ label, photo }, i) => (
              <Reveal key={label} delay={i * 90}>
                <PhotoPlaceholder photo={photo} label={label} ratio="landscape" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={360}>
            <a
              href={classroomDriveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="surface-glass mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold hover:bg-secondary"
              aria-label="Ver todos os registros das aulas no Google Drive (abre em nova aba)"
            >
              Ver todos os registros das aulas
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

export function ClassroomDynamicsChapter() {
  return (
    <SectionShell
      id="dinamicas"
      index="10"
      eyebrow="Dinâmicas em Sala"
      title={
        <>
          Pequenas mudanças em sala,
          <br />
          <span className="text-brand-gradient">grandes transformações.</span>
        </>
      }
      lead="Dinâmicas e atividades que têm engajado os alunos e transformado a aprendizagem — turmas do 1º ano do Ensino Médio Técnico, com celulares pessoais, Chromebooks compartilhados e muita criatividade."
    >
      <ul className="flex flex-wrap gap-3">
        {classroomDynamics.map((item, i) => (
          <Reveal key={item} delay={i * 40}>
            <li className="surface-glass rounded-full px-5 py-2.5 text-base md:text-lg">{item}</li>
          </Reveal>
        ))}
      </ul>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {classroomResults.map((result, i) => (
          <Reveal key={result.label} delay={i * 120} className="min-w-0">
            <div className="surface-glass min-w-0 rounded-2xl p-8">
              <p className="text-brand-gradient text-5xl leading-none font-semibold text-nowrap md:text-7xl">
                <CountUp value={result.value} />
              </p>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">{result.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function AiChapter() {
  return (
    <SectionShell id="ia" index="11" eyebrow="Inteligência Artificial">
      <div className="max-w-5xl">
        <Reveal>
          <p className="text-3xl font-semibold md:text-5xl">A tecnologia mudou.</p>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-4 text-3xl font-semibold text-muted-foreground md:text-5xl">
            A educação também.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="text-brand-gradient mt-8 text-4xl leading-none font-semibold uppercase md:text-7xl lg:text-8xl">
            Inteligência Artificial
          </p>
        </Reveal>
      </div>
      <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {aiAreas.map((area, i) => (
          <Reveal key={area} delay={i * 90}>
            <li className="surface-glass rounded-2xl p-7 text-xl font-semibold md:text-2xl">
              {area}
            </li>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}

export function FormationChapter() {
  return (
    <SectionShell id="formacao" index="12" eyebrow="Formação" title={<>Formação</>}>
      {education.length === 0 ? (
        <PendingContent>
          Espaço reservado para graduação, pós-graduações, MBA/GMBA, cursos e certificações. Envie os
          dados do currículo e eles serão exibidos aqui em uma timeline acadêmica.
        </PendingContent>
      ) : (
        <ol className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <li className="surface-glass rounded-2xl p-8">
                <h3 className="text-2xl font-semibold md:text-3xl">{item.title}</h3>
                <p className="mt-3 text-base text-muted-foreground md:text-lg">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      )}
    </SectionShell>
  );
}

/**
 * Conta de 0 até o número final quando o elemento entra na tela.
 * Preserva prefixo (+), casas decimais com vírgula (ex.: "3,50") e
 * sufixo (ex.: "%", "x") — o valor exibido ao final é idêntico ao original.
 */
function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\+?)(\d+)(?:,(\d+))?(.*)$/);
  const prefix = match?.[1] ?? "";
  const intPart = match?.[2] ?? "";
  const decimalDigits = match?.[3];
  const suffix = match?.[4] ?? "";
  const decimals = decimalDigits?.length ?? 0;
  const target = match ? Number(`${intPart}${decimalDigits ? `.${decimalDigits}` : ""}`) : NaN;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(Number.isFinite(target) ? 0 : null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !Number.isFinite(target) || typeof IntersectionObserver === "undefined") return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1);
          setDisplay(target * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) frame = requestAnimationFrame(tick);
          else setDisplay(target);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  const formatted =
    display === null
      ? value
      : decimals > 0
        ? display.toFixed(decimals).replace(".", ",")
        : String(Math.round(display));

  return (
    <span ref={ref}>
      {display === null ? value : `${prefix}${formatted}${suffix}`}
    </span>
  );
}

/** Provas reais que sustentam os números do impacto. */
const impactProofs = [
  { label: "Matéria no CEPI News", photo: photos.jornalCepiNews },
  { label: "Palestra na Academia de Neurodocência", photo: photos.palestraPlateia },
] as const;

export function ImpactChapter() {
  return (
    <SectionShell id="impacto" index="13" eyebrow="Impacto" title={<>Impacto</>}>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="grid gap-8 sm:grid-cols-2">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 120} className="min-w-0">
              <div className="surface-glass min-w-0 rounded-2xl p-10">
                <p className="text-brand-gradient text-nowrap text-6xl leading-none font-semibold md:text-8xl">
                  <CountUp value={metric.value} />
                </p>
                <p className="mt-5 text-lg text-muted-foreground md:text-2xl">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid min-w-0 gap-5 sm:grid-cols-2">
          {impactProofs.map(({ label, photo }, i) => (
            <Reveal key={label} delay={480 + i * 120} className="min-w-0">
              <PhotoPlaceholder photo={photo} label={label} ratio="square" />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

export function TestimonialsChapter() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  return (
    <SectionShell id="depoimentos" index="14" eyebrow="Depoimentos" title={<>Depoimentos</>}>
      {total === 0 ? (
        <PendingContent>
          Área preparada para depoimentos reais. Envie as mensagens (com nome e relação profissional
          autorizados) e elas aparecerão neste carrossel.
        </PendingContent>
      ) : (
        <div className="surface-glass rounded-2xl p-10">
          <blockquote className="text-2xl leading-snug md:text-4xl">
            “{testimonials[index]!.quote}”
          </blockquote>
          <p className="mt-8 text-lg font-semibold md:text-xl">{testimonials[index]!.author}</p>
          {testimonials[index]!.relation ? (
            <p className="text-base text-muted-foreground">{testimonials[index]!.relation}</p>
          ) : null}
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="rounded-full border border-border p-3 hover:bg-secondary"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="rounded-full border border-border p-3 hover:bg-secondary"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </SectionShell>
  );
}

export function FutureChapter() {
  return (
    <SectionShell id="futuro" index="15" eyebrow="Futuro" title={<>E agora?</>}>
      <ol className="grid gap-4">
        {futureSteps.map((step, i) => (
          <Reveal key={step} delay={i * 110}>
            <li
              className={cn(
                "text-3xl leading-tight font-semibold uppercase md:text-5xl lg:text-6xl",
                i === futureSteps.length - 1 ? "text-brand-gradient" : "text-muted-foreground",
              )}
            >
              {step}
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}

const contactIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: MessageCircle,
  "E-mail": Mail,
  Telefone: Phone,
} as const;

export function ContactChapter() {
  return (
    <SectionShell id="contato" index="16" eyebrow="Contato" className="bg-tech-grid">
      <div className="text-center">
        <Reveal>
          <p className="text-5xl leading-none font-semibold uppercase md:text-7xl lg:text-8xl">
            <span className="text-brand-gradient">Huiatã Ribeiro</span>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow mt-6">Tecnologia • Educação • Inteligência Artificial</p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-4xl text-xl leading-snug md:text-3xl">
            {profile.closing}
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link) => {
              const Icon = contactIcons[link.label as keyof typeof contactIcons] ?? Mail;
              const disabled = !link.url;
              return (
                <a
                  key={link.label}
                  href={link.url ?? "#contato"}
                  aria-disabled={disabled}
                  title={disabled ? `Link do ${link.label} a ser fornecido` : link.label}
                  target={link.url ? "_blank" : undefined}
                  rel={link.url ? "noreferrer" : undefined}
                  className={cn(
                    "inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 text-base font-semibold transition-colors hover:bg-secondary md:text-lg",
                    disabled && "text-muted-foreground",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
            <ResumeButton />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
