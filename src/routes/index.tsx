import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Notes } from "@/components/notes";
import { PageShell } from "@/components/page-shell";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      <main>
        <Hero />
        <Method />
        <Projects />
        <Notes />
        <About />
        <Skills />
        <Contact />
      </main>
    </PageShell>
  );
}
