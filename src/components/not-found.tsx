import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export function NotFound() {
  return (
    <PageShell>
      <main className="flex min-h-dvh flex-col items-center justify-center px-5 text-center">
        <p className="font-display text-6xl font-medium tracking-[-0.04em] text-fg">
          404
        </p>
        <p className="mt-4 max-w-sm text-muted">
          That page is not in the index.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-fg"
        >
          Back to the site
        </Link>
      </main>
    </PageShell>
  );
}
