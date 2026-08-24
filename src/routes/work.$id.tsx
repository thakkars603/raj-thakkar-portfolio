import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import {
  adjacentProject,
  getProject,
  SITE,
} from "@/lib/content";

export const Route = createFileRoute("/work/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project, ...adjacentProject(params.id) };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.project.title ?? "Work"} — ${SITE.name}`,
      },
      {
        name: "description",
        content: loaderData?.project.summary ?? SITE.lede,
      },
    ],
  }),
  component: WorkCase,
});

function WorkCase() {
  const { project, prev, next } = Route.useLoaderData();

  return (
    <PageShell>
      <main className="px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/"
            hash="work"
            className="inline-flex h-10 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            All work
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.16em] text-muted">
            {project.index} · {project.category} · {project.dates}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {project.org}
          </p>

          <p className="mt-10 text-lg leading-relaxed text-fg">
            {project.description}
          </p>

          <h2 className="mt-12 font-display text-2xl font-medium tracking-[-0.02em] text-fg">
            What was delivered
          </h2>
          <ol className="mt-6 space-y-4">
            {project.outcomes.map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="font-display text-sm tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-fg">{item}</p>
              </li>
            ))}
          </ol>

          <ul className="mt-10 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-surface px-3 py-1.5 text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </article>

        <nav
          aria-label="Adjacent work"
          className="mx-auto mt-16 grid max-w-3xl gap-4 border-t border-border pt-10 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              to="/work/$id"
              params={{ id: prev.id }}
              className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted">
                <ArrowLeft className="size-3.5" />
                Previous
              </p>
              <p className="mt-2 font-display text-xl font-medium text-fg group-hover:text-primary">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to="/work/$id"
              params={{ id: next.id }}
              className="group rounded-xl bg-surface p-5 text-right shadow-[var(--shadow-border)]"
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted sm:ml-auto">
                Next
                <ArrowRight className="size-3.5" />
              </p>
              <p className="mt-2 font-display text-xl font-medium text-fg group-hover:text-primary">
                {next.title}
              </p>
            </Link>
          ) : null}
        </nav>
      </main>
    </PageShell>
  );
}
