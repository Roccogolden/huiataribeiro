import { useEffect } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buscarEstudo, estudos, type EstudoDeCaso } from "@/data/estudos";
import { SiteMotion } from "@/components/portfolio/SiteMotion";
import { Reveal, SectionShell } from "@/components/portfolio/primitives";

const SITE_URL = "https://www.huiataribeiro.com.br";
const OG_IMAGE = `${SITE_URL}/og-image.jpg?v=20261122`;

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const estudo = buscarEstudo(params.slug);
    if (!estudo) throw notFound();
    return estudo;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const titulo = `${loaderData.projeto}: estudo de caso | Huiatã Ribeiro`;
    const url = `${SITE_URL}/projetos/${loaderData.slug}`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: loaderData.resumo },
        { property: "og:title", content: titulo },
        { property: "og:description", content: loaderData.resumo },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: PaginaEstudo,
});

const linkSublinhado =
  "inline-flex items-center gap-2 border-b border-current/40 pb-1 font-medium transition-colors hover:border-current focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

function PaginaEstudo() {
  const estudo = Route.useLoaderData();
  const indice = estudos.findIndex((e) => e.slug === estudo.slug);
  const proximo = estudos[(indice + 1) % estudos.length]!;

  // Vindo da home, a rolagem suave (Lenis) só é desligada depois da montagem desta página e
  // devolveria a posição de lá. O efeito passivo roda depois dessa limpeza; o quadro extra garante.
  useEffect(() => {
    window.scrollTo(0, 0);
    const quadro = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(quadro);
  }, [estudo.slug]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="tema-tinta">
        <div className="mx-auto flex h-[72px] w-full max-w-[1600px] items-center justify-between px-6 md:px-14 lg:px-24">
          <Link
            to="/"
            className="font-display text-xl leading-none font-medium tracking-[-0.03em] md:text-[1.4rem]"
          >
            Huiatã Ribeiro
          </Link>
          <Link to="/" hash="projetos" className={cn(linkSublinhado, "text-sm md:text-base")}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar ao portfólio
          </Link>
        </div>
      </header>

      <main>
        <SiteMotion>
          <Abertura estudo={estudo} />
          <SectionShell id="problema" index="01" eyebrow="O problema" title={<>O problema</>}>
            <Reveal>
              <p className="max-w-5xl font-display text-3xl leading-snug font-medium tracking-[-0.005em] text-pretty md:text-5xl md:leading-[1.12]">
                {estudo.problema}
              </p>
            </Reveal>
          </SectionShell>
          <ComoFunciona estudo={estudo} />
          <Telas estudo={estudo} />
          <Resultado estudo={estudo} />
        </SiteMotion>

        <section className="border-t border-border px-6 py-16 md:px-14 lg:px-24">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Próximo estudo de caso
              </p>
              <Link
                to="/projetos/$slug"
                params={{ slug: proximo.slug }}
                className="group mt-3 inline-flex items-center gap-4 font-display text-4xl font-medium tracking-[-0.03em] md:text-6xl"
              >
                {proximo.projeto}
                <ArrowRight
                  className="size-8 transition-transform group-hover:translate-x-1 md:size-10"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <Link
              to="/"
              hash="projetos"
              className={cn(linkSublinhado, "w-fit text-base md:text-lg")}
            >
              Ver todos os projetos
            </Link>
          </div>
        </section>
      </main>

      <footer className="tema-tinta border-t border-border px-6 py-10 md:px-14 lg:px-24">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:justify-between md:text-base">
          <p>© {new Date().getFullYear()} Huiatã Ribeiro</p>
          <p>Instrutor de Informática · SENAI · Senador Canedo – GO</p>
        </div>
      </footer>
    </div>
  );
}

function Abertura({ estudo }: { estudo: EstudoDeCaso }) {
  return (
    <section
      aria-labelledby="estudo-titulo"
      className="tema-tinta px-6 pt-20 pb-16 md:px-14 md:pt-28 lg:px-24 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <p className="enter text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          Estudo de caso · {estudo.categoria}
        </p>
        <h1
          id="estudo-titulo"
          className="mt-8 text-[clamp(3.25rem,10vw,9.5rem)] leading-[0.9] tracking-[-0.05em]"
        >
          <span className="linha-mascara">
            <span style={{ animationDelay: "80ms" }}>{estudo.projeto}</span>
          </span>
        </h1>
        <p
          className="enter mt-8 max-w-4xl text-xl leading-snug text-pretty md:text-3xl"
          style={{ animationDelay: "240ms" }}
        >
          {estudo.resumo}
        </p>

        <dl className="mt-14 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {estudo.ficha.map((item) => (
            <div key={item.rotulo}>
              <dt className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {item.rotulo}
              </dt>
              <dd className="mt-2 text-base text-pretty md:text-lg">{item.valor}</dd>
            </div>
          ))}
        </dl>

        <figure data-anim="foto" className="mt-14 overflow-hidden lg:mt-20">
          <img
            src={estudo.capa.src}
            srcSet={estudo.capa.srcSet}
            sizes="(min-width: 1600px) 1440px, 92vw"
            alt={estudo.capa.alt}
            width={1600}
            height={1000}
            fetchPriority="high"
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}

function ComoFunciona({ estudo }: { estudo: EstudoDeCaso }) {
  return (
    <SectionShell id="como-funciona" index="02" eyebrow="Como funciona" title={<>Como funciona</>}>
      <ol className="border-t border-border">
        {estudo.passos.map((passo, i) => (
          <Reveal
            as="li"
            key={passo.titulo}
            delay={(i % 3) * 60}
            className="grid gap-3 border-b border-border py-8 md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.4fr)] md:gap-8"
          >
            <span
              className="font-display text-xl text-muted-foreground tabular-nums"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl leading-tight font-medium tracking-[-0.005em] md:text-3xl">
              {passo.titulo}
            </h3>
            <p className="text-base text-pretty text-muted-foreground md:text-lg">{passo.texto}</p>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}

function Telas({ estudo }: { estudo: EstudoDeCaso }) {
  return (
    <SectionShell id="telas" index="03" eyebrow="As telas" title={<>As telas</>}>
      <div className="grid gap-14 lg:gap-20">
        {estudo.telas.map((tela) => (
          <figure key={tela.legenda}>
            <div
              data-anim="foto"
              className={cn(
                "overflow-hidden bg-card px-[6%] py-[5%]",
                tela.retrato && "flex justify-center",
              )}
            >
              <img
                src={tela.src}
                srcSet={tela.srcSet}
                sizes={
                  tela.retrato
                    ? "(min-width: 1024px) 380px, 60vw"
                    : "(min-width: 1600px) 1300px, 85vw"
                }
                alt={tela.alt}
                loading="lazy"
                decoding="async"
                className={cn(
                  "block h-auto border border-black/10",
                  tela.retrato ? "w-[min(380px,60%)]" : "w-full",
                )}
              />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground md:text-base">
              {tela.legenda}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}

function Resultado({ estudo }: { estudo: EstudoDeCaso }) {
  return (
    <SectionShell
      id="resultado"
      index="04"
      eyebrow="O resultado"
      tema="tinta"
      title={<>O resultado</>}
    >
      <div className="grid gap-x-8 sm:grid-cols-3">
        {estudo.resultados.map((r, i) => (
          <Reveal key={r.rotulo} delay={i * 90} className="border-t border-border py-7">
            <p className="font-display text-5xl leading-none font-medium tracking-[-0.035em] text-nowrap md:text-6xl xl:text-7xl">
              {r.valor}
            </p>
            <p className="mt-4 text-base text-pretty text-muted-foreground md:text-lg">
              {r.rotulo}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Tecnologias
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
            {estudo.tecnologias.map((t) => (
              <li
                key={t}
                className="text-lg after:ml-3 after:text-muted-foreground/60 after:content-['/'] last:after:hidden md:text-xl"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={estudo.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-[52px] w-fit items-center gap-3 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none md:text-lg"
          aria-label={`Ver no ar: ${estudo.projeto} (abre em nova aba)`}
        >
          Ver no ar
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </a>
      </div>
    </SectionShell>
  );
}
