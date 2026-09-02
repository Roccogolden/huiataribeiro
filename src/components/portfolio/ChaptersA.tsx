import { useState } from "react";
import { ArrowDown, ArrowRight, Download, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  aboutPoints,
  experienceCards,
  profile,
  resumeUrl,
  timeline,
} from "@/data/portfolio";
import { photos } from "@/data/photos";
import { PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

const whatsappUrl = `https://wa.me/55${profile.phone.replace(/\D/g, "")}`;

const ctaBase =
  "inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:px-8 md:text-lg lg:w-auto";

const ctaPrimary = cn(
  ctaBase,
  "glow-brand bg-primary text-primary-foreground hover:scale-[1.03]",
);

const ctaSecondary = cn(ctaBase, "border border-border hover:bg-secondary");

export function IntroChapter({ onNext }: { onNext: () => void }) {
  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="bg-tech-grid relative flex min-h-[100svh] items-center px-6 py-24 md:px-14 lg:px-24"
    >
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Portfólio profissional</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="intro-title"
              className="mt-6 text-5xl leading-[0.95] font-semibold uppercase md:text-7xl lg:text-8xl"
            >
              <span className="text-brand-gradient">Huiatã</span>
              <br />
              Ribeiro
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg font-medium text-muted-foreground md:text-2xl">
              {profile.role}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-xl leading-snug md:text-3xl">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={320}>
            <nav aria-label="Ações principais" className="mt-12">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <li className="min-w-0 sm:col-span-2">
                  <button
                    type="button"
                    onClick={onNext}
                    className={ctaPrimary}
                    aria-label="Conheça minha trajetória — ir para a próxima seção"
                  >
                    Conheça minha trajetória
                    <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
                  </button>
                </li>
                <li className="min-w-0">
                  <ResumeButton className={ctaSecondary} aria-label="Baixar currículo em PDF" />
                </li>
                <li className="min-w-0">
                  <a
                    href="https://www.linkedin.com/in/huiataribeiro"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={ctaSecondary}
                    aria-label="Visitar perfil LinkedIn de Huiatã Ribeiro (abre em nova aba)"
                  >
                    <Linkedin className="size-5 shrink-0" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
                <li className="min-w-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={ctaSecondary}
                    aria-label="Iniciar conversa no WhatsApp com Huiatã Ribeiro (abre em nova aba)"
                  >
                    <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <PhotoPlaceholder
            photo={photos.hero}
            label="Instrutor de Informática — SENAI FIEG"
            className="float-soft mx-auto w-full max-w-md"
          />
        </Reveal>
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground">
        <ArrowDown className="size-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}

export function ResumeButton({
  className,
  "aria-label": ariaLabel,
}: {
  className?: string;
  "aria-label"?: string;
}) {
  const disabled = !resumeUrl;
  return (
    <a
      href={resumeUrl ?? "#contato"}
      aria-disabled={disabled}
      aria-label={ariaLabel ?? (disabled ? "Currículo em PDF ainda não fornecido" : "Baixar currículo em PDF")}
      title={disabled ? "Currículo em PDF ainda não fornecido" : "Baixar currículo"}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-secondary md:px-8 md:text-lg",
        disabled && "text-muted-foreground",
        className,
      )}
      download={resumeUrl ? true : undefined}
    >
      <Download className="size-5" aria-hidden="true" />
      Baixar currículo
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
      lead="Atuo onde a tecnologia encontra a educação: ensino, desenvolvo e aplico inteligência artificial em projetos práticos."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <PhotoPlaceholder photo={photos.about} label="Docência, tecnologia e educação" ratio="square" />
        </Reveal>
        <ul className="grid gap-4 lg:grid-cols-2">
          {aboutPoints.map((point, i) => (
            <Reveal key={point} delay={i * 90}>
              <li className="surface-glass flex h-full items-start gap-4 rounded-2xl p-6 text-lg md:text-2xl">
                <span className="mt-2 size-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {point}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

export function TimelineChapter() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell
      id="trajetoria"
      index="03"
      eyebrow="Trajetória"
      title={<>Minha trajetória</>}
      lead="Uma evolução contínua: da experiência à inovação."
    >
      <div className="relative">
        <div className="absolute top-6 left-0 hidden h-px w-full bg-border lg:block" aria-hidden="true" />
        <ol className="grid gap-6 lg:grid-cols-6">
          {timeline.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li>
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
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

export function ExperienceChapter() {
  return (
    <SectionShell
      id="experiencia"
      index="04"
      eyebrow="Experiência"
      title={
        <>
          Onde a tecnologia
          <br />
          <span className="text-brand-gradient">encontra a educação.</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experienceCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 80}>
            <article className="surface-glass h-full rounded-2xl p-8">
              <p className="eyebrow text-[0.7rem]">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-2xl font-semibold md:text-3xl">{card.title}</h3>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">{card.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
