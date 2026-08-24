import { ArrowUp } from "lucide-react";
import { NAV, SITE } from "@/lib/content";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-primary text-primary-fg">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-4xl font-medium tracking-[-0.03em]">
              {SITE.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-fg/75">
              {SITE.role}. Atlanta. Controls first, then the tooling — including
              the models.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-primary-fg/55">
                Index
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-primary-fg/90 transition-opacity hover:opacity-70"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-primary-fg/55">
                Direct
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-primary-fg/90 transition-opacity hover:opacity-70"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-fg/90 transition-opacity hover:opacity-70"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SITE.phone.replace(/-/g, "")}`}
                    className="text-primary-fg/90 transition-opacity hover:opacity-70"
                  >
                    {SITE.phone}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-[0.18em] text-primary-fg/55">
                Credentials
              </p>
              <ul className="mt-4 space-y-2 text-sm text-primary-fg/90">
                <li>CISA</li>
                <li>CompTIA Security+</li>
                <li>NIST · ISO 27001 · FFIEC</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-primary-fg/15 pt-6 text-xs text-primary-fg/60">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex h-10 items-center gap-2 text-primary-fg/80 transition-opacity hover:opacity-70"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
