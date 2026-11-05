import { Suspense } from "react";
import { Container } from "@/components/layout/container";
import { Sidebar } from "@/components/docs/sidebar";
import { ModeToggle } from "@/components/docs/mode";
import { MobileNav } from "@/components/docs/mobile-nav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="pt-[var(--docs-top)]">
      <div className="docs-grid">
        <aside className="hidden lg:block">
          <Sidebar />
        </aside>
        <main className="min-w-0 pb-32">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <aside className="hidden xl:block">
          <div id="toc-slot" className="no-scrollbar sticky top-[var(--docs-top)] max-h-[calc(100vh-var(--docs-top))] overflow-y-auto pb-24" />
        </aside>
      </div>
      {/* fixed top bar: solid, then fades out so scrolled content slides under it */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[var(--docs-top)] bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_62%,transparent_100%)]">
        <div className="relative pt-[18px] lg:pt-10">
          <MobileNav />
          <ModeToggle />
        </div>
      </header>
    </Container>
  );
}
