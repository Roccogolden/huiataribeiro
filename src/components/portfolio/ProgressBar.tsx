import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { chapters } from "@/data/portfolio";

export interface ProgressBarProps {
  readonly current: number;
  readonly onSelect: (index: number) => void;
  readonly onPrev: () => void;
  readonly onNext: () => void;
  readonly onFullscreen: () => void;
}

/** Indicador discreto de progresso + controles do modo apresentação. */
export function ProgressBar({
  current,
  onSelect,
  onPrev,
  onNext,
  onFullscreen,
}: ProgressBarProps) {
  const chapter = chapters[current]!;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="surface-glass mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 rounded-full px-5 py-3">
        <p className="eyebrow text-[0.7rem] md:text-xs">
          {chapter.index} — {chapter.label}
        </p>

        <ol className="hidden flex-1 items-center gap-1.5 md:flex" aria-label="Capítulos">
          {chapters.map((c, i) => (
            <li key={c.id} className="flex-1">
              <button
                type="button"
                aria-label={`Ir para ${c.index} ${c.label}`}
                aria-current={i === current}
                onClick={() => onSelect(i)}
                className={cn(
                  "h-1.5 w-full rounded-full transition-colors",
                  i === current ? "bg-primary" : i < current ? "bg-primary/40" : "bg-border",
                )}
              />
            </li>
          ))}
        </ol>

        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-muted-foreground">
            {current + 1}/{chapters.length}
          </span>
          <button
            type="button"
            aria-label="Capítulo anterior"
            onClick={onPrev}
            className="rounded-full border border-border p-3 hover:bg-secondary"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Próximo capítulo"
            onClick={onNext}
            className="rounded-full bg-primary p-3 text-primary-foreground"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Tela cheia"
            onClick={onFullscreen}
            className="hidden rounded-full border border-border p-3 hover:bg-secondary md:inline-flex"
          >
            <Maximize2 className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
