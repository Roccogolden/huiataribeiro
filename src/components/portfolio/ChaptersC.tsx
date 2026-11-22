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
      eyebrow="Educação e tecnologia"
      title={<>Em sala de aula</>}
      lead="Aulas práticas, projetos e gamificação com turmas do Ensino Médio Técnico."
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        <ol className="border-t border-border lg:sticky lg:top-28">
          {classroomTopics.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 40}
              className="flex items-baseline gap-5 border-b border-border py-3 md:py-4"
            >
              <span
                className="w-7 shrink-0 font-display text-lg text-muted-foreground tabular-nums"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl leading-tight md:text-3xl">{item}</span>
            </Reveal>
          ))}
        </ol>
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
              className="mt-6 inline-flex items-center gap-2 border-b border-current/40 pb-1 font-semibold transition-colors hover:border-accent hover:text-muted-foreground"
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
      eyebrow="Dinâmicas em sala"
      title={<>Dinâmicas que uso em sala</>}
      lead="Atividades práticas com as turmas do 1º ano do Ensino Médio Técnico, usando celulares pessoais e Chromebooks compartilhados."
    >
      <ol className="grid border-t border-border sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-14">
        {classroomDynamics.map((item, i) => (
          <Reveal
            as="li"
            key={item}
            delay={(i % 3) * 50}
            className="flex items-baseline gap-4 border-b border-border py-3 text-base md:text-lg"
          >
            <span
              className="w-6 shrink-0 font-display text-base text-muted-foreground tabular-nums"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </Reveal>
        ))}
      </ol>
      <div className="mt-12 grid grid-cols-3 gap-4 md:gap-6">
        {classroomResults.map((result, i) => (
          <Reveal
            key={result.label}
            delay={i * 100}
            className="min-w-0 border-t border-border pt-6"
          >
            <p className="font-display font-medium tracking-[-0.045em] text-5xl leading-none text-nowrap md:text-8xl">
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
          <p className="font-display font-medium tracking-[-0.045em] mt-8 text-5xl leading-none md:text-8xl lg:text-9xl">
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
        <PendingContent>Formação em atualização.</PendingContent>
      ) : (
        <ol className="border-t border-border">
          {education.map((item, i) => {
            // "Curso · AAAA – AAAA": o período vira rótulo acima do nome do curso.
            const corte = item.title.lastIndexOf(" · ");
            const periodo = corte > 0 ? item.title.slice(corte + 3) : "";
            const temPeriodo = /\d{4}/.test(periodo);
            const nome = temPeriodo ? item.title.slice(0, corte) : item.title;
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 2) * 60}
                className="grid gap-2 border-b border-border py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10 in-[.presenting]:py-4"
              >
                <div>
                  <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {temPeriodo ? periodo : "Contínuo"}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-tight font-medium tracking-[-0.02em] text-pretty md:text-4xl">
                    {nome}
                  </h3>
                </div>
                <p className="text-base text-pretty text-muted-foreground md:pt-8 md:text-lg">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
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
    <SectionShell id="impacto" index="14" eyebrow="Impacto" tema="tinta" title={<>Impacto</>}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="grid grid-cols-2 gap-x-5 md:gap-x-8">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={(i % 2) * 90}
              className="min-w-0 border-t border-border py-7 in-[.presenting]:py-4"
            >
              <p className="font-display font-medium tracking-[-0.045em] text-6xl leading-none text-nowrap sm:text-7xl md:text-8xl">
                <CountUp value={metric.value} />
              </p>
              <p className="mt-3 text-sm text-pretty text-muted-foreground sm:text-lg md:mt-4 md:text-xl">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Registros
          </p>
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
          size === "md"
            ? "font-display text-2xl leading-snug lg:text-[1.65rem]"
            : "text-base md:text-lg",
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
          <div className="hidden border-t border-foreground/80 pt-10 in-[.presenting]:block">
            <blockquote className="font-display text-3xl leading-snug md:text-5xl">
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
              "font-display text-4xl leading-tight md:text-6xl lg:text-7xl",
              i === futureSteps.length - 1 ? "text-foreground" : "text-muted-foreground/60",
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
const qrWhatsappMessage = encodeURIComponent("Olá, Huiatã! Vi sua apresentação e quero conversar.");

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
      tema="tinta"
      title={<>Vamos conversar?</>}
      lead="Para aulas, palestras, mentoria de professores ou projetos com tecnologia, me chame no WhatsApp ou mande um e-mail."
    >
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="min-w-0">
          {/* Fechamento editorial: o e-mail em tipo grande, como assinatura. */}
          <Reveal>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-block max-w-full font-display text-[clamp(1.55rem,4.4vw,3.9rem)] leading-[1.05] font-medium tracking-[-0.03em] whitespace-nowrap transition-colors hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              aria-label={`Enviar e-mail para ${profile.email}`}
            >
              {profile.email}
              <span
                className="mt-2 block h-px origin-left bg-current/30 transition-transform duration-500 group-hover:bg-current"
                aria-hidden="true"
              />
            </a>
          </Reveal>
          <Reveal delay={80}>
            <dl className="mt-12 grid gap-8 sm:grid-cols-3">
              {links
                .filter((link) => link.url && link.label !== "E-mail" && link.label !== "Telefone")
                .map((link) => {
                  const Icon = contactIcons[link.label as keyof typeof contactIcons] ?? Mail;
                  const valor =
                    link.label === "LinkedIn"
                      ? "/in/huiataribeiro"
                      : link.label === "WhatsApp" || link.label === "Telefone"
                        ? profile.phone
                        : link.label;
                  const externo = link.url!.startsWith("http");
                  return (
                    <div key={link.label}>
                      <dt className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                        {link.label}
                      </dt>
                      <dd className="mt-2">
                        <a
                          href={link.url}
                          target={externo ? "_blank" : undefined}
                          rel={externo ? "noreferrer noopener" : undefined}
                          aria-label={`${link.label}: ${valor}${externo ? " (abre em nova aba)" : ""}`}
                          className="inline-flex items-center gap-2 text-lg transition-colors hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none md:text-xl"
                        >
                          <Icon className="size-4 shrink-0 opacity-70" aria-hidden="true" />
                          {valor}
                        </a>
                      </dd>
                    </div>
                  );
                })}
              <div>
                <dt className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Base
                </dt>
                <dd className="mt-2 text-lg md:text-xl">Senador Canedo – GO</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={links.find((link) => link.label === "WhatsApp")?.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-[52px] items-center gap-3 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none md:text-lg"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <ResumeButton
                label="Baixar currículo em PDF"
                className="rounded-none border-0 border-b border-current/40 px-0 py-1 font-medium hover:border-accent hover:bg-transparent hover:text-muted-foreground md:px-0"
              />
            </div>
          </Reveal>
        </div>
        {/* QR só em tela grande (computador e projetor): no celular não há como escanear a própria tela. */}
        <Reveal delay={120} className="hidden lg:block">
          <a
            href={qrWhatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mx-auto flex w-fit flex-col items-center gap-3 rounded-md bg-white p-5 transition-transform hover:scale-[1.02] md:p-6 lg:mr-0"
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
