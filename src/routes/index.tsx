import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { chapters, webChapterIds } from "@/data/portfolio";
import { TopNav } from "@/components/portfolio/TopNav";
import { ProgressBar } from "@/components/portfolio/ProgressBar";
import {
  AboutChapter,
  ExperienceChapter,
  IntroChapter,
  TimelineChapter,
} from "@/components/portfolio/ChaptersA";
import { AwardChapter } from "@/components/portfolio/AwardChapter";
import {
  DoingChapter,
  PracticeChapter,
  ProjectsChapter,
  SkillsChapter,
} from "@/components/portfolio/ChaptersB";
import {
  AiChapter,
  ClassroomDynamicsChapter,
  ContactChapter,
  EducationTechChapter,
  FormationChapter,
  FutureChapter,
  ImpactChapter,
  TestimonialsChapter,
} from "@/components/portfolio/ChaptersC";

/** Endereço oficial. Os outros (sem www e .vercel.app) apontam para ele. */
const SITE_URL = "https://www.huiataribeiro.com.br";
/** Prévia do link (1200 × 630). Troque o ?v= sempre que a imagem mudar. */
const OG_IMAGE = `${SITE_URL}/og-image.jpg?v=20261119`;
const TITLE = "Huiatã Ribeiro | Tecnologia, Educação e Inteligência Artificial";
const DESCRIPTION =
  "Portfólio profissional de Huiatã Ribeiro — instrutor de tecnologia do SENAI premiado na 6ª edição do Docente TOP 10 (SESI SENAI Goiás). Trajetória, projetos e competências em formato de apresentação.";

/** Distância entre o topo da tela e o início do capítulo ao navegar pelo menu. */
const NAV_OFFSET = -32;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Huiatã Ribeiro, instrutor de tecnologia do SENAI, Docente TOP 10 2026/2027",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Huiatã Ribeiro",
          url: `${SITE_URL}/`,
          image: OG_IMAGE,
          jobTitle: "Instrutor de Informática",
          worksFor: { "@type": "Organization", name: "SENAI Goiás" },
          award:
            "Docente TOP 10 — 6ª edição, ciclo 2026/2027 (Programa Valorização Docente, SESI SENAI Goiás)",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Senador Canedo",
            addressRegion: "GO",
            addressCountry: "BR",
          },
          sameAs: ["https://www.linkedin.com/in/huiataribeiro"],
          knowsAbout: [
            "Desenvolvimento de Sistemas",
            "Inteligência Artificial",
            "Redes de Computadores",
            "Educação Profissional",
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [presenting, setPresenting] = useState(false);
  const [current, setCurrent] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  const go = useCallback((index: number) => {
    setCurrent(Math.min(Math.max(index, 0), chapters.length - 1));
  }, []);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  // Rolagem suave (Lenis) só no portfólio; com "reduzir movimento", a rolagem normal.
  useEffect(() => {
    if (presenting) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, autoRaf: true });
    lenisRef.current = lenis;
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [presenting]);

  // Navegação por teclado no modo apresentação.
  useEffect(() => {
    if (!presenting) return;
    const onKey = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          event.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          event.preventDefault();
          prev();
          break;
        case "Home":
          event.preventDefault();
          go(0);
          break;
        case "End":
          event.preventDefault();
          go(chapters.length - 1);
          break;
        case "Escape":
          setPresenting(false);
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [presenting, next, prev, go]);

  const requestFullscreen = useCallback(() => {
    const el = document.documentElement;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.().catch(() => undefined);
  }, []);

  const scrollTo = useCallback(
    (id: string) => {
      const index = chapters.findIndex((c) => c.id === id);
      if (presenting) {
        if (index >= 0) go(index);
        return;
      }
      const target = document.getElementById(id);
      if (!target) return;
      if (lenisRef.current) lenisRef.current.scrollTo(target, { offset: NAV_OFFSET });
      else target.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [presenting, go],
  );

  const togglePresenting = useCallback(() => {
    setPresenting((value) => {
      if (value && document.fullscreenElement) void document.exitFullscreen();
      return !value;
    });
  }, []);

  const chapterNodes: Record<string, ReactNode> = {
    intro: (
      <IntroChapter
        key="intro"
        onNext={() => (presenting ? next() : scrollTo("sobre"))}
        onAward={() => scrollTo("premio")}
      />
    ),
    sobre: <AboutChapter key="sobre" />,
    premio: <AwardChapter key="premio" />,
    trajetoria: <TimelineChapter key="trajetoria" />,
    experiencia: <ExperienceChapter key="experiencia" />,
    atuacao: <DoingChapter key="atuacao" />,
    tecnologias: <SkillsChapter key="tecnologias" />,
    projetos: <ProjectsChapter key="projetos" />,
    pratica: <PracticeChapter key="pratica" />,
    educacao: <EducationTechChapter key="educacao" />,
    dinamicas: <ClassroomDynamicsChapter key="dinamicas" />,
    ia: <AiChapter key="ia" />,
    formacao: <FormationChapter key="formacao" />,
    impacto: <ImpactChapter key="impacto" />,
    depoimentos: <TestimonialsChapter key="depoimentos" />,
    futuro: <FutureChapter key="futuro" />,
    contato: <ContactChapter key="contato" />,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav presenting={presenting} onTogglePresenting={togglePresenting} onNavigate={scrollTo} />

      <main className={presenting ? "h-[100svh] overflow-hidden pt-24 pb-24" : undefined}>
        {presenting ? (
          <div key={current} className="presenting animate-in fade-in h-full duration-500">
            {chapterNodes[chapters[current]!.id]}
          </div>
        ) : (
          webChapterIds.map((id) => chapterNodes[id])
        )}
      </main>

      {presenting ? (
        <ProgressBar
          current={current}
          onSelect={go}
          onPrev={prev}
          onNext={next}
          onFullscreen={requestFullscreen}
        />
      ) : (
        <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground md:text-base">
          Huiatã Ribeiro · Instrutor de Informática no SENAI · Senador Canedo, GO
        </footer>
      )}
    </div>
  );
}
