import { EDUCATION, EXPERIENCE, SITE } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            03 — Profile
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-fg sm:text-5xl">
            About
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl bg-primary p-8 text-primary-fg">
            <p className="font-display text-6xl font-medium leading-none tracking-[-0.04em]">
              {SITE.monogram}
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-primary-fg/70">
              Colophon
            </p>
            <p className="mt-2 font-display text-2xl leading-snug">
              {SITE.name}
            </p>
            <p className="mt-1 text-sm text-primary-fg/80">
              {SITE.location}
            </p>
            <p className="mt-6 border-t border-primary-fg/20 pt-6 text-sm leading-relaxed text-primary-fg/85">
              CISA. Security+. MS, Information Systems Audit & Control.
              BBA, Accounting — Georgia Tech.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-5 text-base leading-relaxed text-fg sm:text-lg">
            {SITE.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <ol className="mt-12 divide-y divide-border border-y border-border">
            {EXPERIENCE.map((job) => (
              <li
                key={`${job.role}-${job.dates}`}
                className="grid gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-muted sm:pt-1">
                  {job.dates}
                </p>
                <div>
                  <p className="font-medium text-fg">{job.role}</p>
                  <p className="text-sm text-muted">
                    {job.org} · {job.place}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {(job.dates.includes("Present")
                      ? job.bullets
                      : job.bullets.slice(0, 2)
                    ).map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <ul className="mt-8 space-y-2 text-sm text-muted">
            {EDUCATION.map((ed) => (
              <li key={ed.degree}>
                <span className="text-fg">{ed.degree}</span>
                <span> — {ed.school}</span>
              </li>
            ))}
          </ul>

          <a
            href={SITE.resume}
            download
            className="mt-8 inline-flex h-11 items-center rounded-md px-5 text-sm font-medium text-fg shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-surface"
          >
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
