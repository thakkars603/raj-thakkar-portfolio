import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Skills } from "@/components/skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="relative min-h-dvh">
      <div className="paper-grain pointer-events-none fixed inset-0 z-0 opacity-40" />
      <div className="relative z-10">
        <SiteNav />
        <main>
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
