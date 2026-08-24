import { METHOD } from "@/lib/content";

export function Method() {
  return (
    <section
      id="method"
      className="border-t border-border px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Method
        </p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium tracking-[-0.02em] text-fg sm:text-4xl">
          Ten years of financial-services control work, applied to the models now entering the same environment.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {METHOD.map((item) => (
            <li key={item.index}>
              <p className="font-display text-sm tabular-nums text-muted">
                {item.index}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.02em] text-fg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
