import { useState } from "react";
import { ExternalLink, FileText, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { award } from "@/data/portfolio";
import posterSrc from "@/assets/premio-top10-anuncio.jpg";
import cardSrc from "@/assets/premio-top10-cartao.jpg";
import { Reveal, SectionShell } from "./primitives";

const linkBase =
  "inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:text-lg";

/**
 * Vídeo do anúncio oficial. Mostra só a capa até a pessoa clicar:
 * o player do YouTube (pesado) carrega apenas quando for assistir.
 */
function AwardVideo() {
  const [playing, setPlaying] = useState(false);
  const { id, title, channel } = award.video;

  return (
    <div className="min-w-0 in-[.presenting]:max-w-[74svh]">
      <div className="surface-glass relative aspect-video overflow-hidden rounded-2xl">
        {playing ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Assistir ao vídeo "${title}", do canal ${channel}`}
            className="group absolute inset-0 size-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
          >
            <img
              src={posterSrc}
              alt=""
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span
              className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent"
              aria-hidden="true"
            />
            <span className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform group-hover:scale-[1.04] md:right-6 md:bottom-6 md:gap-3 md:px-5 md:py-3 md:text-lg">
              <Play className="size-4 fill-current md:size-5" aria-hidden="true" />
              Assistir ao anúncio
            </span>
          </button>
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground md:text-base">
        Anúncio oficial dos vencedores · canal {channel} no YouTube
      </p>
    </div>
  );
}

export function AwardChapter() {
  return (
    <SectionShell
      id="premio"
      index="03"
      eyebrow="Reconhecimento"
      title={
        <>
          Docente TOP 10
          <br />
          <span className="text-brand-gradient">
            6ª edição<span className="max-sm:hidden"> · </span>
            <br className="sm:hidden" />
            SENAI&nbsp;Goiás
          </span>
        </>
      }
      lead={
        <>
          Fui um dos 10 docentes premiados na 6ª edição do Docente TOP 10, uma das maiores
          premiações para educadores da rede SESI SENAI&nbsp;de&nbsp;Goiás.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-14">
        <Reveal className="min-w-0 lg:sticky lg:top-32">
          <AwardVideo />
        </Reveal>

        <div className="min-w-0">
          <Reveal>
            <figure className="surface-glass flex items-center gap-4 rounded-2xl p-3 sm:gap-6 sm:p-4">
              <img
                src={cardSrc}
                alt="Tela do anúncio oficial com a foto e o nome de Huiata Ribeiro Coutinho, Docente TOP 10 do SENAI, unidade SENAI Aparecida de Goiânia"
                width={633}
                height={349}
                loading="lazy"
                decoding="async"
                className="w-40 shrink-0 rounded-xl sm:w-60 md:w-72 in-[.presenting]:md:w-52"
              />
              <figcaption className="min-w-0">
                <p className="text-base font-semibold md:text-xl">Huiatã Ribeiro Coutinho</p>
                <p className="mt-1 text-sm text-muted-foreground md:text-base">{award.unit}</p>
                <p className="mt-2 text-sm font-semibold text-accent md:text-base">
                  Missão Itália 2027
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <dl className="mt-8 in-[.presenting]:mt-4 divide-y divide-border border-y border-border">
            {award.facts.map((fact, i) => (
              <Reveal
                key={fact.label}
                delay={i * 90}
                className="grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6 in-[.presenting]:py-3"
              >
                <dt className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                  {fact.label}
                </dt>
                <dd className="text-base text-pretty text-muted-foreground md:text-lg">
                  {fact.text}
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={300} className="in-[.presenting]:hidden">
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={award.resultUrl}
                target="_blank"
                rel="noopener"
                className={cn(linkBase, "border border-border hover:bg-secondary")}
              >
                <FileText className="size-5 shrink-0" aria-hidden="true" />
                Resultado oficial (PDF)
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${award.video.id}`}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(linkBase, "border border-border hover:bg-secondary")}
                aria-label="Ver o anúncio no YouTube (abre em nova aba)"
              >
                <ExternalLink className="size-5 shrink-0" aria-hidden="true" />
                Ver no YouTube
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {award.program} · {award.notice} · resultado publicado em {award.publishedAt}
            </p>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
