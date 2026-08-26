import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
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
};

/** Grade "tecnologia na prática". */
const practicePhotos = [
  { label: "Projetos", photo: photos.award },
  { label: "Aulas práticas", photo: photos.classroom },
  { label: "Tecnologia", photo: photos.mentoring },
  { label: "Experiências reais", photo: photos.academy },
] as const;

export function DoingChapter() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell id="atuacao" index="05" eyebrow="Atuação" title={<>O que eu faço</>}>
      <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <ul className="grid gap-2">
          {doingWords.map((word, i) => (
            <Reveal key={word.title} delay={i * 90}>
              <li className="flex items-center gap-4">
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
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <div className="surface-glass rounded-2xl p-8">
            <p className="eyebrow text-[0.7rem]">{doingWords[active]!.title}</p>
            <p className="mt-4 text-xl leading-snug md:text-3xl">{doingWords[active]!.description}</p>
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
      index="06"
      eyebrow="Tecnologias"
      title={
        <>
          Ferramentas que transformam
          <br />
          <span className="text-brand-gradient">ideias em soluções.</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 90}>
            <article className="surface-glass h-full rounded-2xl p-8">
              <h3 className="text-2xl font-semibold md:text-3xl">{group.category}</h3>
              <ul className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/60 px-5 py-2 text-base md:text-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function ProjectsChapter() {
  return (
    <SectionShell
      id="projetos"
      index="07"
      eyebrow="Projetos"
      title={
        <>
          Não apenas ensino tecnologia.
          <br />
          <span className="text-brand-gradient">Eu também construo soluções.</span>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article className="surface-glass group h-full overflow-hidden rounded-2xl">
              <PhotoPlaceholder
                photo={projectCovers[project.name] ?? projectPhotos[i % projectPhotos.length]!}
                label={project.name}
                ratio="landscape"
                className="rounded-none border-0 border-b border-border shadow-none"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold md:text-3xl">{project.name}</h3>
                <p className="mt-3 text-base text-muted-foreground md:text-lg">{project.summary}</p>

                <dl className="mt-6 grid gap-3 text-base md:text-lg">
                  <div>
                    <dt className="eyebrow text-[0.65rem]">Problema</dt>
                    <dd className="text-muted-foreground">
                      {project.problem ?? "A ser preenchido com a descrição real."}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.65rem]">Solução</dt>
                    <dd className="text-muted-foreground">
                      {project.solution ?? "A ser preenchido com a descrição real."}
                    </dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-[0.65rem]">Tecnologias</dt>
                    <dd className="text-muted-foreground">
                      {project.tech?.length ? project.tech.join(" · ") : "A confirmar."}
                    </dd>
                  </div>
                </dl>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
                  >
                    Visualizar
                    <ExternalLink className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="mt-7 text-sm text-muted-foreground">Link a ser fornecido.</p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

export function PracticeChapter() {
  return (
    <SectionShell id="pratica" index="08" eyebrow="Tecnologia na prática">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-4xl leading-tight font-semibold uppercase md:text-6xl">Do código...</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-4xl leading-tight font-semibold uppercase md:text-6xl">
              <span className="text-brand-gradient">à solução.</span>
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {practicePhotos.map(({ label, photo }, i) => (
            <Reveal key={label} delay={i * 100}>
              <PhotoPlaceholder photo={photo} label={label} ratio="square" />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
