import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { chapters } from "@/data/portfolio";
import { TopNav } from "@/components/portfolio/TopNav";
import { ProgressBar } from "@/components/portfolio/ProgressBar";
import {
  AboutChapter,
  ExperienceChapter,
  IntroChapter,
  TimelineChapter,
} from "@/components/portfolio/ChaptersA";
import {
  DoingChapter,
  PracticeChapter,
  ProjectsChapter,
  SkillsChapter,
} from "@/components/portfolio/ChaptersB";
import {
  AiChapter,
  ContactChapter,
  EducationTechChapter,
  FormationChapter,
  FutureChapter,
  ImpactChapter,
  TestimonialsChapter,
} from "@/components/portfolio/ChaptersC";

const TITLE = "Huiatã Ribeiro | Tecnologia, Educação e Inteligência Artificial";
const DESCRIPTION =
  "Portfólio profissional interativo de Huiatã Ribeiro — instrutor de tecnologia, desenvolvimento de sistemas e inteligência artificial. Trajetória, projetos e competências em formato de apresentação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Huiatã Ribeiro",
          jobTitle: "Instrutor de Tecnologia",
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

  const go = useCallback((index: number) => {
    setCurrent(Math.min(Math.max(index, 0), chapters.length - 1));
  }, []);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

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
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [presenting, go],
  );

  const togglePresenting = useCallback(() => {
    setPresenting((value) => {
      if (value && document.fullscreenElement) void document.exitFullscreen();
      return !value;
    });
  }, []);

  const chapterNodes = [
    <IntroChapter key="intro" onNext={() => (presenting ? next() : scrollTo("sobre"))} />,
    <AboutChapter key="sobre" />,
    <TimelineChapter key="trajetoria" />,
    <ExperienceChapter key="experiencia" />,
    <DoingChapter key="atuacao" />,
    <SkillsChapter key="tecnologias" />,
    <ProjectsChapter key="projetos" />,
    <PracticeChapter key="pratica" />,
    <EducationTechChapter key="educacao" />,
    <AiChapter key="ia" />,
    <FormationChapter key="formacao" />,
    <ImpactChapter key="impacto" />,
    <TestimonialsChapter key="depoimentos" />,
    <FutureChapter key="futuro" />,
    <ContactChapter key="contato" />,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav
        presenting={presenting}
        onTogglePresenting={togglePresenting}
        onNavigate={scrollTo}
      />

      <main className={presenting ? "h-[100svh] overflow-hidden pt-24 pb-24" : "pt-24"}>
        {presenting ? (
          <div
            key={current}
            className="animate-in fade-in h-full duration-500 [&_section]:h-full [&_section]:min-h-0 [&_section]:justify-center [&_section]:overflow-y-auto [&_section]:py-6"
          >
            {chapterNodes[current]}
          </div>
        ) : (
          chapterNodes
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
          Huiatã Ribeiro — Tecnologia • Educação • Inteligência Artificial
        </footer>
      )}
    </div>
  );
}
