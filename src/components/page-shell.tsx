import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <div className="paper-grain pointer-events-none fixed inset-0 z-0 opacity-40" />
      <div className="relative z-10">
        <SiteNav />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
