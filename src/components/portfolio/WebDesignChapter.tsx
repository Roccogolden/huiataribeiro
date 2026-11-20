import { ArrowUpRight } from "lucide-react";
import { webDesign } from "@/data/portfolio";
import { webImage } from "@/lib/responsive-image";
import { PhotoPlaceholder, Reveal, SectionShell } from "./primitives";

/** Print da página inicial de huiataribeiro.dev. */
const vitrine = {
  ...webImage("capa-huiataribeiro-dev"),
  alt: "Página inicial de huiataribeiro.dev: “Eu desenho e programo o seu site”, com sites de clientes no celular",
  position: "50% 50%",
};

/** Trabalho particular como web designer e desenvolvedor (só no portfólio, fora do modo apresentação). */
export function WebDesignChapter() {
  return (
    <SectionShell
      id="webdesign"
      index="—"
      eyebrow="Web design"
      tema="tinta"
      title={<>Web design e desenvolvimento</>}
      lead={webDesign.lead}
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
        <div className="min-w-0 lg:sticky lg:top-28">
          <Reveal>
            <a
              href={webDesign.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Abrir o portfólio de web design, huiataribeiro.dev (abre em nova aba)"
              className="block rounded-md focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            >
              <PhotoPlaceholder
                photo={vitrine}
                label="huiataribeiro.dev"
                ratio="landscape"
                sizes="(min-width: 1024px) 48vw, 92vw"
                hideCaption
              />
            </a>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={webDesign.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:w-auto md:text-lg"
            >
              Ver o portfólio de web design
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="min-w-0">
          <dl className="border-t border-border">
            {webDesign.services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 2) * 60}
                className="grid gap-1 border-b border-border py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="text-lg font-semibold md:text-xl">{service.title}</dt>
                <dd className="text-base text-pretty text-muted-foreground md:text-lg">
                  {service.text}
                </dd>
              </Reveal>
            ))}
          </dl>

          <p className="mt-8 text-base font-semibold text-accent">Clientes com site no ar</p>
          <ul className="mt-4 border-t border-border">
            {webDesign.clients.map((client, i) => (
              <Reveal as="li" key={client.name} delay={(i % 3) * 60}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Ver o site de ${client.name} no ar (abre em nova aba)`}
                  className="group flex items-baseline justify-between gap-4 border-b border-border py-4 transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  <span className="font-display text-2xl leading-tight md:text-3xl">
                    {client.name}
                  </span>
                  <span className="flex shrink-0 items-center gap-3 text-sm text-muted-foreground">
                    <span className="hidden sm:inline">{client.kind}</span>
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
