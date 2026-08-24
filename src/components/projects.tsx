import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ProjectMark } from "@/components/project-mark";

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const groupId = useId();

  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              01 — Selected
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] text-fg sm:text-5xl">
              Work
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Programs with a paper trail: assessments, automation, and the AI
            systems now entering the same control environment.
          </p>
        </header>

        <div
          role="radiogroup"
          aria-label="Filter work by category"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CATEGORIES.map((cat) => {
            const selected = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-labelledby={`${groupId}-${cat}`}
                onClick={() => setFilter(cat)}
                className={cn(
                  "h-11 shrink-0 rounded-full px-4 text-sm transition-[background-color,color,box-shadow] duration-150 ease-out",
                  selected
                    ? "bg-primary text-primary-fg"
                    : "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
                )}
              >
                <span id={`${groupId}-${cat}`}>{cat}</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,translate] duration-200 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-border-hover)]"
    >
      <button
        type="button"
        className="relative block w-full overflow-hidden rounded-t-xl text-left"
        aria-expanded={open}
        aria-label={`${open ? "Hide" : "Show"} description of ${project.title}`}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="relative aspect-[5/3] bg-surface text-primary">
          <span className="absolute left-5 top-4 font-display text-sm tabular-nums text-muted">
            {project.index}
          </span>
          <ProjectMark
            mark={project.mark}
            className="absolute inset-x-6 bottom-4 top-10 h-[calc(100%-3.5rem)] w-[calc(100%-3rem)] opacity-80"
          />
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-end overflow-y-auto bg-primary p-5 text-primary-fg",
              "transition-[opacity,translate] duration-200 ease-out",
              open
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100",
            )}
          >
            <p className="text-sm leading-relaxed">{project.description}</p>
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">
          {project.category} · {project.dates}
        </p>
        <h3 className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-fg">
          <Link
            to="/work/$id"
            params={{ id: project.id }}
            className="hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-muted">{project.org}</p>
        <p className="text-sm leading-relaxed text-fg md:hidden">
          {project.summary}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          to="/work/$id"
          params={{ id: project.id }}
          className="inline-flex h-10 items-center gap-1 text-sm text-fg"
        >
          Case notes
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
