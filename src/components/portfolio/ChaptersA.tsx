import { useState } from "react";
import { ArrowRight, Award, Download, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { aboutPoints, experienceCards, profile, resumeUrl, timeline } from "@/data/portfolio";
import { photos } from "@/data/photos";
import { PortraitMotion } from "./AdobeMotion";
import { PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

const whatsappUrl = `https://wa.me/55${profile.phone.replace(/\D/g, "")}`;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/** Link de texto com sublinhado fino que acende na cor de destaque. */
const linkEditorial = cn(
  "inline-flex items-center gap-2 rounded-none border-0 border-b border-current/40 px-0 py-1 text-base font-medium transition-colors hover:border-accent hover:bg-transparent hover:text-accent md:px-0 md:text-lg",
  focusRing,
);

/** Atraso da entrada em CSS do topo (não depende do JavaScript). */
const enterDelay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function IntroChapter({ onNext, onAward }: { onNext: () => void; onAward: () => void }) {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="tema-tinta relative flex min-h-[100svh] items-end overflow-hidden px-6 pt-32 pb-16 md:px-14 lg:px-24 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto grid w-full max-w-[1600px] gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
        <div className="min-w-0">
          <div className="enter" style={enterDelay(0)}>
            <button
              type="button"
              onClick={onAward}
              className={cn(
                "group inline-flex items-center gap-3 border-b border-border pb-2 text-left text-sm font-medium tracking-wide transition-colors hover:border-accent md:text-base",
                focusRing,
              )}
            >
              <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              Docente TOP 10 · SESI SENAI Goiás · 2026/2027
              <ArrowRight
                className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          </div>
          <h1
            id="intro-title"
            className="mt-10 text-[clamp(4.5rem,13vw,12rem)] leading-[0.86] tracking-[-0.025em] in-[.presenting]:mt-6 in-[.presenting]:text-[clamp(4rem,8vw,8.5rem)]"
          >
            <span className="linha-mascara">
              <span style={enterDelay(100)}>Huiatã</span>
            </span>
            <span className="linha-mascara">
              <span style={enterDelay(200)} className="italic">
                Ribeiro
              </span>
            </span>
          </h1>
          <div className="mt-10 grid max-w-3xl gap-5">
            <p
              className="enter text-lg text-pretty text-muted-foreground md:text-xl"
              style={enterDelay(380)}
            >
              {profile.role}
            </p>
            <p
              className="enter text-2xl leading-snug text-pretty md:text-3xl"
              style={enterDelay(460)}
            >
              {profile.tagline}
            </p>
          </div>
          <nav
            aria-label="Ações principais"
            className="enter mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8"
            style={enterDelay(560)}
          >
            <button
              type="button"
              onClick={onNext}
              className={cn(
                "inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:text-lg",
                focusRing,
              )}
              aria-label="Conheça minha trajetória — ir para a próxima seção"
            >
              Conheça minha trajetória
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <li>
                <ResumeButton
                  label="Currículo"
                  aria-label="Baixar currículo em PDF"
                  className={linkEditorial}
                />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/huiataribeiro"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={linkEditorial}
                  aria-label="Visitar perfil LinkedIn de Huiatã Ribeiro (abre em nova aba)"
                >
                  <Linkedin className="size-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={linkEditorial}
                  aria-label="Iniciar conversa no WhatsApp com Huiatã Ribeiro (abre em nova aba)"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <figure
          data-retrato
          className="relative w-full max-w-md justify-self-center lg:justify-self-end in-[.presenting]:max-w-[21rem]"
        >
          <div className="cortina relative aspect-[3/4] overflow-hidden rounded-md bg-card">
            <PortraitMotion
              alt={photos.hero.alt}
              className="absolute inset-0 size-full object-cover object-[50%_20%]"
            />
          </div>
          <figcaption
            className="enter mt-4 flex justify-between gap-4 text-sm text-muted-foreground"
            style={enterDelay(900)}
          >
            <span>Instrutor de Informática · SENAI</span>
            <span>Senador Canedo, GO</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ResumeButton({
  className,
  label = "Baixar currículo",
  "aria-label": ariaLabel,
}: {
  className?: string;
  label?: string;
  "aria-label"?: string;
}) {
  const disabled = !resumeUrl;
  return (
    <a
      href={resumeUrl ?? "#contato"}
      aria-disabled={disabled}
      aria-label={
        ariaLabel ?? (disabled ? "Currículo em PDF ainda não fornecido" : "Baixar currículo em PDF")
      }
      title={disabled ? "Currículo em PDF ainda não fornecido" : "Baixar currículo"}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-base font-semibold transition hover:bg-secondary md:px-8 md:text-lg",
        focusRing,
        disabled && "text-muted-foreground",
        className,
      )}
      download={resumeUrl ? true : undefined}
    >
      <Download className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
      {label}
    </a>
  );
}

export function AboutChapter() {
  return (
    <SectionShell
      id="sobre"
      index="02"
      eyebrow="Sobre"
      title={<>Quem sou eu?</>}
      lead="Trabalho com TI desde 2011 e hoje dou aula no Técnico em Desenvolvimento de Sistemas do SENAI, em Goiás."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16">
        <Reveal>
          <PhotoPlaceholder
            photo={photos.about}
            label="Docência, tecnologia e educação"
            ratio="square"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        </Reveal>
        <ol className="grid gap-x-10 lg:grid-cols-2">
          {aboutPoints.map((point, i) => (
            <Reveal
              as="li"
              key={point}
              delay={(i % 2) * 70}
              className="flex gap-4 border-t border-border py-5 text-base text-pretty sm:text-lg md:gap-5 md:py-6 md:text-xl"
            >
              <span className="font-display text-xl text-accent italic" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{point}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

export function TimelineChapter() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell
      id="trajetoria"
      index="04"
      eyebrow="Trajetória"
      title={<>Minha trajetória</>}
      lead="Desde 2011 em TI: do suporte e do data center à sala de aula."
    >
      <div className="relative">
        <div
          className="absolute top-6 left-0 hidden h-px w-full bg-border lg:block"
          aria-hidden="true"
        />
        <ol className="grid gap-6 lg:grid-cols-6">
          {timeline.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={active === i}
                className="w-full text-left"
              >
                <span
                  className={cn(
                    "relative z-10 flex size-12 items-center justify-center rounded-full border font-mono text-sm transition-colors",
                    active === i
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 block text-xl font-semibold md:text-2xl">{step.title}</span>
                <span
                  className={cn(
                    "mt-2 block text-base text-muted-foreground transition-opacity md:text-lg",
                    active === i ? "opacity-100" : "opacity-45",
                  )}
                >
                  {step.description}
                </span>
              </button>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

export function ExperienceChapter() {
  return (
    <SectionShell id="experiencia" index="05" eyebrow="Experiência" title={<>Experiência</>}>
      <ol className="border-t border-border">
        {experienceCards.map((card, i) => {
          // "Empresa · Mmm/AAAA – Mmm/AAAA" vira cargo com período; o resto é atribuição do cargo acima.
          const [nome, periodo] = card.title.split(" · ");
          const cargo = Boolean(periodo && /\d{4}/.test(periodo));
          return (
            <Reveal
              as="li"
              key={card.title}
              delay={(i % 3) * 60}
              className={cn(
                "grid gap-2 border-b border-border md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10 in-[.presenting]:py-4",
                cargo ? "py-8" : "py-5",
              )}
            >
              {cargo ? (
                <div>
                  <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
                    {periodo}
                  </p>
                  <h3 className="mt-2 font-display text-3xl leading-tight font-normal md:text-4xl">
                    {nome}
                  </h3>
                </div>
              ) : (
                <h3 className="text-lg font-semibold md:pl-6 md:text-xl">{card.title}</h3>
              )}
              <p
                className={cn(
                  "text-base text-pretty text-muted-foreground md:text-lg",
                  cargo && "md:pt-8",
                )}
              >
                {card.description}
              </p>
            </Reveal>
          );
        })}
      </ol>
    </SectionShell>
  );
}
