"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Download04Icon, RefreshIcon, Cancel01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { SButton } from "@/components/sarvam/button";
import { cn } from "@/lib/utils";

const A = "/skill";
const Cap = ({ children }: { children: React.ReactNode }) => <p className="mb-3 text-[13px] [font-weight:var(--fw-medium)]">{children}</p>;
const Mono = ({ children }: { children: React.ReactNode }) => <span className="s-mono text-[11px] text-[var(--tx-tertiary)]">{children}</span>;

/* ───────── Brand ───────── */
export function BrandEssencePreview() {
  const pillars = [["Sovereign", "Built in India, for India's languages and people."], ["Accessible", "AI for all, in the language people think in."], ["Rooted", "Indian identity through structure, not costume."], ["Calm", "Big and quiet beats small and loud."]];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pillars.map(([t, d], i) => (
        <div key={t} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
          <img src={`${A}/motifs/star-bullet-${["indigo", "orange", "green", "pink"][i]}.svg`} alt="" className="size-6" />
          <p className="s-display mt-5 text-[24px]">{t}</p>
          <p className="mt-1 text-[14px] text-[var(--tx-tertiary)]">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function LogoUsagePreview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid h-40 place-items-center rounded-2xl border border-[var(--st)] bg-white"><img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-8" /></div>
        <div className="grid h-40 place-items-center rounded-2xl bg-[var(--black)]"><img src={`${A}/logos/sarvam-wordmark-white.svg`} alt="sarvam" className="h-8" /></div>
        <div className="grid h-40 place-items-center rounded-2xl border border-[var(--st)] bg-white"><img src={`${A}/logos/sarvam-logo-black.svg`} alt="Sarvam logomark" className="h-16" /></div>
        <div className="grid h-40 place-items-center rounded-2xl" style={{ background: "var(--grad-cta-panel)" }}><img src={`${A}/logos/sarvam-logo-white.svg`} alt="Sarvam logomark" className="h-16" /></div>
      </div>
      <div className="flex items-center justify-center gap-4 rounded-2xl border border-[var(--st)] bg-white py-8">
        <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-6" /><span className="text-[var(--tx-tertiary)]">✦</span><span className="text-[20px] [font-weight:var(--fw-medium)]">Partner</span>
      </div>
      <p className="text-center text-[12px] text-[var(--tx-tertiary)]">Co-brand lockup: Sarvam first, a ✦ divider, then the partner. Only when co-branding is asked for.</p>
    </div>
  );
}

export function MotifsPreview() {
  const glyphs = Array.from({ length: 16 }, (_, i) => `model-${String(i + 1).padStart(2, "0")}.svg`);
  return (
    <div className="space-y-8">
      <div><Cap>Gateway glyphs · 16 model glyphs</Cap>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">{glyphs.map((g) => <div key={g} className="grid aspect-square place-items-center rounded-xl bg-white shadow-[var(--shadow-stroke-sm)]"><img src={`${A}/glyphs/${g}`} alt="" className="size-10" /></div>)}</div></div>
      <div><Cap>Voice motifs</Cap>
        <div className="grid grid-cols-3 gap-3">{[1, 2, 3].map((n) => <div key={n} className="grid h-28 place-items-center rounded-xl bg-white shadow-[var(--shadow-stroke-sm)]"><img src={`${A}/glyphs/voice-motif-0${n}.svg`} alt="" className="h-16" /></div>)}</div></div>
      <div><Cap>Gateway frames and ornaments</Cap>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["gateway-arch.svg", "gateway-concentric-indigo.svg", "gateway-concentric-saffron.svg", "gateway-concentric-leaf.svg"].map((m) => <div key={m} className="overflow-hidden rounded-xl bg-white shadow-[var(--shadow-stroke-sm)]"><img src={`${A}/motifs/${m}`} alt="" className="h-36 w-full object-cover" /></div>)}
        </div>
        <img src={`${A}/motifs/ornament-divider.svg`} alt="" className="mx-auto mt-6 h-6" />
      </div>
    </div>
  );
}

export function GradientsPreview() {
  return (
    <div className="space-y-6">
      <div className="relative h-64 overflow-hidden rounded-3xl" style={{ background: "var(--aura-hero), var(--sf)" }}>
        <div className="absolute inset-x-0 bottom-10 text-center"><p className="s-eyebrow">Hero aura</p><p className="s-display mt-2 text-[32px]">Orange core, periwinkle wings</p></div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="h-40 rounded-2xl" style={{ background: "var(--grad-spectrum)" }} />
        <div className="relative h-40 overflow-hidden rounded-2xl" style={{ background: "var(--grad-night)" }}><span className="absolute inset-x-0 bottom-6 text-center text-[24px] text-white">✦</span></div>
        <div className="h-40 rounded-2xl" style={{ background: "var(--grad-stats-band)" }} />
      </div>
      <div className="grid grid-cols-4 gap-3">{["blue", "orange", "green", "pink"].map((h) => <div key={h} className="space-y-2">{["", "-medium", "-light"].map((l) => <div key={l} className="h-12 rounded-xl" style={{ background: `var(--grad-${h}${l})` }} />)}<Mono>--grad-{h}</Mono></div>)}</div>
    </div>
  );
}

export function SoftGlowPreview() {
  const glows = ["sr-spectrum", "sr-dawn", "sr-meadow", "lilac-hill", "peach-whisper", "honey-dome", "rose-ramp", "sage-valley", "horizon"];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {glows.map((g) => (
        <div key={g} className="relative h-44 overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)]">
          <img src={`${A}/glows/${g}.svg`} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="relative p-5"><p className="text-[15px] [font-weight:var(--fw-medium)]">{g.replace(/-/g, " ")}</p><Mono>glows/{g}.svg</Mono></div>
        </div>
      ))}
    </div>
  );
}

export function GlyphDepthPreview() {
  const g = ["gateway-periwinkle-pink", "gateway-indigo-dusk", "saffron-luminous", "sindoor-marigold", "deep-indigo-violet", "blush-coral", "forest-gold", "leaf-sky", "marigold-cream", "rose-shadow", "sky-white", "spectrum-arch"];
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
      {g.map((n) => <div key={n} className="text-center"><div className="grid aspect-square place-items-center rounded-2xl bg-[var(--sf-secondary)]"><img src={`${A}/glyphs-depth/${n}.svg`} alt="" className="size-[70%]" /></div><p className="mt-2 truncate text-[11px] text-[var(--tx-tertiary)]">{n.replace(/-/g, " ")}</p></div>)}
    </div>
  );
}

export function MandalaPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl" style={{ background: "linear-gradient(180deg,#c9d4fb 0%,#e9eefc 55%,#f3b45c 74%,#c8641d 100%)" }}>
        <div className="absolute bottom-[-46%] left-1/2 aspect-square w-[140%] -translate-x-1/2 bg-white opacity-[.12] [mask:url(/skill/mandala/sarvam-mandala-mark.svg)_center/contain_no-repeat]" />
        <p className="s-display absolute inset-x-0 top-[14%] text-center text-[40px] leading-[1.1] text-[#1e2033]">Happy<br />New Year<br />2026</p>
        <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="absolute bottom-6 left-1/2 h-4 -translate-x-1/2 opacity-80" />
      </div>
      <div className="relative aspect-square overflow-hidden rounded-2xl" style={{ background: "linear-gradient(180deg,#fff 0%,#c3cbf7 38%,#6f7ee6 100%)" }}>
        <div className="absolute top-[22%] left-1/2 aspect-square w-[150%] -translate-x-1/2 bg-white opacity-50 [mask:url(/skill/mandala/sarvam-mandala-outline.svg)_center/contain_no-repeat]" />
        <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="absolute top-6 left-1/2 h-4 -translate-x-1/2" />
        <p className="absolute inset-x-0 top-[13%] text-center text-[22px] leading-[1.2] text-[var(--tx)]">A Voice Agent with all<br />the little human things</p>
        {[["Interruptions", "38%", "20%"], ["Natural", "50%", "58%"], ["Pauses", "68%", "14%"]].map(([t, top, left]) => <span key={t} className="absolute rounded-full bg-white/90 px-3 py-1 text-[12px] shadow-[var(--shadow-elev-sm)]" style={{ top, left }}>{t}</span>)}
      </div>
      <p className="text-[12px] text-[var(--tx-tertiary)] sm:col-span-2">Big, cropped, tone-on-tone. Optional, 1–2 places only. Use it where you would otherwise draw ripples or circles.</p>
    </div>
  );
}

export function ImageryPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="relative h-56 overflow-hidden rounded-2xl" style={{ background: "var(--grad-sunrise)" }}><img src={`${A}/glyphs-depth/gateway-periwinkle-pink.svg`} alt="" className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2" /></div>
      <div className="relative h-56 overflow-hidden rounded-2xl" style={{ background: "var(--grad-spectrum-light)" }}><img src={`${A}/motifs/gateway-arch-indigo.svg`} alt="" className="absolute inset-x-6 bottom-0 h-48 w-[calc(100%-48px)] object-contain object-bottom" /></div>
      <div className="relative h-56 overflow-hidden rounded-2xl bg-[var(--heritage-forest)]"><img src={`${A}/glyphs-depth/forest-gold.svg`} alt="" className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2" /></div>
      <p className="text-[12px] text-[var(--tx-tertiary)] sm:col-span-3">No real photo? Use a gateway glyph composition or a gradient aura. Never stock-AI people.</p>
    </div>
  );
}

function CopyPairs({ pairs }: { pairs: [string, string][] }) {
  return (
    <div className="space-y-3">
      {pairs.map(([d, n]) => (
        <div key={d} className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--st)] bg-white p-4"><p className="mb-1 text-[11px] text-[var(--sr-green-700)]">WRITE</p><p className="text-[15px]">{d}</p></div>
          <div className="rounded-2xl bg-[var(--sf-secondary)] p-4"><p className="mb-1 text-[11px] text-[var(--sr-red-500)]">NOT</p><p className="text-[15px] text-[var(--tx-tertiary)]">{n}</p></div>
        </div>
      ))}
    </div>
  );
}
export const VoicePreview = () => <CopyPairs pairs={[["Transcribe calls in 22 Indian languages.", "Revolutionising communication with cutting-edge AI 🚀"], ["Get your API key", "Unlock the power now!"], ["Built in India, for India", "Proudly desi AI 🇮🇳🙏"]]} />;
export const CopywritingPreview = () => (
  <div className="space-y-6">
    <div className="rounded-3xl bg-white p-8 text-center shadow-[var(--shadow-card)]">
      <span className="inline-flex h-7 items-center gap-2 rounded-full bg-white px-3 text-[12px] shadow-[var(--shadow-glow-indigo)]">1 · Badge</span>
      <p className="s-display mt-4 text-[36px]">2 · Speech to text for India</p>
      <p className="mx-auto mt-2 max-w-md text-[15px] text-[var(--tx-tertiary)]">3 · Sub: what it does, for whom, in ≤ 20 words.</p>
      <div className="mt-6 flex justify-center gap-3"><SButton variant="hero-dark">4 · Primary CTA</SButton><SButton variant="hero-light">Second CTA</SButton></div>
    </div>
    <p className="text-center text-[12px] text-[var(--tx-tertiary)]">The 4-element hero. h1 2–7 words. Nothing else above the fold.</p>
  </div>
);

/* ───────── Sarvam components ───────── */
export function IconButtonPreview() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {[[RefreshIcon, "Reset"], [Download04Icon, "Download"], [Copy01Icon, "Copy"], [Cancel01Icon, "Close"]].map(([ic, l]) => (
        <button key={l as string} aria-label={l as string} className="grid size-10 place-items-center rounded-full bg-[var(--sf-secondary)] transition-transform hover:bg-white hover:shadow-[inset_0_0_0_1px_var(--st)] active:scale-95"><HugeiconsIcon icon={ic as typeof Copy01Icon} size={16} /></button>
      ))}
      <button aria-label="Next" className="s-glow grid size-10 place-items-center rounded-full bg-[var(--slate)] text-white shadow-[var(--shadow-btn-dark)]"><HugeiconsIcon icon={ArrowRight01Icon} size={16} /></button>
    </div>
  );
}
export function NavbarPreview() {
  return (
    <div className="overflow-hidden rounded-2xl" style={{ background: "var(--aura-hero), var(--sf)" }}>
      <div className="m-3 flex h-14 items-center justify-between rounded-full bg-white/70 px-5 backdrop-blur shadow-[var(--shadow-elev-sm)]">
        <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-5" />
        <nav className="hidden gap-6 text-[14px] sm:flex">{["Products", "Developers", "Enterprise", "Company"].map((n) => <a key={n} href="#" className="text-[var(--tx-secondary)] hover:text-[var(--tx)]">{n}</a>)}</nav>
        <SButton size="sm">Get started</SButton>
      </div>
      <div className="h-40" />
    </div>
  );
}
export function FooterPreview() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white p-8 shadow-[var(--shadow-card)]">
      <div className="grid gap-8 sm:grid-cols-4">
        <div><img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-5" /><p className="mt-3 text-[13px] text-[var(--tx-tertiary)]">AI for all from India.</p></div>
        {[["Products", ["Sarvam app", "Bulbul", "Saaras"]], ["Developers", ["API docs", "Playground", "Pricing"]], ["Company", ["About", "Careers", "Brand"]]].map(([h, l]) => (
          <div key={h as string}><p className="s-label mb-3 text-[12px] uppercase text-[var(--tx-tertiary)]">{h as string}</p>{(l as string[]).map((x) => <p key={x} className="py-1 text-[14px]">{x}</p>)}</div>
        ))}
      </div>
      <p className="s-display mt-10 select-none bg-clip-text text-center text-[96px] leading-none text-transparent" style={{ backgroundImage: "var(--grad-spectrum)" }}>sarvam</p>
    </div>
  );
}
export function EyebrowPreview() {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <span className="h-px w-16" style={{ background: "linear-gradient(to left, #6a88e2, transparent)" }} />
      <span className="s-eyebrow">India builds with Sarvam</span>
      <span className="h-px w-16" style={{ background: "linear-gradient(to right, #6a88e2, transparent)" }} />
    </div>
  );
}
export function SectionHeaderPreview() {
  return <div className="py-4 text-center"><p className="s-eyebrow">Models</p><h3 className="s-display mt-3 text-[36px]">Built for India&apos;s languages</h3><p className="mx-auto mt-2 max-w-md text-[16px] text-[var(--tx-tertiary)]">Speech, text and vision models trained on Indian data.</p></div>;
}
export function PillarListPreview() {
  return (
    <ul className="mx-auto max-w-md space-y-4">
      {[["indigo", "Sovereign by design", "Trained and served in India."], ["orange", "Every Indian language", "22 languages, code-mixed speech."], ["green", "Enterprise ready", "Private deployment and SLAs."]].map(([c, t, d]) => (
        <li key={t} className="flex gap-3"><img src={`${A}/motifs/star-bullet-${c}.svg`} alt="" className="mt-1 size-5" /><div><p className="text-[16px] [font-weight:var(--fw-medium)]">{t}</p><p className="text-[14px] text-[var(--tx-tertiary)]">{d}</p></div></li>
      ))}
    </ul>
  );
}
export function TestimonialPreview() {
  return (
    <figure className="mx-auto max-w-lg rounded-2xl bg-white p-8 shadow-[var(--shadow-card)]">
      <img src={`${A}/logos/customers/tata-capital.svg`} alt="Tata Capital" className="h-6" />
      <blockquote className="s-display mt-6 text-[22px] leading-[1.35]">&ldquo;Quote from FACTS.md goes here. Never invent a testimonial.&rdquo;</blockquote>
      <figcaption className="mt-6 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[var(--sr-indigo-100)] text-[12px] text-[var(--sr-indigo-900)]">NM</span><span><span className="block text-[14px] [font-weight:var(--fw-medium)]">Name</span><span className="block text-[13px] text-[var(--tx-tertiary)]">Role, Company</span></span></figcaption>
    </figure>
  );
}
const CUSTOMERS = ["axis-bank", "lic", "infosys", "sbi-life", "tata-capital", "idfc", "urban-company", "nabard", "cred", "mahindra-finance", "skill-india", "india-mart"];
export function LogoMarqueePreview() {
  return (
    <div>
      <p className="s-eyebrow mb-6 text-center">India builds with Sarvam</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_15%,#000_85%,transparent)]">
        <motion.div className="flex w-max gap-14" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
          {[...CUSTOMERS, ...CUSTOMERS].map((c, i) => <img key={i} src={`${A}/logos/customers/${c}.svg`} alt={c.replace(/-/g, " ")} className="h-7 w-auto opacity-70 grayscale transition-[filter,opacity] hover:opacity-100 hover:grayscale-0" />)}
        </motion.div>
      </div>
    </div>
  );
}
export function IntegrationCardPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[["LiveKit", "Real-time voice agents with Saaras and Bulbul.", ["Voice", "Realtime"], "--sr-indigo-100"], ["Twilio", "Answer phone calls in any Indian language.", ["Telephony"], "--sr-orange-100"]].map(([n, d, tags, bg]) => (
        <div key={n as string} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
          <div className="grid size-12 place-items-center rounded-xl text-[18px] [font-weight:var(--fw-medium)]" style={{ background: `var(${bg})` }}>{(n as string)[0]}</div>
          <p className="mt-5 text-[18px] [font-weight:var(--fw-medium)]">{n as string}</p>
          <p className="mt-1 text-[14px] text-[var(--tx-tertiary)]">{d as string}</p>
          <div className="mt-4 flex gap-2">{(tags as string[]).map((t) => <span key={t} className="rounded-full bg-[var(--sf-secondary)] px-2.5 py-0.5 text-[12px]">{t}</span>)}</div>
        </div>
      ))}
    </div>
  );
}
export function GlowPanelPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {[["sr-dawn", "Text to speech"], ["sr-meadow", "Translation"], ["lilac-hill", "Speech to text"]].map(([g, t]) => (
        <div key={g} className="relative h-52 overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)]">
          <img src={`${A}/glows/${g}.svg`} alt="" className="absolute inset-x-0 bottom-0 h-full w-full object-cover" />
          <p className="relative p-6 text-[18px] [font-weight:var(--fw-medium)]">{t}</p>
        </div>
      ))}
    </div>
  );
}

/* ───────── Formats ───────── */
export function SocialBannersPreview() {
  const [fmt, setFmt] = useState<"square" | "portrait" | "linkedin">("square");
  const ratio = { square: "1/1", portrait: "4/5", linkedin: "1200/627" }[fmt];
  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-full bg-[var(--sf-secondary)] p-1">{(["square", "portrait", "linkedin"] as const).map((f) => <button key={f} onClick={() => setFmt(f)} className={cn("rounded-full px-4 py-1.5 text-[13px]", fmt === f ? "bg-white shadow-[var(--shadow-seg-active)]" : "text-[var(--tx-tertiary)]")}>{f === "square" ? "Meta 1080²" : f === "portrait" ? "Meta 1080×1350" : "LinkedIn 1200×627"}</button>)}</div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { bg: "var(--grad-night)", ink: "#fff", t: "Sarvam 105B is here", m: "outline", o: 0.25 },
          { bg: "linear-gradient(180deg,#c9d4fb 0%,#e9eefc 55%,#f3b45c 74%,#c8641d 100%)", ink: "#1e2033", t: "Happy Diwali", m: "mark", o: 0.12 },
          { bg: "var(--aura-hero), var(--sf)", ink: "#1f1f1f", t: "Speech to text in 22 languages", m: "", o: 0 },
        ].map((b, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl" style={{ background: b.bg, aspectRatio: ratio }}>
            {b.m && <div className="absolute bottom-[-50%] left-1/2 aspect-square w-[150%] -translate-x-1/2 bg-white" style={{ opacity: b.o, mask: `url(/skill/mandala/sarvam-mandala-${b.m}.svg) center/contain no-repeat`, WebkitMask: `url(/skill/mandala/sarvam-mandala-${b.m}.svg) center/contain no-repeat` }} />}
            <img src={`${A}/logos/sarvam-wordmark-${b.ink === "#fff" ? "white" : "black"}.svg`} alt="sarvam" className="absolute top-4 left-4 h-3" />
            <p className="s-display absolute inset-x-4 top-[30%] text-center text-[22px] leading-[1.15]" style={{ color: b.ink }}>{b.t}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function HeroLayoutsPreview() {
  const L = [["Aura Statement", "c"], ["Demo Stage", "demo"], ["Prompt Bar", "prompt"], ["Docs Left", "left"], ["Editorial Split", "split"], ["Gateway Frame", "gate"], ["Manifesto", "c"], ["Benchmark", "bench"], ["Visual Top", "top"], ["Side Visual", "split"]];
  const bar = "h-1.5 rounded-full bg-[var(--sr-grey-300)]";
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {L.map(([n, k]) => (
        <div key={n}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--st)] bg-white p-3" style={k === "c" || k === "gate" ? { background: "var(--aura-hero), #fff" } : undefined}>
            {k === "split" || k === "left" ? (
              <div className="grid h-full grid-cols-2 gap-2"><div className="space-y-1.5 pt-4"><div className={cn(bar, "w-4/5 bg-[var(--tx)]")} /><div className={cn(bar, "w-3/5")} /><div className="mt-2 h-3 w-10 rounded-full bg-[var(--slate)]" /></div><div className="rounded-md bg-[var(--sr-indigo-100)]" /></div>
            ) : (
              <div className="flex h-full flex-col items-center gap-1.5 pt-3">
                {k === "top" && <div className="mb-1 h-8 w-full rounded-md bg-[var(--sr-orange-100)]" />}
                {k === "gate" && <img src={`${A}/motifs/gateway-arch.svg`} alt="" className="absolute inset-x-6 top-1 h-[95%] w-[calc(100%-48px)] object-contain opacity-30" />}
                <div className={cn(bar, "w-3/4 bg-[var(--tx)]")} /><div className={cn(bar, "w-1/2")} />
                {k === "prompt" ? <div className="mt-2 h-4 w-4/5 rounded-full border border-[var(--st)]" /> : <div className="mt-2 h-3 w-10 rounded-full bg-[var(--slate)]" />}
                {k === "demo" && <div className="mt-2 h-8 w-4/5 rounded-md bg-[var(--sr-indigo-100)]" />}
                {k === "bench" && <div className="mt-2 flex h-8 w-3/5 items-end gap-1">{[40, 70, 100, 55].map((h, i) => <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i === 2 ? "var(--sr-indigo-500)" : "var(--sr-grey-300)" }} />)}</div>}
              </div>
            )}
          </div>
          <p className="mt-2 text-[12px]">{n}</p>
        </div>
      ))}
    </div>
  );
}
export function WebPagesPreview() {
  const rows = ["Nav", "Hero · 4 elements", "Social proof bar", "Product demo", "Feature explainer", "Use cases", "Developer · code", "Dark CTA panel", "Footer"];
  return (
    <ol className="mx-auto max-w-md space-y-2">
      {rows.map((r, i) => <li key={r} className={cn("flex items-center gap-3 rounded-xl px-4 py-3 text-[14px]", i === 1 ? "text-[var(--tx)]" : "", i === 7 ? "text-white" : "bg-white shadow-[var(--shadow-stroke-sm)]")} style={i === 1 ? { background: "var(--aura-hero), #fff" } : i === 7 ? { background: "var(--grad-cta-panel)" } : undefined}><span className="s-mono w-5 text-[12px] opacity-60">{String(i + 1).padStart(2, "0")}</span>{r}</li>)}
    </ol>
  );
}
