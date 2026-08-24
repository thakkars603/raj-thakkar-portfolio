import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import {
  adjacentNote,
  getNote,
  getProject,
  SITE,
} from "@/lib/content";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const note = getNote(params.slug);
    if (!note) throw notFound();
    return {
      note,
      related: getProject(note.related),
      ...adjacentNote(params.slug),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.note.title ?? "Notes"} — ${SITE.name}`,
      },
      {
        name: "description",
        content: loaderData?.note.dek ?? SITE.lede,
      },
    ],
  }),
  component: NotePage,
});

function NotePage() {
  const { note, related, prev, next } = Route.useLoaderData();

  return (
    <PageShell>
      <main className="px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
        <article className="mx-auto max-w-2xl">
          <Link
            to="/"
            hash="notes"
            className="inline-flex h-10 items-center gap-2 text-sm text-muted hover:text-fg"
          >
            <ArrowLeft className="size-4" />
            All notes
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.16em] text-muted">
            {note.index} · {note.topic}
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-fg sm:text-5xl">
            {note.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{note.dek}</p>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-fg sm:text-lg">
            {note.paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          {related ? (
            <p className="mt-12 border-t border-border pt-8 text-sm text-muted">
              Related work:{" "}
              <Link
                to="/work/$id"
                params={{ id: related.id }}
                className="text-fg underline-offset-4 hover:underline"
              >
                {related.title}
              </Link>
            </p>
          ) : null}
        </article>

        <nav
          aria-label="Adjacent notes"
          className="mx-auto mt-16 grid max-w-2xl gap-4 border-t border-border pt-10 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              to="/notes/$slug"
              params={{ slug: prev.slug }}
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
              to="/notes/$slug"
              params={{ slug: next.slug }}
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
