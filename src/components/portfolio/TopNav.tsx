import { useState } from "react";
import { Menu, Monitor, ScrollText, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResumeButton } from "./ChaptersA";

const menu = [
  { id: "sobre", label: "Sobre" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "tecnologias", label: "Tecnologias" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
] as const;

export interface TopNavProps {
  readonly presenting: boolean;
  readonly onTogglePresenting: () => void;
  readonly onNavigate: (id: string) => void;
}

/** Menu discreto do modo portfólio + alternância para o modo apresentação. */
export function TopNav({ presenting, onTogglePresenting, onNavigate }: TopNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="surface-glass mx-auto flex max-w-[1600px] items-center justify-between gap-4 rounded-none px-5 py-4 md:mt-4 md:rounded-full md:px-8">
        <button
          type="button"
          onClick={() => onNavigate("intro")}
          className="font-display text-base font-semibold tracking-[0.2em] uppercase md:text-lg"
        >
          Huiatã<span className="text-primary">.</span>
        </button>

        {!presenting ? (
          <nav aria-label="Navegação principal" className="hidden gap-6 lg:flex">
            {menu.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onTogglePresenting}
            aria-pressed={presenting}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors md:text-base",
              presenting
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:bg-secondary",
            )}
          >
            {presenting ? (
              <ScrollText className="size-4" aria-hidden="true" />
            ) : (
              <Monitor className="size-4" aria-hidden="true" />
            )}
            {presenting ? "Modo portfólio" : "Modo apresentação"}
          </button>

          <div className="hidden md:block">
            <ResumeButton className="px-6 py-3 text-sm md:text-base" />
          </div>

          {!presenting ? (
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-border p-3 lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          ) : null}
        </div>
      </div>

      {open && !presenting ? (
        <nav
          aria-label="Navegação móvel"
          className="surface-glass mx-4 mt-2 grid gap-1 rounded-2xl p-4 lg:hidden"
        >
          {menu.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavigate(item.id);
                setOpen(false);
              }}
              className="rounded-xl px-4 py-3 text-left text-lg hover:bg-secondary"
            >
              {item.label}
            </button>
          ))}
          <ResumeButton className="mt-2 justify-center text-base" />
        </nav>
      ) : null}
    </header>
  );
}
