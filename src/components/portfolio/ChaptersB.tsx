import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Draggable, FULL_MOTION, gsap, useGSAP } from "@/lib/gsap";
import { doingWords, projects, skills } from "@/data/portfolio";
import { photos } from "@/data/photos";
import { PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

/** Registros usados como capa dos projetos (fallback quando não há captura real do projeto). */
const projectPhotos = [photos.award, photos.classroom, photos.event] as const;

/** Capas reais de projetos específicos, quando disponíveis. */
const projectCovers: Partial<Record<string, (typeof photos)[keyof typeof photos]>> = {
  "Desafio dos R$ 2,00": photos.desafio2Reais,
  "Personal Lindy": photos.personalLindy,
  "Top Burguer": photos.topBurguer,
  "Cápsula do Tempo": photos.capsulaDoTempo,
  "Reserva Lab": photos.reservaLab,
  "Lógica Quest": photos.logicaQuest,
  "Laboratório de Lógica": photos.laboratorioLogica,
};

/** Grade "tecnologia na prática" (modo apresentação). */
const practicePhotos = [
  { label: "Projetos", photo: photos.award },
  { label: "Aulas práticas", photo: photos.classroom },
  { label: "Tecnologia", photo: photos.mentoring },
  { label: "Experiências reais", photo: photos.academy },
] as const;

export function DoingChapter() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell id="atuacao" index="06" eyebrow="Atuação" title={<>O que eu faço</>}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <ul className="grid gap-2">
          {doingWords.map((word, i) => (
            <Reveal as="li" key={word.title} delay={i * 70} className="flex items-center gap-4">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left font-display text-4xl leading-tight transition-colors md:text-6xl lg:text-7xl",
                  active === i ? "text-brand-gradient" : "text-muted-foreground/60",
                )}
              >
                {word.title}
              </button>
              {i < doingWords.length - 1 ? (
                <ArrowRight className="size-5 shrink-0 text-border" aria-hidden="true" />
              ) : null}
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <div className="border-t border-foreground/80 pt-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
              {doingWords[active]!.title}
            </p>
            <p className="mt-4 font-display text-2xl leading-snug md:text-4xl">
              {doingWords[active]!.description}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function SkillsChapter() {
  return (
    <SectionShell
      id="tecnologias"
      index="07"
      eyebrow="Tecnologias"
      title={<>Competências e ferramentas</>}
    >
      <dl className="border-t border-border">
        {skills.map((group, i) => (
          <Reveal
            key={group.category}
            delay={(i % 2) * 60}
            className="grid gap-3 border-b border-border py-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-10 in-[.presenting]:py-3"
          >
            <dt className="text-sm font-semibold tracking-[0.14em] text-accent uppercase md:pt-1.5">
              {group.category}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-x-3 gap-y-1">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg after:ml-3 after:text-muted-foreground/60 after:content-['/'] last:after:hidden md:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </Reveal>
        ))}
      </dl>
    </SectionShell>
  );
}

export function ProjectsChapter() {
  const trackRef = useRef<HTMLDivElement>(null);
  const barraRef = useRef<HTMLSpanElement>(null);

  // Faixa arrastável com inércia (mouse) por cima da rolagem nativa (dedo, teclado, roda).
  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;
      const mm = gsap.matchMedia();
      mm.add(`${FULL_MOTION} and (pointer: fine)`, () => {
        const [arraste] = Draggable.create(track, {
          type: "scrollLeft",
          inertia: true,
          edgeResistance: 0.85,
          dragClickables: false,
          minimumMovement: 6,
          cursor: "grab",
          activeCursor: "grabbing",
        });
        return () => arraste?.kill();
      });
      return () => mm.revert();
    },
    { scope: trackRef },
  );

  useEffect(() => {
    const track = trackRef.current;
    const barra = barraRef.current;
    if (!track || !barra) return;
    const atualizar = () => {
      const max = track.scrollWidth - track.clientWidth;
      const fracao = max > 0 ? track.scrollLeft / max : 1;
      barra.style.transform = `scaleX(${Math.max(0.08, fracao)})`;
    };
    atualizar();
    track.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    return () => {
      track.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  const passo = (direcao: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("article");
    if (!track || !card) return;
    track.scrollBy({
      left: direcao * (card.getBoundingClientRect().width + 32),
      behavior: "smooth",
    });
  };

  return (
    <SectionShell
      id="projetos"
      index="08"
      eyebrow="Projetos"
      title={<>Projetos</>}
      lead="Sistemas, jogos e sites que criei, quase todos com as minhas turmas do Técnico em Desenvolvimento de Sistemas."
    >
      <div
        ref={trackRef}
        tabIndex={0}
        aria-label={`Faixa com ${projects.length} projetos. Arraste ou use as setas para ver mais.`}
        className="-mx-6 snap-x snap-mandatory scroll-px-6 overflow-x-auto pb-2 [scrollbar-width:none] focus-visible:outline-none md:-mx-14 md:scroll-px-14 lg:-mx-24 lg:scroll-px-24 pointer-fine:snap-none [&::-webkit-scrollbar]:hidden"
      >
        {/* Linha interna: o Draggable (scrollLeft) envolve os filhos num div próprio. */}
        <div className="flex w-max gap-5 px-6 md:px-14 lg:gap-8 lg:px-24">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="group flex w-[78vw] shrink-0 snap-start flex-col sm:w-[56vw] lg:w-[34rem] xl:w-[38rem]"
            >
              <PhotoPlaceholder
                photo={projectCovers[project.name] ?? projectPhotos[i % projectPhotos.length]!}
                label={project.name}
                ratio="landscape"
                hideCaption
                sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 34rem, (min-width: 640px) 56vw, 78vw"
                className="pointer-events-none select-none"
              />
              <div className="flex flex-1 flex-col pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-semibold tracking-wide text-accent">
                    {project.category}
                  </p>
                  <span className="font-display text-xl text-muted-foreground" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-4xl leading-none font-normal md:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-lg leading-snug text-pretty md:text-xl">{project.result}</p>
                <p className="mt-3 text-base text-pretty text-muted-foreground">
                  {project.summary}
                </p>

                {project.problem || project.solution ? (
                  <details className="group/caso mt-5">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-base font-semibold focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                      Como foi feito
                      <ChevronDown
                        className="size-4 transition-transform group-open/caso:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <dl className="mt-4 grid gap-4 text-base">
                      {project.problem ? (
                        <div>
                          <dt className="font-semibold">O problema</dt>
                          <dd className="mt-1 text-pretty text-muted-foreground">
                            {project.problem}
                          </dd>
                        </div>
                      ) : null}
                      {project.solution ? (
                        <div>
                          <dt className="font-semibold">O que foi feito</dt>
                          <dd className="mt-1 text-pretty text-muted-foreground">
                            {project.solution}
                          </dd>
                        </div>
                      ) : null}
                    </dl>
                  </details>
                ) : null}

                <div className="mt-auto pt-6">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 border-b border-current/40 pb-1 text-base font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      aria-label={`Ver no ar: ${project.name} (abre em nova aba)`}
                    >
                      Ver no ar
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">Link a ser fornecido.</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <div className="relative h-px flex-1 bg-border" aria-hidden="true">
          <span
            ref={barraRef}
            className="absolute inset-0 origin-left bg-foreground transition-transform duration-150"
          />
        </div>
        <p className="hidden text-sm text-muted-foreground pointer-fine:block">
          Arraste para ver mais
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => passo(-1)}
            aria-label="Projeto anterior"
            className="rounded-full border border-border p-3 transition-colors hover:border-foreground"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => passo(1)}
            aria-label="Próximo projeto"
            className="rounded-full border border-border p-3 transition-colors hover:border-foreground"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}

export function PracticeChapter() {
  return (
    <SectionShell id="pratica" index="09" eyebrow="Tecnologia na prática">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Reveal>
            <p className="font-display text-6xl leading-none md:text-8xl">Do código</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-2 font-display text-6xl leading-none md:text-8xl">
              <span className="text-brand-gradient">à solução</span>
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {practicePhotos.map(({ label, photo }, i) => (
            <Reveal key={label} delay={i * 80}>
              <PhotoPlaceholder
                photo={photo}
                label={label}
                ratio="square"
                sizes="(min-width: 1024px) 26vw, 45vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
