import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
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
                  "text-left text-3xl leading-tight font-semibold uppercase transition-colors md:text-5xl lg:text-6xl",
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
          <div className="rounded-2xl border border-border p-8">
            <p className="eyebrow text-[0.7rem]">{doingWords[active]!.title}</p>
            <p className="mt-4 text-xl leading-snug md:text-3xl">
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
            <dt className="text-lg font-semibold md:text-xl">{group.category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground md:text-base"
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
  return (
    <SectionShell
      id="projetos"
      index="08"
      eyebrow="Projetos"
      title={<>Projetos</>}
      lead="Sistemas e sites que criei, quase todos com as minhas turmas do Técnico em Desenvolvimento de Sistemas."
    >
      <p className="-mt-4 mb-5 text-sm text-muted-foreground md:hidden">
        Arraste para o lado para ver os {projects.length} projetos.
      </p>
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
        {projects.map((project, i) => {
          const featured = i === 0;
          return (
            <Reveal
              as="article"
              key={project.name}
              delay={(i % 3) * 80}
              className={cn(
                "group flex h-auto w-[86%] min-w-0 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-card/40 md:h-full md:w-auto",
                featured && "md:col-span-2 lg:flex-row",
              )}
            >
              <PhotoPlaceholder
                photo={projectCovers[project.name] ?? projectPhotos[i % projectPhotos.length]!}
                label={project.name}
                ratio="landscape"
                hideCaption
                sizes={
                  featured
                    ? "(min-width: 1024px) 26vw, (min-width: 768px) 90vw, 92vw"
                    : "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw"
                }
                className={cn(
                  "shrink-0 rounded-none border-0 border-b border-border",
                  featured && "lg:aspect-auto lg:w-[42%] lg:border-r lg:border-b-0",
                )}
              />
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-sm font-semibold text-accent md:text-base">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{project.name}</h3>
                <p
                  className={cn(
                    "mt-4 leading-snug text-pretty",
                    featured ? "text-xl md:text-3xl" : "text-lg md:text-xl",
                  )}
                >
                  {project.result}
                </p>
                <p className="mt-3 text-base text-pretty text-muted-foreground md:text-lg">
                  {project.summary}
                </p>

                {project.problem || project.solution ? (
                  <details className="group/caso mt-5">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-full text-base font-semibold text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                      Como foi feito
                      <ChevronDown
                        className="size-4 transition-transform group-open/caso:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <dl className="mt-4 grid gap-4 text-base md:text-lg">
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

                <div className="mt-auto pt-7">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                      aria-label={`Ver ${project.name} no ar (abre em nova aba)`}
                    >
                      Ver no ar
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">Link a ser fornecido.</p>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
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
            <p className="text-4xl leading-tight font-semibold uppercase md:text-6xl">Do código</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-4xl leading-tight font-semibold uppercase md:text-6xl">
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
