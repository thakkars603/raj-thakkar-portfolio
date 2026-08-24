import { ArrowDown } from "lucide-react";
import { SITE } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            Cybersecurity · AI Governance · GRC
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,9vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.03em] text-fg">
            {SITE.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {SITE.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-fg transition-colors duration-150 hover:bg-fg active:scale-[0.96]"
            >
              Selected work
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-md px-6 text-sm font-medium text-fg shadow-[var(--shadow-border)] transition-colors duration-150 hover:bg-surface active:scale-[0.96]"
            >
              Correspondence
            </a>
          </div>
        </div>

        <aside className="lg:col-span-4 lg:justify-self-end">
          <dl className="grid gap-5 border-t border-border pt-6 text-sm sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Current
              </dt>
              <dd className="mt-1.5 text-fg">
                {SITE.title}
                <span className="block text-muted">{SITE.org}</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Based
              </dt>
              <dd className="mt-1.5 text-fg">{SITE.location}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Credentials
              </dt>
              <dd className="mt-1.5 text-fg">CISA · CompTIA Security+</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
