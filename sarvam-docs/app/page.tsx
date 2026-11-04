import Link from "next/link";
import Shell from "@/components/Shell";
import DocView from "@/components/DocView";
import { allDocs, COMPONENT_GROUPS } from "@/lib/content";
import fs from "node:fs";
import path from "node:path";
import { SKILL_DIR } from "@/lib/content";

export default function Home() {
  const docs = allDocs();
  const skill = fs.readFileSync(path.join(SKILL_DIR, "SKILL.md"), "utf8");
  const card = (d: (typeof docs)[number]) => (
    <Link key={d.section + d.slug} href={`/${d.section}/${d.slug}/`}><b>{d.title}</b><span>{d.summary.slice(0, 110)}</span></Link>
  );
  const human = (
    <>
      <div className="hero">
        <div className="aura" aria-hidden />
        <img src="/assets/motifs/ornament-divider.svg" width={208} alt="" style={{ display: "block", marginBottom: 18 }} />
        <p className="crumb">Sarvam · Design system</p>
        <h1 className="title">AI for all from India</h1>
        <p className="summary">Sarvam&apos;s brand, written down as a system that people and AI agents can use. Tokens, foundations and components are extracted from sarvam.ai. Every page is generated from the same skill an agent installs, so switch to <b>Agent</b> in the toolbar to read what the AI reads.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btn-hero-dark" href="/components/button/"><span>Browse components</span></Link>
          <Link className="btn btn-hero-light" href="/guides/decisions/"><span>Decision guide</span></Link>
        </div>
      </div>
      <div className="md"><h2 id="how-it-works">How it works</h2>
        <p>Prompts stay short (&ldquo;Build a landing page for Sarvam Voice Agents&rdquo;). The skill does the rest: <code>SKILL.md</code> routes the agent, <code>DECISIONS.md</code> picks variants from context (which badge, which icon style, which gradient), and each component page gives exact specs, rules, accessibility and edge cases.</p>
        <h2 id="guides">Guides</h2></div>
      <div className="indexgrid">{docs.filter(d => d.section === "guides").map(card)}</div>
      <div className="md"><h2 id="foundations">Foundations</h2></div>
      <div className="indexgrid">{docs.filter(d => d.section === "foundations").map(card)}</div>
      <div className="md"><h2 id="components">Components</h2></div>
      {COMPONENT_GROUPS.map(g => (
        <div key={g}><p className="pv-label">{g}</p><div className="indexgrid" style={{ marginTop: 0 }}>{docs.filter(d => d.section === "components" && d.group === g).map(card)}</div></div>
      ))}
    </>
  );
  return (
    <Shell tocItems={[{ id: "how-it-works", text: "How it works" }, { id: "guides", text: "Guides" }, { id: "foundations", text: "Foundations" }, { id: "components", text: "Components" }]}>
      <DocView human={human} agent={skill} file="sarvam-design-system/SKILL.md" />
    </Shell>
  );
}
