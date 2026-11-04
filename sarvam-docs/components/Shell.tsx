import Link from "next/link";
import { allDocs, COMPONENT_GROUPS, type Doc } from "@/lib/content";
import MobileMenu from "./MobileMenu";

export default function Shell({ current, tocItems, children }: {
  current?: { section: string; slug: string };
  tocItems?: { id: string; text: string }[];
  children: React.ReactNode;
}) {
  const docs = allDocs();
  const href = (d: Doc) => `/${d.section}/${d.slug}/`;
  const on = (d: Doc) => current?.section === d.section && current?.slug === d.slug ? "on" : undefined;
  const group = (title: string, items: Doc[]) => items.length ? (
    <div key={title}>
      <h4>{title}</h4>
      {items.map(d => <Link key={d.slug} href={href(d)} className={on(d)}>{d.title}</Link>)}
    </div>
  ) : null;

  return (
    <>
      <header className="topnav">
        <Link href="/" className="brand"><img src="/assets/logos/sarvam-wordmark-black.svg" alt="sarvam" /><span>Design System</span></Link>
        <nav className="links" aria-label="Sections">
          <Link href="/" className={!current ? "on" : undefined}>Overview</Link>
          <Link href="/foundations/color/" className={current?.section === "foundations" ? "on" : undefined}>Foundations</Link>
          <Link href="/components/button/" className={current?.section === "components" ? "on" : undefined}>Components</Link>
          <Link href="/guides/decisions/" className={current?.section === "guides" ? "on" : undefined}>Guides</Link>
        </nav>
        <MobileMenu />
      </header>
      <div className="shell">
        <aside className="side" id="side" aria-label="Documentation">
          <div>
            <h4>Sarvam</h4>
            <Link href="/" className={!current ? "on" : undefined}>Introduction</Link>
            {docs.filter(d => d.section === "guides").map(d => <Link key={d.slug} href={href(d)} className={on(d)}>{d.title}</Link>)}
          </div>
          {group("Foundations", docs.filter(d => d.section === "foundations"))}
          {COMPONENT_GROUPS.map(g => group(g, docs.filter(d => d.section === "components" && d.group === g)))}
        </aside>
        <main className="content" id="content">{children}</main>
        <aside className="toc" aria-label="On this page">
          {tocItems && tocItems.length > 0 && (<>
            <h5>On this page</h5>
            {tocItems.map(t => <a key={t.id} href={`#${t.id}`}>{t.text}</a>)}
          </>)}
          <div className="box">
            <h5>Install</h5>
            <p>For your coding agent: open <b>Install</b> in the toolbar below.</p>
          </div>
          <div className="box">
            <h5>Source of truth</h5>
            <p>Every page is generated from the <code>sarvam-design-system</code> skill. Switch to <b>Agent</b> to see the exact markdown an AI reads.</p>
          </div>
          <div className="box">
            <h5>Built from</h5>
            <p>sarvam.ai production CSS, /brand, /brand-guidelines and Sarvam&apos;s LinkedIn.</p>
          </div>
        </aside>
      </div>
    </>
  );
}
