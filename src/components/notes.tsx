import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { NOTES } from "@/lib/content";

export function Notes() {
  return (
    <section
      id="notes"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              02 — Notes
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-fg sm:text-5xl">
              Field notes
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Architectural arguments, not commentary. Written for operators and
            the recruiters who hire them.
          </p>
        </header>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {NOTES.map((note) => (
            <li key={note.slug}>
              <Link
                to="/notes/$slug"
                params={{ slug: note.slug }}
                className="group grid gap-4 py-8 sm:grid-cols-[5rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <p className="font-display text-sm tabular-nums text-muted">
                  {note.index}
                </p>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">
                    {note.topic}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-medium tracking-[-0.02em] text-fg group-hover:text-primary">
                    {note.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {note.dek}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-fg">
                  Read
                  <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
