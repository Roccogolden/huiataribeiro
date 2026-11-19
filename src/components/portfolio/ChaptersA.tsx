import { useState } from "react";
import { ArrowRight, Award, Download, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { aboutPoints, experienceCards, profile, resumeUrl, timeline } from "@/data/portfolio";
import { photos } from "@/data/photos";
import { HeroMotion } from "./AdobeMotion";
import { PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

const whatsappUrl = `https://wa.me/55${profile.phone.replace(/\D/g, "")}`;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaPrimary = cn(
  "inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-2 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] md:text-lg lg:w-auto",
  focusRing,
);

/** Botões secundários: três lado a lado no celular, com rótulo curto. */
const ctaCompact = cn(
  "inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold transition-colors hover:bg-secondary sm:px-6 sm:text-base md:text-lg lg:w-auto lg:px-5",
  focusRing,
);

/** Atraso da entrada em CSS do topo (não depende do JavaScript). */
const enterDelay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function IntroChapter({ onNext, onAward }: { onNext: () => void; onAward: () => void }) {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-24 md:px-14 lg:px-24"
    >
      {/* Névoa de luz feita no After Effects, com a malha fina por cima. */}
      <HeroMotion className="-z-10 opacity-70 [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]" />
      <div className="bg-tech-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="enter" style={enterDelay(0)}>
            <button
              type="button"
              onClick={onAward}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent/20 md:text-base",
                focusRing,
              )}
            >
              <Award className="size-4 shrink-0 text-accent md:size-5" aria-hidden="true" />
              Docente TOP 10 · SENAI Goiás 2026/2027
            </button>
          </div>
          <h1
            id="intro-title"
            className="enter mt-7 text-5xl leading-[0.95] font-semibold uppercase md:text-7xl lg:text-8xl"
            style={enterDelay(80)}
          >
            <span className="text-brand-gradient">Huiatã</span>
            <br />
            Ribeiro
          </h1>
          <p
            className="enter mt-8 max-w-2xl text-lg font-medium text-pretty text-muted-foreground md:text-2xl"
            style={enterDelay(160)}
          >
            {profile.role}
          </p>
          <p
            className="enter mt-5 max-w-2xl text-xl leading-snug text-pretty md:text-3xl"
            style={enterDelay(220)}
          >
            {profile.tagline}
          </p>
          <nav aria-label="Ações principais" className="enter mt-10" style={enterDelay(300)}>
            <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
              <button
                type="button"
                onClick={onNext}
                className={ctaPrimary}
                aria-label="Conheça minha trajetória — ir para a próxima seção"
              >
                Conheça minha trajetória
                <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
              </button>
              <ul className="grid grid-cols-3 gap-2 sm:gap-3 lg:flex">
                <li className="min-w-0">
                  <ResumeButton
                    className={ctaCompact}
                    label="Currículo"
                    aria-label="Baixar currículo em PDF"
                  />
                </li>
                <li className="min-w-0">
                  <a
                    href="https://www.linkedin.com/in/huiataribeiro"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={ctaCompact}
                    aria-label="Visitar perfil LinkedIn de Huiatã Ribeiro (abre em nova aba)"
                  >
                    <Linkedin className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={ctaCompact}
                    aria-label="Iniciar conversa no WhatsApp com Huiatã Ribeiro (abre em nova aba)"
                  >
                    <MessageCircle className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="enter" style={enterDelay(200)}>
          <PhotoPlaceholder
            photo={photos.hero}
            label="Instrutor de Informática — SENAI FIEG"
            className="mx-auto w-full max-w-md"
            sizes="(min-width: 1024px) 448px, 90vw"
            priority
          />
        </div>
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
              <span className="pt-1 font-mono text-sm text-accent" aria-hidden="true">
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
        {experienceCards.map((card, i) => (
          <Reveal
            as="li"
            key={card.title}
            delay={(i % 3) * 60}
            className="grid gap-2 border-b border-border py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-10 in-[.presenting]:py-4"
          >
            <h3 className="text-xl font-semibold md:text-2xl">{card.title}</h3>
            <p className="text-base text-pretty text-muted-foreground md:text-lg">
              {card.description}
            </p>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
