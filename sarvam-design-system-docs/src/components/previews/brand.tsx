"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useSpring } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Download04Icon, RefreshIcon, Cancel01Icon, ArrowRight01Icon, WorkflowCircle01Icon, SourceCodeIcon, NoteEditIcon, TextFontIcon, ServerStack01Icon, AiBrain01Icon, SmartPhone01Icon, Mic01Icon, VoiceIcon, DocumentValidationIcon, TranslateIcon, Book02Icon, Money03Icon, Plug01Icon, DiscordIcon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
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
        <div className="relative h-40 overflow-hidden rounded-2xl" style={{ background: "var(--grad-night)" }}><span className="absolute inset-x-0 bottom-6 mx-auto block size-7 bg-white [mask:url(/skill/motifs/star-bullet-indigo.svg)_center/contain_no-repeat]" aria-hidden /></div>
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
        <div className="absolute bottom-[-46%] left-1/2 aspect-square w-[140%] -translate-x-1/2 bg-white opacity-[.22] [mask:url(/skill/mandala/sarvam-mandala-outline.svg)_center/contain_no-repeat]" />
        <p className="s-display absolute inset-x-0 top-[14%] text-center text-[40px] leading-[1.1] text-[#1e2033]">Happy<br />New Year<br />2026</p>
        <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="absolute bottom-6 left-1/2 h-4 -translate-x-1/2 opacity-80" />
      </div>
      <div className="relative aspect-square overflow-hidden rounded-2xl" style={{ background: "linear-gradient(180deg,#fff 0%,#c3cbf7 38%,#6f7ee6 100%)" }}>
        <div className="absolute top-[22%] left-1/2 aspect-square w-[150%] -translate-x-1/2 bg-white opacity-35 [mask:url(/skill/mandala/sarvam-mandala-outline.svg)_center/contain_no-repeat]" />
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
const NAV_LINKS = ["Products", "Developers", "Resources", "Company"];
/** Navbar (skill: navbar.md). Responds to its container, so it is correct inside any frame:
 *  < ~1024px: 64px, wordmark 16px, "Log In" secondary + hamburger (menu sheet)
 *  ≥ ~1024px: 68px, wordmark 18px, centre links, "Log In" primary + "Contact Us" secondary
 *  Transparent over the hero; frosted with a hairline once the page scrolls. */
export function NavbarPreview() {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // desktop = a true 1280px frame, scaled to fit the docs column (so the ≥1024 layout really shows)
  const outer = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / 1280)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const frameW = view === "mobile" ? 375 : 1280;
  const z = view === "mobile" ? 1 : scale;
  return (
    <div className="space-y-4" ref={outer}>
      <div className="inline-flex rounded-full bg-[var(--sf-secondary)] p-1">
        {(["desktop", "mobile"] as const).map((v) => (
          <button key={v} onClick={() => { setView(v); setOpen(false); }} className={cn("relative rounded-full px-4 py-1.5 text-[13px] capitalize", view === v ? "text-[var(--tx)]" : "text-[var(--tx-tertiary)]")}>
            {view === v && <motion.span layoutId="nav-view" className="absolute inset-0 rounded-full bg-white shadow-[var(--shadow-seg-active)]" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />}
            <span className="relative">{v}</span>
          </button>
        ))}
      </div>
      <motion.div layout transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }} className="@container mx-auto overflow-hidden rounded-2xl border border-[var(--st)]" style={{ width: frameW, zoom: z }}>
        <div className="relative h-[360px] overflow-y-auto" onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 8)}>
          <header className={cn("sticky top-0 z-10 transition-[background,backdrop-filter,box-shadow] duration-300", scrolled ? "bg-[rgba(252,252,252,.8)] shadow-[0_1px_0_var(--st)] backdrop-blur-md" : "bg-transparent")}>
            <nav aria-label="Main" className="mx-auto flex h-16 w-[88%] items-center justify-between @[1000px]:h-[68px] @[1000px]:w-[83.333%]">
              <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-4 w-auto shrink-0 @[1000px]:h-[18px]" />
              <div className="hidden items-center gap-8 text-[15px] text-[var(--tx-secondary)] @[1000px]:flex">
                {NAV_LINKS.map((n) => <a key={n} href="#" className="transition-colors hover:text-[var(--tx)]">{n}</a>)}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <SButton size="sm" variant="secondary" className="@[1000px]:hidden">Log In</SButton>
                <SButton size="sm" className="hidden @[1000px]:inline-flex">Log In</SButton>
                <SButton size="sm" variant="secondary" className="hidden @[1000px]:inline-flex">Contact Us</SButton>
                <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-9 place-items-center rounded-full hover:bg-[var(--sf-secondary)] @[1000px]:hidden">
                  <span className="relative block h-3 w-4">
                    <motion.span className="absolute left-0 top-0 h-[1.5px] w-4 rounded bg-[var(--tx)]" animate={open ? { y: 5.25, rotate: 45 } : { y: 0, rotate: 0 }} />
                    <motion.span className="absolute left-0 top-[5.25px] h-[1.5px] w-4 rounded bg-[var(--tx)]" animate={{ opacity: open ? 0 : 1 }} />
                    <motion.span className="absolute left-0 top-[10.5px] h-[1.5px] w-4 rounded bg-[var(--tx)]" animate={open ? { y: -5.25, rotate: -45 } : { y: 0, rotate: 0 }} />
                  </span>
                </button>
              </div>
            </nav>
            <AnimatePresence>
              {open && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }} className="overflow-hidden bg-[var(--sf)] @[1000px]:hidden">
                  <div className="mx-auto w-[88%] pb-4">
                    {NAV_LINKS.map((n, i) => (
                      <motion.a key={n} href="#" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + i * 0.04 }} className="block border-b border-[var(--st-secondary)] py-3 text-[16px]">{n}</motion.a>
                    ))}
                    <SButton className="mt-4 w-full">Contact Us</SButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
          <div className="-mt-[68px] px-6 pt-28 pb-10 text-center" style={{ background: "var(--aura-hero), var(--sf)" }}>
            <p className="s-eyebrow">Scroll this frame</p>
            <h3 className="s-display mx-auto mt-3 max-w-sm text-[32px] leading-[1.1]">AI for all from India</h3>
            <p className="mx-auto mt-3 max-w-xs text-[14px] text-[var(--tx-tertiary)]">The nav is transparent over the hero and frosts once you scroll.</p>
          </div>
          <div className="space-y-3 px-6 py-8">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-10 rounded-xl bg-[var(--sf-secondary)]" />)}</div>
        </div>
      </motion.div>
    </div>
  );
}
export function FooterPreview() {
  const cols: [string, string[]][] = [["Products", ["Sarvam app", "Bulbul", "Saaras"]], ["Developers", ["API docs", "Playground", "Pricing"]], ["Company", ["About", "Careers", "Brand"]], ["Legal", ["Privacy", "Terms", "Security"]]];
  return (
    <footer className="overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)]">
      <div className="grid grid-cols-2 gap-8 p-6 sm:p-8 md:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-6" />
          <p className="mt-3 text-[13px] text-[var(--tx-tertiary)]">AI for all from India.</p>
        </div>
        <nav aria-label="Footer" className="contents">
          {cols.map(([h, l]) => (
            <div key={h}><p className="s-label mb-3 text-[12px] uppercase text-[var(--tx-tertiary)]">{h}</p>{l.map((x) => <a key={x} href="#" className="block py-1 text-[14px] text-[var(--tx-tertiary)] hover:text-[var(--tx)]">{x}</a>)}</div>
          ))}
        </nav>
      </div>
      {/* Giant wordmark: always the full footer width (aspect 202:32), filled with imagery, cropped by the bottom edge */}
      <div className="px-4 sm:px-6" aria-hidden>
        <div
          className="w-full translate-y-[14%]"
          style={{
            aspectRatio: "202 / 32",
            background: "var(--grad-sunrise)",
            WebkitMask: `url(${A}/logos/sarvam-wordmark-black.svg) center / 100% 100% no-repeat`,
            mask: `url(${A}/logos/sarvam-wordmark-black.svg) center / 100% 100% no-repeat`,
          }}
        />
      </div>
    </footer>
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
/** Scrolling marquee: grey logos drift left (~40px/s); hovering eases the scroll to a stop,
 *  and the hovered logo darkens and scales up slightly. Leaving resumes the drift. */
function ScrollingMarquee() {
  const x = useMotionValue(0);
  const track = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const speed = useSpring(1, { stiffness: 120, damping: 20 });
  useEffect(() => { speed.set(hovered ? 0 : 1); }, [hovered, speed]);
  useAnimationFrame((_, delta) => {
    const half = (track.current?.scrollWidth ?? 0) / 2;
    if (!half) return;
    let next = x.get() - (40 * delta / 1000) * speed.get();
    if (next <= -half) next += half;
    x.set(next);
  });
  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div ref={track} className="flex w-max items-center gap-14" style={{ x }}>
        {[...CUSTOMERS, ...CUSTOMERS].map((c, i) => (
          <motion.img key={i} src={`${A}/logos/customers/${c}.svg`} alt={i < CUSTOMERS.length ? c.replace(/-/g, " ") : ""} aria-hidden={i >= CUSTOMERS.length}
            className="h-7 w-auto grayscale" initial={{ opacity: 0.5, filter: "grayscale(1) brightness(1)" }}
            whileHover={{ opacity: 1, scale: 1.06, filter: "grayscale(1) brightness(0.35)" }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }} />
        ))}
      </motion.div>
    </div>
  );
}
/** Static logo row: no movement; hovering a logo reveals its original colour. */
function StaticLogos() {
  return (
    <div className="grid grid-cols-3 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
      {CUSTOMERS.map((c) => (
        <motion.img key={c} src={`${A}/logos/customers/${c}.svg`} alt={c.replace(/-/g, " ")} className="h-7 w-auto max-w-full"
          initial={{ opacity: 0.55, filter: "grayscale(1)" }}
          whileHover={{ opacity: 1, filter: "grayscale(0)", scale: 1.04 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }} />
      ))}
    </div>
  );
}
export function LogoMarqueePreview() {
  return (
    <div className="space-y-12">
      <div><p className="s-eyebrow mb-6 text-center">India builds with Sarvam</p><ScrollingMarquee />
        <p className="mt-3 text-center text-[12px] text-[var(--tx-tertiary)]">Scrolling · hover pauses the row; the logo darkens and grows slightly</p></div>
      <div><StaticLogos /><p className="mt-6 text-center text-[12px] text-[var(--tx-tertiary)]">Static · hover shows the logo&apos;s original colour</p></div>
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
          { bg: "var(--grad-night)", ink: "#fff", t: "Sarvam 105B is here", m: "outline", o: 0.18 },
          { bg: "linear-gradient(180deg,#c9d4fb 0%,#e9eefc 55%,#f3b45c 74%,#c8641d 100%)", ink: "#1e2033", t: "Happy Diwali", m: "outline", o: 0.22 },
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

/* ───────── Embed images ───────── */
export function EmbedImagesPreview() {
  const tiles = ["rose", "indigo", "saffron", "leaf"];
  const wides = ["wide-lilac-globe", "wide-spectrum-wave", "wide-dusk-mic", "wide-indigo-chat"];
  return (
    <div className="space-y-6">
      <div><Cap>Glass glyph tiles</Cap>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tiles.map((t, i) => (
            <motion.img key={t} src={`${A}/embeds/tile-${t}.png`} alt="" className="aspect-square w-full" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -3 }} />
          ))}
        </div>
      </div>
      <div><Cap>Wide embeds · OG, blog, docs cards</Cap>
        <div className="grid gap-4 sm:grid-cols-2">
          {wides.map((w, i) => (
            <motion.img key={w} src={`${A}/embeds/${w}.png`} alt="" className="w-full rounded-2xl" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} />
          ))}
        </div>
      </div>
      <p className="text-[12px] text-[var(--tx-tertiary)]">Generated with <span className="s-mono">tools/embed/embed.py</span>: palette + glyph or icon + size.</p>
    </div>
  );
}

/* ───────── Mega menu (skill: mega-menu.md) ───────── */
type MegaItem = { title: string; desc?: string; icon?: typeof Copy01Icon; glyph?: string; hue: string };
type MegaGroup = { label: string; cols?: 1 | 2; items: MegaItem[]; footer?: string };
type Mega = { id: string; label: string; groups: MegaGroup[]; feature: { title: string; caption: string; bg: string } };
const MEGA: Mega[] = [
  {
    id: "products", label: "Products",
    groups: [{ label: "Products", cols: 2, items: [
      { title: "Voice Agents", desc: "Conversational AI", glyph: "अ", hue: "var(--sr-indigo-800)" },
      { title: "Token Factory", desc: "Open model inference in India", icon: ServerStack01Icon, hue: "var(--sr-green-700)" },
      { title: "Work Agents", desc: "AI for Work", icon: WorkflowCircle01Icon, hue: "var(--sr-green-700)" },
      { title: "Model Training", desc: "Custom AI models", icon: AiBrain01Icon, hue: "var(--sr-indigo-700)" },
      { title: "Coding Agents", desc: "Ship high quality code", icon: SourceCodeIcon, hue: "var(--sr-orange-800)" },
      { title: "Sarvam Edge", desc: "On device AI", icon: SmartPhone01Icon, hue: "var(--tx)" },
      { title: "Content Studio", desc: "Content Transformation", icon: NoteEditIcon, hue: "var(--heritage-forest)" },
      { title: "Kivi", desc: "You talk, Kivi types", icon: Mic01Icon, hue: "var(--sr-green-600)" },
      { title: "Document AI", desc: "Digitise and extract docs", icon: TextFontIcon, hue: "var(--sr-orange-800)" },
    ] }],
    feature: { title: "Dashboard", caption: "Sarvam Dashboard", bg: "var(--grad-sunrise)" },
  },
  {
    id: "developers", label: "Developers",
    groups: [
      { label: "APIs", items: [
        { title: "Text to Speech", desc: "Bulbul V3", icon: VoiceIcon, hue: "var(--sr-orange-800)" },
        { title: "Speech to Text", desc: "Saaras V3", icon: Mic01Icon, hue: "var(--sr-indigo-700)" },
        { title: "Document Digitisation", desc: "Sarvam Vision", icon: DocumentValidationIcon, hue: "var(--sr-red-600)" },
        { title: "Translation", desc: "Mayura", icon: TranslateIcon, hue: "var(--sr-pink-700)" },
      ], footer: "View all models" },
      { label: "Resources", items: [
        { title: "Documentation", icon: Book02Icon, hue: "var(--sr-green-800)" },
        { title: "API Pricing", icon: Money03Icon, hue: "var(--sr-red-600)" },
        { title: "Integrations", icon: Plug01Icon, hue: "var(--sr-green-700)" },
        { title: "Join Discord", icon: DiscordIcon, hue: "var(--tx-secondary)" },
      ] },
    ],
    feature: { title: "Startup Program", caption: "Sarvam Startup Program", bg: "radial-gradient(80% 90% at 50% 70%, #6f74dd 0%, transparent 70%), linear-gradient(180deg, #b7c3f6 0%, #8a92e8 55%, #6b6fd6 100%)" },
  },
];

function MegaRow({ it, i }: { it: MegaItem; i: number }) {
  return (
    <motion.a href="#" onClick={(e) => e.preventDefault()} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: 0.04 + i * 0.03 }}
      className="group -mx-2 flex items-center gap-4 rounded-xl px-2 py-1 transition-colors hover:bg-[var(--sf-secondary)]">
      <span className="grid size-12 shrink-0 place-items-center rounded-[10px] border border-[var(--st)] bg-white transition-transform duration-200 group-hover:-translate-y-px" style={{ color: it.hue }}>
        {it.glyph ? <span className="text-[22px] leading-none">{it.glyph}</span> : it.icon && <HugeiconsIcon icon={it.icon} size={22} strokeWidth={1.6} />}
      </span>
      <span className="min-w-0">
        <span className="block text-[18px] leading-6 text-[var(--tx)]">{it.title}</span>
        {it.desc && <span className="block truncate text-[15px] text-[var(--tx-tertiary)]">{it.desc}</span>}
      </span>
    </motion.a>
  );
}

function MegaPanel({ m }: { m: Mega }) {
  return (
    <div className="mx-auto grid w-[83.333%] grid-cols-12 gap-10 pt-12 pb-14">
      <div className={cn("col-span-8 grid gap-10", m.groups.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
        {m.groups.map((g) => (
          <div key={g.label}>
            <p className="mb-6 font-[family-name:var(--font-eyebrow)] text-[12px] tracking-[1px] uppercase text-[var(--tx-secondary)] [font-weight:500]">{g.label}</p>
            <div className={cn("grid gap-x-10 gap-y-4", g.cols === 2 ? "grid-cols-2" : "grid-cols-1")}>
              {g.items.map((it, i) => <MegaRow key={it.title} it={it} i={i} />)}
            </div>
            {g.footer && <a href="#" onClick={(e) => e.preventDefault()} className="mt-8 inline-block pl-2 text-[16px] text-[var(--sr-indigo-800)] hover:underline">{g.footer}</a>}
          </div>
        ))}
      </div>
      <a href="#" onClick={(e) => e.preventDefault()} className="group col-span-4 self-start rounded-2xl border border-[var(--st-secondary)] bg-white p-2">
        <span className="grid aspect-video place-items-center overflow-hidden rounded-xl text-center" style={{ background: m.feature.bg }}>
          <motion.span className="px-6 text-[32px] leading-tight text-white [font-weight:var(--fw-medium)]" whileHover={{ scale: 1.03 }}>{m.feature.title}</motion.span>
        </span>
        <span className="flex items-center justify-between px-2 pt-3 pb-1 text-[16px] text-[var(--tx)]">
          {m.feature.caption}
          <span className="text-[var(--tx-tertiary)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><HugeiconsIcon icon={ArrowUpRight01Icon} size={16} /></span>
        </span>
      </a>
    </div>
  );
}

export function MegaMenuPreview() {
  const [open, setOpen] = useState<string | null>(null);
  const closeT = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openT = useRef<ReturnType<typeof setTimeout> | null>(null);
  const outer = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = outer.current; if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / 1280)));
    ro.observe(el); return () => ro.disconnect();
  }, []);
  const hoverOpen = (id: string) => {
    if (closeT.current) clearTimeout(closeT.current);
    if (openT.current) clearTimeout(openT.current);
    openT.current = setTimeout(() => setOpen(id), open ? 0 : 80); // intent delay only for the first open
  };
  const hoverClose = () => {
    if (openT.current) clearTimeout(openT.current);
    closeT.current = setTimeout(() => setOpen(null), 150);
  };
  const keep = () => { if (closeT.current) clearTimeout(closeT.current); };
  const menu = MEGA.find((m) => m.id === open);
  return (
    <div ref={outer} className="space-y-3">
      <p className="text-[12px] text-[var(--tx-tertiary)]">Hover <b>Products</b> or <b>Developers</b> (or Tab to them and press Enter). Desktop frame, 1280px wide, scaled to fit.</p>
      <div className="overflow-hidden rounded-2xl border border-[var(--st)]" style={{ width: 1280, zoom: scale }}
        onKeyDown={(e) => { if (e.key === "Escape") setOpen(null); }}>
        <div className="relative h-[660px] bg-[var(--sf)]">
          <header className="relative z-20 border-b border-[var(--st)] bg-white" onMouseLeave={hoverClose} onMouseEnter={keep}>
            <nav aria-label="Main" className="mx-auto flex h-[68px] w-[83.333%] items-center justify-between">
              <img src={`${A}/logos/sarvam-wordmark-black.svg`} alt="sarvam" className="h-[22px] w-auto" />
              <div className="flex items-center gap-2 text-[16px]">
                {[...MEGA.map((m) => m.label), "Resources", "Company"].map((l) => {
                  const m = MEGA.find((x) => x.label === l);
                  return (
                    <button key={l} aria-expanded={m ? open === m.id : undefined} aria-controls={m ? `mega-${m.id}` : undefined}
                      onMouseEnter={() => (m ? hoverOpen(m.id) : hoverClose())}
                      onClick={() => m && setOpen(open === m.id ? null : m.id)}
                      className={cn("rounded-full px-3 py-1.5 transition-colors", m && open === m.id ? "text-[var(--tx)]" : "text-[var(--tx-secondary)] hover:text-[var(--tx)]")}>{l}</button>
                  );
                })}
              </div>
              <div className="flex gap-2"><SButton size="md">Log In</SButton><SButton size="md" variant="secondary">Contact Us</SButton></div>
            </nav>
            <AnimatePresence>
              {menu && (
                <motion.div id={`mega-${menu.id}`} role="region" aria-label={`${menu.label} menu`} key="panel"
                  initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }} className="absolute inset-x-0 top-full overflow-hidden border-b border-[var(--st)] bg-white">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={menu.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>
                      <MegaPanel m={menu} />
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
          {/* page behind */}
          <div className="mx-auto w-[83.333%] pt-16 text-center">
            <p className="s-eyebrow">India&apos;s Sovereign AI Platform</p>
            <p className="s-display mt-4 text-[56px] leading-[1.05]">AI for all from India</p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">{[0, 1, 2].map((i) => <div key={i} className="h-36 rounded-2xl bg-white shadow-[var(--shadow-card)]" />)}</div>
          </div>
          <AnimatePresence>
            {menu && <motion.div aria-hidden className="absolute inset-0 top-[68px] z-10 bg-[rgba(20,20,20,.18)] backdrop-blur-[4px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={() => setOpen(null)} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ───────── Banner decisions ───────── */
export function BannerDecisionsPreview() {
  const hues: [string, string][] = [["Voice / product core", "linear-gradient(135deg,#3d4bb8,#f38858)"], ["Telephony launch", "linear-gradient(160deg,#c43d2b,#f9d5e1)"], ["Make it easy (duotone)", "linear-gradient(160deg,#263d0e,#c8e4b0)"], ["Cost / scale", "radial-gradient(60% 60% at 50% 70%,#f9bb9e55,transparent),linear-gradient(180deg,#14142b,#3d4bb8)"], ["Webinar / story", "radial-gradient(60% 60% at 50% 50%,#fff,#e3f1d8)"], ["Events / numbers", "linear-gradient(135deg,#a7c0f1,#f38858 55%,#e6651b)"]];
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {[["Ad", "Exactly one slate CTA · rebuilt UI proof · cursor on the control being used", true], ["Post", "No CTA · one hero object · wordmark → statement → visual", false]].map(([t, d, ad]) => (
          <div key={t as string} className="rounded-2xl border border-[var(--st)] bg-white p-5">
            <p className="s-eyebrow">Is there a CTA? {ad ? "Yes" : "No"}</p>
            <p className="s-display mt-2 text-[28px]">{t as string}</p>
            <p className="mt-1 text-[13px] text-[var(--tx-tertiary)]">{d as string}</p>
            {ad ? <SButton size="sm" className="mt-4">Get started</SButton> : <div className="mt-4 h-9" />}
          </div>
        ))}
      </div>
      <div><Cap>Hue story by subject (rotate per message, never invent)</Cap>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {hues.map(([n, bg]) => <div key={n}><div className="h-20 rounded-xl" style={{ background: bg }} /><p className="mt-1.5 text-[12px] text-[var(--tx-tertiary)]">{n}</p></div>)}
        </div>
      </div>
    </div>
  );
}
