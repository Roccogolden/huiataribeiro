import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  aiAreas,
  classroomDriveUrl,
  classroomDynamics,
  classroomResults,
  classroomResultsSource,
  contactLinks,
  education,
  futureSteps,
  metrics,
  profile,
  testimonials,
  type Testimonial,
} from "@/data/portfolio";
import { photos } from "@/data/photos";
import qrWhatsapp from "@/assets/qr-whatsapp.png";
import { ResumeButton } from "./ChaptersA";
import { PendingContent, PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

/** Registros reais de sala de aula e eventos. */
const classroomPhotos = [
  { label: "Sala de aula", photo: photos.salaManutencao },
  { label: "Com estudantes", photo: photos.salaSelfie },
  { label: "Projeto em aula", photo: photos.salaDestaque },
  { label: "Registro espontâneo", photo: photos.salaKahoot },
] as const;

const classroomTopics = [
  "Aulas práticas",
  "Projetos",
  "Programação",
  "Redes",
  "Desenvolvimento",
  "Gamificação",
  "Inteligência artificial",
] as const;

export function EducationTechChapter() {
  return (
    <SectionShell
      id="educacao"
      index="10"
      eyebrow="Educação + Tecnologia"
      title={<>Em sala de aula</>}
      lead="Aulas práticas, projetos e gamificação com turmas do Ensino Médio Técnico."
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <ul className="flex flex-wrap gap-3">
          {classroomTopics.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 40}
              className="rounded-full border border-border px-5 py-2.5 text-base md:text-xl"
            >
              {item}
            </Reveal>
          ))}
        </ul>
        <div>
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {classroomPhotos.map(({ label, photo }, i) => (
              <Reveal key={label} delay={(i % 2) * 80}>
                <PhotoPlaceholder
                  photo={photo}
                  label={label}
                  ratio="landscape"
                  sizes="(min-width: 1024px) 28vw, 46vw"
                />
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={classroomDriveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"
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
      index="11"
      eyebrow="Dinâmicas em Sala"
      title={<>Dinâmicas que uso em sala</>}
      lead="Atividades práticas com as turmas do 1º ano do Ensino Médio Técnico, usando celulares pessoais e Chromebooks compartilhados."
    >
      <ul className="flex flex-wrap gap-2.5">
        {classroomDynamics.map((item, i) => (
          <Reveal
            as="li"
            key={item}
            delay={(i % 6) * 30}
            className="rounded-full border border-border px-4 py-2 text-base md:text-lg"
          >
            {item}
          </Reveal>
        ))}
      </ul>
      <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6">
        {classroomResults.map((result, i) => (
          <Reveal
            key={result.label}
            delay={i * 100}
            className="min-w-0 border-t border-border pt-6"
          >
            <p className="text-brand-gradient text-4xl leading-none font-semibold text-nowrap md:text-7xl">
              <CountUp value={result.value} />
            </p>
            <p className="mt-3 text-sm text-pretty text-muted-foreground md:mt-4 md:text-lg">
              {result.label}
            </p>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 max-w-3xl text-sm text-pretty text-muted-foreground">
        {classroomResultsSource}
      </p>
    </SectionShell>
  );
}

export function AiChapter() {
  return (
    <SectionShell id="ia" index="12" eyebrow="Inteligência Artificial">
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
          <Reveal
            as="li"
            key={area}
            delay={i * 70}
            className="border-t border-border pt-5 text-xl font-semibold md:text-2xl"
          >
            {area}
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}

export function FormationChapter() {
  return (
    <SectionShell id="formacao" index="13" eyebrow="Formação" title={<>Formação</>}>
      {education.length === 0 ? (
        <PendingContent>
          Espaço reservado para graduação, pós-graduações, MBA/GMBA, cursos e certificações. Envie
          os dados do currículo e eles serão exibidos aqui em uma timeline acadêmica.
        </PendingContent>
      ) : (
        <ol className="border-t border-border">
          {education.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 2) * 60}
              className="grid gap-2 border-b border-border py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10 in-[.presenting]:py-4"
            >
              <h3 className="text-xl font-semibold text-pretty md:text-2xl">{item.title}</h3>
              <p className="text-base text-pretty text-muted-foreground md:text-lg">
                {item.description}
              </p>
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
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !Number.isFinite(target) || typeof IntersectionObserver === "undefined") return;
    // Com "reduzir movimento", o número final aparece direto.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setDisplay(0);
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

  return <span ref={ref}>{display === null ? value : `${prefix}${formatted}${suffix}`}</span>;
}

/** Registros reais que sustentam os números do impacto. */
const impactProofs = [
  { label: "Matéria no CEPI News", photo: photos.jornalCepiNews },
  { label: "Palestra na Academia de Neurodocência", photo: photos.palestraPlateia },
] as const;

export function ImpactChapter() {
  return (
    <SectionShell id="impacto" index="14" eyebrow="Impacto" title={<>Impacto</>}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="grid grid-cols-2 gap-x-5 md:gap-x-8">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={(i % 2) * 90}
              className="min-w-0 border-t border-border py-7 in-[.presenting]:py-4"
            >
              <p className="text-brand-gradient text-4xl leading-none font-semibold text-nowrap sm:text-6xl md:text-7xl">
                <CountUp value={metric.value} />
              </p>
              <p className="mt-3 text-sm text-pretty text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold text-accent">Registros</p>
          <div className="mt-4 grid min-w-0 grid-cols-2 gap-3 md:gap-5">
            {impactProofs.map(({ label, photo }, i) => (
              <Reveal key={label} delay={i * 100} className="min-w-0">
                <PhotoPlaceholder
                  photo={photo}
                  label={label}
                  ratio="square"
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 92vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Quote({ item, size = "md" }: { item: Testimonial; size?: "md" | "sm" }) {
  return (
    <figure className="flex h-full flex-col border-t border-border pt-6">
      <blockquote
        className={cn(
          "leading-snug text-pretty",
          size === "md" ? "text-xl md:text-2xl" : "text-base md:text-lg",
        )}
      >
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-auto pt-5">
        <span className="block text-base font-semibold md:text-lg">{item.author}</span>
        {item.relation ? (
          <span className="block text-sm text-muted-foreground md:text-base">{item.relation}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function TestimonialsChapter() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const featured = testimonials.filter((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <SectionShell
      id="depoimentos"
      index="15"
      eyebrow="Depoimentos"
      title={<>Depoimentos</>}
      lead={
        total > 0 ? "O que os alunos do Técnico em Desenvolvimento de Sistemas contam." : undefined
      }
    >
      {total === 0 ? (
        <PendingContent>
          Área preparada para depoimentos reais. Envie as mensagens (com nome e relação profissional
          autorizados) e elas aparecerão neste carrossel.
        </PendingContent>
      ) : (
        <>
          {/* Portfólio: três depoimentos curtos em destaque e o resto sob demanda. */}
          <div className="in-[.presenting]:hidden">
            <div className="grid gap-8 md:grid-cols-3">
              {featured.map((item, i) => (
                <Reveal key={item.author} delay={i * 90} className="h-full">
                  <Quote item={item} />
                </Reveal>
              ))}
            </div>
            {others.length > 0 ? (
              <details className="group/dep mt-12">
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                  Ler todos os depoimentos ({total})
                  <ChevronDown
                    className="size-4 transition-transform group-open/dep:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
                  {others.map((item) => (
                    <Quote key={item.author} item={item} size="sm" />
                  ))}
                </div>
              </details>
            ) : null}
          </div>

          {/* Modo apresentação: um depoimento por vez. */}
          <div className="hidden rounded-2xl border border-border p-10 in-[.presenting]:block">
            <blockquote className="text-2xl leading-snug md:text-4xl">
              “{testimonials[index]!.quote}”
            </blockquote>
            <p className="mt-8 text-lg font-semibold md:text-xl">{testimonials[index]!.author}</p>
            {testimonials[index]!.relation ? (
              <p className="text-base text-muted-foreground">{testimonials[index]!.relation}</p>
            ) : null}
            <div className="mt-8 flex items-center gap-3">
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
              <span className="ml-2 font-mono text-sm text-muted-foreground">
                {index + 1}/{total}
              </span>
            </div>
          </div>
        </>
      )}
    </SectionShell>
  );
}

export function FutureChapter() {
  return (
    <SectionShell id="futuro" index="16" eyebrow="Futuro" title={<>E agora?</>}>
      <ol className="grid gap-4">
        {futureSteps.map((step, i) => (
          <Reveal
            as="li"
            key={step}
            delay={i * 90}
            className={cn(
              "text-3xl leading-tight font-semibold uppercase md:text-5xl lg:text-6xl",
              i === futureSteps.length - 1 ? "text-brand-gradient" : "text-muted-foreground",
            )}
          >
            {step}
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

/** WhatsApp primeiro (botão principal), depois e-mail, LinkedIn e telefone. */
const contactOrder = ["WhatsApp", "E-mail", "LinkedIn", "Telefone"];

/**
 * Mensagem pré-preenchida para quem inicia a conversa pelo QR Code do fechamento.
 * Usa api.whatsapp.com (não wa.me): em vários aparelhos, o wa.me é aberto como
 * app link direto pelo sistema e o parâmetro de texto acaba sendo descartado.
 */
const qrWhatsappMessage = encodeURIComponent("Olá Huiatã! Vi sua apresentação e quero conversar.");

export function ContactChapter() {
  const qrWhatsappUrl = `https://api.whatsapp.com/send?phone=55${profile.phone.replace(/\D/g, "")}&text=${qrWhatsappMessage}`;
  const links = [...contactLinks].sort(
    (a, b) => contactOrder.indexOf(a.label) - contactOrder.indexOf(b.label),
  );

  return (
    <SectionShell
      id="contato"
      index="17"
      eyebrow="Contato"
      title={<>Vamos conversar?</>}
      lead="Para aulas, palestras, mentoria de professores ou projetos com tecnologia, me chame no WhatsApp ou mande um e-mail."
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {links.map((link) => {
              const Icon = contactIcons[link.label as keyof typeof contactIcons] ?? Mail;
              const disabled = !link.url;
              const primary = link.label === "WhatsApp";
              return (
                <a
                  key={link.label}
                  href={link.url ?? "#contato"}
                  aria-disabled={disabled}
                  title={disabled ? `Link do ${link.label} a ser fornecido` : link.label}
                  target={link.url?.startsWith("http") ? "_blank" : undefined}
                  rel={link.url?.startsWith("http") ? "noreferrer noopener" : undefined}
                  className={cn(
                    "inline-flex min-h-[52px] items-center gap-3 rounded-full px-7 py-3 text-base font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none md:text-lg",
                    primary
                      ? "w-full justify-center bg-primary text-primary-foreground sm:w-auto"
                      : "border border-border hover:bg-secondary",
                    disabled && "text-muted-foreground",
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  {primary ? "Chamar no WhatsApp" : link.label}
                </a>
              );
            })}
            <ResumeButton className="min-h-[52px] py-3" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <a
            href={qrWhatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mx-auto flex w-fit flex-col items-center gap-3 rounded-3xl bg-white p-5 shadow-lg transition-transform hover:scale-[1.02] md:p-6 lg:mr-0"
            aria-label="Escanear QR Code para iniciar uma conversa no WhatsApp (abre em nova aba)"
          >
            <img
              src={qrWhatsapp}
              alt="QR Code que leva direto para uma conversa no WhatsApp com Huiatã Ribeiro"
              width={144}
              height={144}
              className="size-28 md:size-36"
            />
            <p className="text-center text-sm font-semibold text-[#0F1420]">
              Aponte a câmera e fale comigo agora
            </p>
          </a>
        </Reveal>
      </div>
    </SectionShell>
  );
}
