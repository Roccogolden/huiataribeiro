import { useEffect, useState } from "react";
import { Menu, Monitor, ScrollText, X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Itens do menu na ordem em que aparecem na página do portfólio. */
const menu = [
  { id: "sobre", label: "Sobre" },
  { id: "premio", label: "Prêmio" },
  { id: "projetos", label: "Projetos" },
  { id: "webdesign", label: "Web design" },
  { id: "educacao", label: "Em sala" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
] as const;

export interface TopNavProps {
  readonly presenting: boolean;
  readonly onTogglePresenting: () => void;
  readonly onNavigate: (id: string) => void;
}

/**
 * Barra editorial: transparente e clara sobre o topo escuro; ao rolar, vira papel
 * sólido com uma linha fina embaixo. No modo apresentação fica sempre escura.
 */
export function TopNav({ presenting, onTogglePresenting, onNavigate }: TopNavProps) {
  const [open, setOpen] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const atualizar = () => setRolou(window.scrollY > 48);
    atualizar();
    window.addEventListener("scroll", atualizar, { passive: true });
    return () => window.removeEventListener("scroll", atualizar);
  }, []);

  const escuro = presenting || (!rolou && !open);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        escuro
          ? "tema-tinta bg-transparent"
          : "border-b border-border bg-background/90 backdrop-blur-md",
        presenting && "bg-background",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-6 px-6 md:px-14 lg:px-24">
        <button
          type="button"
          onClick={() => onNavigate("intro")}
          className="font-display text-2xl leading-none tracking-tight md:text-[1.7rem]"
          aria-label="Huiatã Ribeiro, voltar ao início"
        >
          Huiatã <span className="italic">Ribeiro</span>
        </button>

        {!presenting ? (
          <nav aria-label="Navegação principal" className="hidden gap-6 lg:flex xl:gap-8">
            {menu.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="relative text-[0.95rem] text-foreground/75 transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-foreground hover:after:scale-x-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTogglePresenting}
            aria-pressed={presenting}
            className={cn(
              "hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:border-foreground md:inline-flex",
              presenting && "border-foreground",
            )}
          >
            {presenting ? (
              <ScrollText className="size-4" aria-hidden="true" />
            ) : (
              <Monitor className="size-4" aria-hidden="true" />
            )}
            {presenting ? "Modo portfólio" : "Modo apresentação"}
          </button>

          {!presenting ? (
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-border p-2.5 lg:hidden"
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
          className="grid gap-1 border-t border-border bg-background px-6 pt-2 pb-6 lg:hidden"
        >
          {menu.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavigate(item.id);
                setOpen(false);
              }}
              className="border-b border-border py-3 text-left font-display text-3xl"
            >
              {item.label}
            </button>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
