import { SKILLS } from "@/lib/content";

export function Skills() {
  return (
    <section
      id="practice"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            03 — Practice
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-fg sm:text-5xl">
            Capabilities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A single stack spanning control architecture, regulatory mapping,
            GRC automation, and the AI systems now entering the same
            environment.
          </p>
        </header>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-border shadow-[var(--shadow-border)] sm:grid-cols-2">
          {SKILLS.map((group) => (
            <div key={group.heading} className="bg-bg p-6 sm:p-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {group.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-border pb-3 text-sm text-fg last:border-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
