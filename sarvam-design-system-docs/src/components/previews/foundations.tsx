"use client";
import { useState } from "react";
import assets from "@/styles/skill-assets.json";
import { SButton } from "@/components/sarvam/button";

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-[13px] font-medium text-[var(--tx)]">{children}</p>
);
const Mono = ({ children }: { children: React.ReactNode }) => (
  <span className="s-mono text-[11px] text-[var(--tx-tertiary)]">{children}</span>
);

/* ───────── Color ───────── */
const RAMP = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
function Swatch({ v, name, dark }: { v: string; name: string; dark?: boolean }) {
  return (
    <div className="min-w-0">
      <div className="h-14 rounded-xl" style={{ background: `var(${v})`, boxShadow: dark ? undefined : "inset 0 0 0 1px rgba(0,0,0,.06)" }} />
      <p className="mt-2 truncate text-[12px] text-[var(--tx)]">{name}</p>
      <Mono>{v}</Mono>
    </div>
  );
}
export function ColorPreview() {
  return (
    <div className="space-y-10">
      <div>
        <Label>Text</Label>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {[["--tx", "Primary"], ["--tx-secondary", "Secondary"], ["--tx-tertiary", "Tertiary"], ["--tx-brand", "Brand"], ["--tx-accent", "Accent"], ["--tx-inverse", "Inverse"]].map(([v, n]) => <Swatch key={v} v={v} name={n} dark={v !== "--tx-inverse"} />)}
        </div>
      </div>
      <div>
        <Label>Surfaces and lines</Label>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {[["--sf", "Page"], ["--sf-white", "Card"], ["--sf-secondary", "Secondary"], ["--sf-tertiary", "Well"], ["--st", "Border"], ["--slate", "Slate"]].map(([v, n]) => <Swatch key={v} v={v} name={n} dark={v === "--slate"} />)}
        </div>
      </div>
      {["indigo", "orange", "grey", "green", "pink", "yellow", "red"].map((h) => (
        <div key={h}>
          <Label>{h[0].toUpperCase() + h.slice(1)} {h === "indigo" ? "· primary brand hue" : h === "orange" ? "· secondary brand hue" : ""}</Label>
          <div className="flex overflow-hidden rounded-xl">
            {RAMP.map((s) => (
              <div key={s} className="group flex-1">
                <div className="h-12" style={{ background: `var(--sr-${h}-${s}, var(--sr-${h}-1000))` }} />
                <p className="mt-1.5 text-center s-mono text-[10px] text-[var(--tx-tertiary)]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        <Label>The spectrum · blue meets orange, used as light</Label>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["--grad-spectrum", "--grad-spectrum-light", "--grad-sunrise", "--grad-night", "--grad-blue", "--grad-orange", "--grad-green", "--grad-pink"].map((g) => (
            <div key={g}><div className="h-24 rounded-2xl" style={{ background: `var(${g})` }} /><Mono>{g}</Mono></div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────── Typography ───────── */
const SCALE = [
  { n: "Display", v: "--fs-display", f: "var(--font-display)", w: 425, lh: 1.05, s: "AI for all from India" },
  { n: "Display · product", v: "--fs-display-product", f: "var(--font-display)", w: 425, lh: 1.1, s: "Speech to text, in 22 languages" },
  { n: "H2 · section", v: "--fs-h2", f: "var(--font-display)", w: 425, lh: 1.2, s: "Built for India's languages" },
  { n: "H3 · card title", v: "--fs-h3", f: "var(--font-sans)", w: 525, lh: 1.3, s: "Bulbul V3 text to speech" },
  { n: "Lead", v: "--fs-lead", f: "var(--font-sans)", w: 425, lh: 1.75, s: "Sovereign models and agents that speak, read and reason in Indian languages." },
  { n: "Body", v: "--fs-body", f: "var(--font-sans)", w: 425, lh: 1.55, s: "Transcribe calls, translate documents and build voice agents." },
  { n: "Small", v: "--fs-small", f: "var(--font-sans)", w: 425, lh: 1.5, s: "Captions, meta and helper text." },
];
export function TypographyPreview() {
  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-2">
        {[["Season Mix", "var(--font-display)", "Headlines, hero, section titles · 425 / 525"], ["Matter", "var(--font-sans)", "UI, body, card titles, buttons · 425 / 525"], ["Geist", "var(--font-eyebrow)", "Eyebrows + section labels, always #666"], ["Matter Mono", "var(--font-mono)", "Code"]].map(([n, f, d]) => (
          <div key={n} className="rounded-2xl border border-[var(--st)] p-5">
            <p className="text-[40px] leading-none" style={{ fontFamily: f }}>Aa अ</p>
            <p className="mt-4 text-[15px] [font-weight:var(--fw-medium)]">{n}</p>
            <p className="text-[13px] text-[var(--tx-tertiary)]">{d}</p>
          </div>
        ))}
      </div>
      <div className="divide-y divide-[var(--st-secondary)]">
        {SCALE.map((t) => (
          <div key={t.n} className="grid gap-2 py-5 sm:grid-cols-[1fr_150px] sm:items-baseline">
            <p className="min-w-0 truncate" style={{ fontFamily: t.f, fontWeight: t.w, fontSize: `var(${t.v})`, lineHeight: t.lh, letterSpacing: t.f.includes("display") ? "-0.02em" : undefined }}>{t.s}</p>
            <div className="sm:text-right"><p className="text-[13px]">{t.n}</p><Mono>{t.v}</Mono></div>
          </div>
        ))}
        <div className="grid gap-2 py-5 sm:grid-cols-[1fr_150px] sm:items-baseline">
          <p className="s-eyebrow">India builds with Sarvam</p>
          <div className="sm:text-right"><p className="text-[13px]">Eyebrow</p><Mono>--fs-eyebrow · Geist</Mono></div>
        </div>
      </div>
    </div>
  );
}

/* ───────── Space ───────── */
export function SpacePreview() {
  const steps = ["0_5", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16", "20", "24", "32"];
  return (
    <div className="space-y-2.5">
      {steps.map((s) => (
        <div key={s} className="grid grid-cols-[110px_1fr] items-center gap-4">
          <Mono>--space-{s}</Mono>
          <div className="h-3 rounded-sm bg-[var(--sr-indigo-300)]" style={{ width: `var(--space-${s})` }} />
        </div>
      ))}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[["--section-gap", "128px between sections, desktop"], ["--section-gap-sm", "96px between sections, mobile"]].map(([v, d]) => (
          <div key={v} className="rounded-2xl border border-[var(--st)] p-4"><p className="text-[13px]">{d}</p><Mono>{v}</Mono></div>
        ))}
      </div>
    </div>
  );
}

/* ───────── Radius ───────── */
export function RadiusPreview() {
  const r = [["--radius-sm", "4 · code chips"], ["--radius-lg", "8 · menu rows"], ["--radius-xl", "12 · inputs"], ["--radius-2xl", "16 · cards"], ["--radius-3xl", "24 · panels, dialogs"], ["--radius-4xl", "32 · large panels"], ["--radius-pill", "pill · buttons, chips"]];
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {r.map(([v, d]) => (
        <div key={v}>
          <div className="h-24 border border-[var(--st)] bg-[var(--sf-secondary)]" style={{ borderRadius: `var(${v})` }} />
          <p className="mt-2 text-[12px]">{d}</p><Mono>{v}</Mono>
        </div>
      ))}
    </div>
  );
}

/* ───────── Borders and lines ───────── */
export function BordersPreview() {
  return (
    <div className="space-y-10">
    <div className="grid gap-6 sm:grid-cols-2">
      {[["1px solid var(--st)", "--st · default border on cards and inputs"], ["1px solid var(--st-secondary)", "--st-secondary · hairline dividers"], ["1px solid var(--stroke-track)", "--stroke-track · control tracks"], ["1px solid var(--slate)", "--slate · selected card"]].map(([b, d]) => (
        <div key={d}><div className="h-20 rounded-2xl bg-white" style={{ border: b }} /><p className="mt-2 text-[12px] text-[var(--tx-tertiary)]">{d}</p></div>
      ))}
      <div className="sm:col-span-2">
        <div className="h-px w-full" style={{ background: "var(--hairline-indigo)" }} />
        <p className="mt-2 text-[12px] text-[var(--tx-tertiary)]">--hairline-indigo · the eyebrow hairline</p>
      </div>
    </div>
    <SurfaceStack />
    </div>
  );
}

/* ───────── Surface stack ───────── */
function SurfaceStack() {
  return (
    <div>
      <p className="mb-3 text-[13px] font-medium text-[var(--tx)]">Surface stack · light theme</p>
      <div className="relative overflow-hidden rounded-3xl bg-[var(--sf)] p-6" style={{ backgroundImage: "var(--aura-hero)" }}>
        <span className="s-mono text-[11px] text-[var(--tx-tertiary)]">--sf #fcfcfc · page (aura glows sit behind, never on top of, text)</span>
        <div className="mt-3 rounded-2xl border border-[var(--st)] bg-[var(--sf-white)] p-5 shadow-[var(--shadow-card)]">
          <span className="s-mono text-[11px] text-[var(--tx-tertiary)]">--sf-white #ffffff · card (1px --st border or shadow-card)</span>
          <div className="mt-3 rounded-xl bg-[var(--sf-tertiary)] p-4"><span className="s-mono text-[11px] text-[var(--tx-tertiary)]">--sf-tertiary #f0f0f0 · wells, code headers, inner panels</span></div>
        </div>
        <div className="mt-4 rounded-2xl p-5" style={{ background: "var(--grad-night)" }}><span className="s-mono text-[11px] text-white/70">--grad-night · dark moments: white Season Mix text, centred star</span></div>
      </div>
    </div>
  );
}

/* ───────── Elevation ───────── */
export function ElevationPreview() {
  return <div className="space-y-10"><Shadows /><SurfaceStack /></div>;
}
function Shadows() {
  const s = ["--shadow-stroke-sm", "--shadow-elev-sm", "--shadow-elev-md", "--shadow-elev-lg", "--shadow-card", "--shadow-card-hover", "--shadow-glow-indigo", "--shadow-track"];
  return (
    <div className="grid grid-cols-2 gap-8 bg-[var(--sf)] p-2 sm:grid-cols-4">
      {s.map((v) => (
        <div key={v}><div className="h-24 rounded-2xl bg-white" style={{ boxShadow: `var(${v})` }} /><div className="mt-3"><Mono>{v}</Mono></div></div>
      ))}
    </div>
  );
}

/* ───────── Motion ───────── */
export function MotionPreview() {
  const [on, setOn] = useState(false);
  const eases = [["--ease-brand", "buttons, UI"], ["--ease-reveal", "section reveals"], ["--ease-standard", "everything else"]];
  return (
    <div className="space-y-6">
      <SButton size="sm" variant="secondary" onClick={() => setOn((o) => !o)}>{on ? "Reset" : "Play"}</SButton>
      {eases.map(([v, d]) => (
        <div key={v} className="grid grid-cols-[150px_1fr] items-center gap-4">
          <div><p className="text-[13px]">{d}</p><Mono>{v}</Mono></div>
          <div className="relative h-10 rounded-full bg-[var(--sf-secondary)]">
            <div className="absolute top-1 left-1 size-8 rounded-full bg-[var(--slate)]"
              style={{ left: on ? "calc(100% - 36px)" : "4px", transition: `left var(--dur-entrance) var(${v})` }} />
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-2">
        {["--dur-instant", "--dur-fast", "--dur-normal", "--dur-moderate", "--dur-slow", "--dur-entrance", "--dur-reveal"].map((d) => <span key={d} className="rounded-full bg-[var(--sf-secondary)] px-3 py-1"><Mono>{d}</Mono></span>)}
      </div>
    </div>
  );
}

/* ───────── Iconography ───────── */
export function IconographyPreview() {
  const set = (dir: string, files: string[], title: string) => (
    <div>
      <Label>{title}</Label>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {files.slice(0, 16).map((f) => (
          <div key={f} title={f} className="grid aspect-square place-items-center rounded-xl bg-[var(--sf-secondary)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/skill/${dir}/${f}`} alt="" className="size-7" />
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="space-y-8">
      {set("icons", assets.icons, "Line · default UI icons")}
      {set("icons-solid", assets.iconsSolid, "Solid · inside buttons and media controls")}
      {set("icons-depth", assets.iconsDepth, "Depth · feature cards and empty states")}
    </div>
  );
}

/* ───────── Grid ───────── */
export function GridPreview() {
  return (
    <div className="space-y-6">
      {[["Mobile · 4 columns · 88% width", 4], ["Tablet · 8 columns · 10/12", 8], ["Desktop · 12 columns · max 1400px", 12]].map(([n, c]) => (
        <div key={n as string}>
          <Label>{n}</Label>
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${c}, 1fr)` }}>
            {Array.from({ length: c as number }).map((_, i) => <div key={i} className="h-16 rounded-md bg-[var(--sr-indigo-100)]" />)}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────── Anti-slop ───────── */
export function AntiSlopPreview() {
  const pairs = [
    ["One calm Season Mix headline, sentence case", "BOLD ALL-CAPS GRADIENT HEADLINE 🚀"],
    ["Blue→orange light as soft glows", "Flat saturated brand-colour blocks"],
    ["Real photography or gateway glyphs", "Stock-AI people and robot hands"],
    ["Facts from FACTS.md", "Invented stats and placeholder logos"],
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pairs.map(([d, n]) => (
        <div key={d} className="overflow-hidden rounded-2xl border border-[var(--st)]">
          <div className="border-b border-[var(--st-secondary)] p-4"><p className="mb-1 text-[11px] [font-weight:var(--fw-medium)] text-[var(--sr-green-700)]">DO</p><p className="text-[14px]">{d}</p></div>
          <div className="bg-[var(--sf)] p-4"><p className="mb-1 text-[11px] [font-weight:var(--fw-medium)] text-[var(--sr-red-500)]">DON&apos;T</p><p className="text-[14px] text-[var(--tx-tertiary)] line-through">{n}</p></div>
        </div>
      ))}
    </div>
  );
}

/* ───────── Introduction ───────── */
export function IntroPreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl px-6 py-16 text-center" style={{ background: "var(--aura-hero), var(--sf)" }}>
      <p className="s-eyebrow">Sarvam design system</p>
      <h2 className="s-display mx-auto mt-4 max-w-md text-[44px]">AI for all from India</h2>
      <p className="mx-auto mt-3 max-w-sm text-[15px] text-[var(--tx-secondary)]">Tokens, foundations and components for everything branded Sarvam.</p>
      <div className="mt-8 flex justify-center gap-3">
        <SButton variant="hero-dark" size="lg">Start building</SButton>
        <SButton variant="hero-light" size="lg">Read the rules</SButton>
      </div>
    </div>
  );
}
