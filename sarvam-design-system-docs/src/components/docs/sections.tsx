import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ALL, hrefOf } from "@/lib/nav";
import type { DocContent, Rule } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion";

const ALIAS: Record<string, string> = {
  tag: "chip", segmented: "segmented-control", "language-select": "select", "feature-card": "card",
  "cta-panel": "cta-banner", "glow-card": "panel", composer: "prompt-input",
};

function Section({ id, title, count, children }: { id: string; title: string; count?: string; children: React.ReactNode }) {
  return (
    <Reveal>
    <section id={id} className="scroll-mt-36 border-t pt-10">
      <h2 className="text-[16px] font-medium tracking-tight">{title}</h2>
      {count && <p className="mt-0.5 text-[12px] text-muted-foreground">{count}</p>}
      <div className="mt-6">{children}</div>
    </section>
    </Reveal>
  );
}

const TAG: Record<string, string> = {
  Use: "bg-emerald-50 text-emerald-800", "Not for": "bg-neutral-100 text-neutral-700",
  Must: "bg-indigo-50 text-indigo-800", Should: "bg-neutral-100 text-neutral-700", Never: "bg-red-50 text-red-700",
};
const Tag = ({ t }: { t: string }) => (
  <span className={cn("inline-flex h-6 shrink-0 items-center rounded-md px-2 text-[12px] font-medium", TAG[t])}>{t}</span>
);

const inline = (s: string) => (
  <ReactMarkdown components={{ p: ({ children }) => <>{children}</>, code: ({ children }) => <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">{children}</code>, strong: ({ children }) => <strong className="font-medium text-foreground">{children}</strong> }}>{s}</ReactMarkdown>
);

function relatedLink(name: string) {
  const slug = ALIAS[name] ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const item = ALL.find((i) => i.slug === slug || i.title.toLowerCase() === name.toLowerCase());
  return item ? <Link key={name} href={hrefOf(item)} className="rounded-lg border px-3 py-1.5 text-[14px] hover:bg-muted">{item.title}</Link>
    : <span key={name} className="rounded-lg border px-3 py-1.5 text-[14px] text-muted-foreground">{name.replace(/-/g, " ")}</span>;
}

const isColor = (v: string) => /^#[0-9a-f]{3,8}$/i.test(v) || /^rgba?\(/.test(v) || /gradient\(/.test(v);

/** Human view: the same short set of sections on every page. The full spec lives in the Agent view. */
export function Sections({ doc }: { doc: DocContent }) {
  const s = doc.sections;
  return (
    <div className="space-y-12">
      {(s.use.length > 0 || s.notFor.length > 0) && (
        <Section id="usage" title="Usage" count="When to use it">
          <ul className="divide-y">
            {s.use.map((u, i) => <li key={`u${i}`} className="flex gap-4 py-3 text-[14px]"><Tag t="Use" /><span className="text-muted-foreground">{inline(u)}</span></li>)}
            {s.notFor.map((u, i) => <li key={`n${i}`} className="flex gap-4 py-3 text-[14px]"><Tag t="Not for" /><span className="text-muted-foreground">{inline(u)}</span></li>)}
          </ul>
        </Section>
      )}

      {s.rules.length > 0 && (
        <Section id="rules" title="Rules" count={`${s.rules.length} rules`}>
          <ul className="divide-y">
            {s.rules.map((r: Rule, i) => (
              <li key={i} className="flex gap-4 py-3 text-[14px]">
                <Tag t={r.level} />
                <div><p className="text-foreground">{inline(r.text)}</p>{r.because && <p className="mt-1 text-muted-foreground">Because {inline(r.because)}</p>}</div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {s.a11y.length > 0 && (
        <Section id="accessibility" title="Accessibility" count={`${s.a11y.length} checks`}>
          <ul className="divide-y">{s.a11y.map((a, i) => <li key={i} className="py-3 text-[14px] text-muted-foreground">{inline(a)}</li>)}</ul>
        </Section>
      )}

      {doc.kind !== "component" && s.tokens.length > 0 && (
        <Section id="tokens" title="Tokens" count={`${s.tokens.length} tokens`}>
          <dl className="divide-y">{s.tokens.map(([n, v]) => (
            <div key={n} className="grid gap-1 py-2.5 sm:grid-cols-[220px_1fr] sm:gap-6">
              <dt className="font-mono text-[13px]">{n}</dt>
              <dd className="flex min-w-0 items-center gap-2 font-mono text-[13px] text-muted-foreground">
                {isColor(v) && <span className="size-4 shrink-0 rounded border" style={{ background: v }} />}
                <span className="truncate" title={v}>{v}</span>
              </dd>
            </div>
          ))}</dl>
        </Section>
      )}

      {s.related.length > 0 && (
        <Section id="related" title="Related">
          <div className="flex flex-wrap gap-2">{s.related.map(relatedLink)}</div>
        </Section>
      )}
    </div>
  );
}
