"use client";
import { useEffect, useRef, useState } from "react";

const A = "/assets";
const Mi = ({ icon }: { icon: string }) => <i className="mi" style={{ ["--i" as string]: `url(${A}/icons/${icon}.svg)` }} />;
const Play = () => <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z" fill="#fff" /></svg>;
const CopyIcon = ({ done }: { done?: boolean }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="13" height="13" rx="3" /><path d="M16 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h2" />{done && <path d="m11.5 14.5 2 2 4-4.5" />}</svg>;
const L = ({ children }: { children: React.ReactNode }) => <div className="pv-label">{children}</div>;

function Seg({ items }: { items: string[] }) {
  const [v, setV] = useState(items[0]);
  return <div className="seg" role="tablist">{items.map(i => <button key={i} role="tab" aria-selected={v === i} className={v === i ? "on" : ""} onClick={() => setV(i)}>{i}</button>)}</div>;
}
function CopyDemo() {
  const [d, setD] = useState(false);
  return <button className={`copy${d ? " done" : ""}`} onClick={() => { setD(true); setTimeout(() => setD(false), 2000); }}><CopyIcon done={d} /><span aria-live="polite">{d ? "Copied" : "Copy"}</span></button>;
}
function Lang() {
  return <button className="lang"><span lang="hi" style={{ fontFamily: "'Noto Sans Devanagari','Nirmala UI',sans-serif" }}>हिन्दी</span> Hindi
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.8" strokeLinecap="round"><path d="m6 9 6 6 6-6" /></svg></button>;
}
function Player() {
  const [on, setOn] = useState(false); const [ph, setPh] = useState(0);
  useEffect(() => { if (!on) return; const t = setInterval(() => setPh(p => p + .35), 90); return () => clearInterval(t); }, [on]);
  const C = 32, R = 10;
  return (
    <div className="player">
      <button className="btn btn-primary" aria-pressed={on} onClick={() => setOn(!on)}><span style={{ display: "flex", gap: 8, alignItems: "center" }}><Play />{on ? "Pause" : "Play Audio"}</span></button>
      <div className="dots" aria-hidden>{Array.from({ length: C * R }, (_, i) => {
        const col = i % C, row = Math.floor(i / C);
        const lvl = on ? Math.round((Math.sin(col * .55 + ph) * .5 + .5) * (Math.sin(col * .21 - ph * 1.7) * .5 + .5) * R) : 0;
        return <i key={i} className={R - row <= lvl ? "on" : ""} />;
      })}</div>
      <Lang />
    </div>
  );
}

// soft-glow card (same model as tools/soft-glow/glow.py)
const XS = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];
const CONTOURS: Record<string, number[]> = {
  hill: [72.7, 63.4, 57.3, 55.3, 56.7, 61.1, 66.8, 71.2, 74.4, 76.5], valley: [52.5, 57.1, 64.9, 72.9, 79.2, 83.0, 83.4, 82.4, 80.5, 78.6],
  dome: [78.2, 73.6, 70.1, 68.2, 66.3, 65.1, 65.3, 66.7, 68.8, 70.7], ramp: [91.0, 89.0, 85.0, 79.9, 75.1, 71.6, 71.3, 73.0, 73.4, 72.2],
};
function glowPath(ys: number[]) {
  const pts: number[][] = [[-40, ys[0]], [-15, ys[0]], ...XS.map((x, i) => [x, ys[i]]), [115, ys[9]], [140, ys[9]]];
  const p = [pts[0], ...pts, pts[pts.length - 1]]; let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < p.length - 2; i++) { const [a, b, c, e] = [p[i - 1], p[i], p[i + 1], p[i + 2]];
    d += ` C${b[0] + (c[0] - a[0]) / 6},${b[1] + (c[1] - a[1]) / 6} ${c[0] - (e[0] - b[0]) / 6},${c[1] - (e[1] - b[1]) / 6} ${c[0]},${c[1]}`; }
  return d + " L140,240 L-40,240 Z";
}
function GlowCard({ id, color, contour, sigma, icon, title, body }: { id: string; color: string; contour: string; sigma: number; icon: string; title: string; body: string }) {
  return <div className="gl-card">
    <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: -1 }} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs><filter id={id} x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation={sigma} /></filter></defs>
      <path d={glowPath(CONTOURS[contour])} fill={color} filter={`url(#${id})`} /></svg>
    <img src={`${A}/icons-solid/${icon}.svg`} width={28} height={28} alt="" /><h4>{title}</h4><p>{body}</p></div>;
}

const RAMPS = ["indigo", "orange", "green", "pink", "yellow", "red", "grey"];
const STEPS = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
function Ramps() {
  const ref = useRef<HTMLDivElement>(null); const [vals, setVals] = useState<Record<string, string>>({});
  useEffect(() => { const cs = getComputedStyle(document.documentElement); const o: Record<string, string> = {};
    RAMPS.forEach(h => STEPS.forEach(s => { o[`${h}-${s}`] = cs.getPropertyValue(`--sr-${h}-${s}`).trim(); })); setVals(o); }, []);
  const lum = (h: string) => { if (!h || h[0] !== "#") return 1; const x = h.length === 4 ? h.slice(1).split("").map(c => c + c).join("") : h.slice(1);
    const [r, g, b] = [0, 2, 4].map(i => parseInt(x.substr(i, 2), 16) / 255); return .2126 * r + .7152 * g + .0722 * b; };
  return <div ref={ref} style={{ width: "100%" }}>{RAMPS.map(h => <div key={h}><L>{h}{h === "indigo" ? " · primary" : h === "orange" ? " · secondary" : ""}</L>
    <div className="swatch-ramp">{STEPS.map(s => { const c = vals[`${h}-${s}`] || "#fff"; return <div key={s} style={{ background: c, color: lum(c) > .5 ? "#1f1f1f" : "#fff" }} title={c}>{s}</div>; })}</div></div>)}</div>;
}
const Chip = ({ name, hex, role }: { name: string; hex: string; role: string }) =>
  <div className="chip"><div className="c" style={{ background: hex }} /><div className="m"><b>{name}</b><code>{hex}</code><div style={{ color: "var(--tx-tertiary)" }}>{role}</div></div></div>;
const fig = (src: string, cap: string, dark = false) =>
  <figure key={src} style={dark ? { background: "var(--slate)" } : undefined}><img src={src} alt="" /><figcaption>{cap}</figcaption></figure>;
const ICONS = ["tts", "stt", "translation", "parse", "voice", "doc-ai", "database", "check-badge", "ui-presentations_mic", "ui-workflows_calendar"];

export const PREVIEWS: Record<string, () => React.ReactNode> = {
  // ---------------- components
  button: () => <>
    <L>Styles</L>
    <div className="preview"><a className="btn btn-primary">Get Started</a><a className="btn btn-secondary">Contact Us</a><a className="btn btn-outline">Explore Indus Cowork →</a></div>
    <div className="preview"><a className="btn btn-hero-dark">Sign up</a><a className="btn btn-hero-light">Contact Us</a></div>
    <div className="preview" style={{ background: "var(--grad-night)" }}><a className="btn btn-ondark">Get Started</a></div>
    <L>Sizes · with icon · disabled</L>
    <div className="preview"><a className="btn btn-primary btn-sm">Small</a><a className="btn btn-primary">Medium</a><a className="btn btn-hero-dark">Large</a><button className="btn btn-primary"><span style={{ display: "flex", gap: 8, alignItems: "center" }}><Play />Play Audio</span></button><button className="btn btn-primary" disabled>Disabled</button></div>
    <p style={{ fontSize: 13, color: "var(--tx-tertiary)", margin: "0 0 8px" }}>Hover a dark button and move the cursor: the glow follows it.</p></>,
  "copy-button": () => <><div className="preview"><CopyDemo /><span style={{ fontSize: 13, color: "var(--tx-tertiary)" }}>hover it, then click it</span></div></>,
  "icon-button": () => <div className="preview">
    <button className="iconbtn" aria-label="Reset"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4" /></svg></button>
    <button className="iconbtn ghost" aria-label="Download"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg></button>
    <button className="iconbtn dark" aria-label="Send" style={{ position: "relative" }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M6 11l6-6 6 6" /></svg></button></div>,
  segmented: () => <div className="preview"><Seg items={["olmOCR Overall", "Word Accuracy", "Character Accuracy"]} /><Seg items={["Python", "JavaScript", "cURL"]} /></div>,
  "language-select": () => <div className="preview"><Lang /></div>,
  composer: () => <div className="preview col" style={{ background: "linear-gradient(180deg,#f4f7ff,#fff)" }}>
    <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>{["Research", "Data analysis", "Presentations"].map((x, i) => <span key={x} className="tag t-cap" style={i === 0 ? { background: "#fff", color: "var(--tx)" } : undefined}>{x}</span>)}</div>
    <div style={{ background: "#fff", border: "1px solid var(--st)", borderRadius: 12, boxShadow: "var(--shadow-card)", padding: 16, maxWidth: 560, width: "100%", margin: "0 auto", textAlign: "left" }}>
      <div style={{ fontSize: 16, minHeight: 44 }}>Brief me on this quarter&apos;s<span style={{ display: "inline-block", width: 2, height: "1.1em", background: "var(--sr-indigo-600)", verticalAlign: "-.15em", marginLeft: 2 }} /></div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--tx-tertiary)" }}><span className="iconbtn ghost" style={{ width: 28, height: 28 }}>+</span>Using <span className="tag t-cap">Web</span><span className="tag t-cap">Google Drive</span>
        <span className="iconbtn dark" style={{ marginLeft: "auto", width: 32, height: 32 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"><path d="M12 19V5M6 11l6-6 6 6" /></svg></span></div></div></div>,
  badge: () => <div className="preview">{[["b-indigo", "doc-ai", "SOC 2 Type I"], ["b-green", "check-badge", "ISO 27001"], ["b-orange", "database", "DPDP compliant"], ["b-pink", "ui-research_side-panel", "Role-based access"], ["b-yellow", "parse", "Full audit trail"], ["b-red", "database", "Data residency controls"]].map(([c, i, t]) =>
    <span key={t} className={`badge2 ${c}`}><Mi icon={i} />{t}</span>)}</div>,
  tag: () => <div className="preview"><span className="tag t-indigo">Voice Infra</span><span className="tag t-orange">Agent Framework</span><span className="tag t-green">Live</span><span className="tag t-cap">STT</span><span className="tag t-cap">TTS</span><span className="tag t-cap">Python</span></div>,
  "feature-card": () => <div className="preview left"><div className="pv-grid">{[["tts", "Text to Speech", "Natural voices across 11 Indic languages"], ["stt", "Speech to Text", "High-accuracy ASR across 12 Indic languages"], ["translation", "Translation", "State-of-the-art translation across 23 languages"]].map(([i, t, b]) =>
    <div key={t} className="card"><img src={`${A}/icons-solid/${i}.svg`} width={28} height={28} alt="" /><h4>{t}</h4><p>{b}</p></div>)}</div></div>,
  "integration-card": () => <div className="preview left"><div className="pv-grid">{[["python", "var(--sr-indigo-100)", "Python SDK", "Call speech, translation and chat APIs from any Python service in a few lines.", "t-indigo", "Developer", ["STT", "TTS"]], ["slack-icon", "var(--sr-orange-100)", "Slack", "Bring Indic-language agents into team channels: summaries, translation and voice notes.", "t-orange", "Workspace", ["Chat"]], ["notion-icon", "var(--sr-green-100)", "Notion", "Let agents read, translate and cite your Notion pages across 23 Indian languages.", "t-green", "Knowledge", ["Translate"]]].map(([logo, tint, t, d, tc, cat, caps]) =>
    <div key={t as string} className="icard"><div className="well" style={{ ["--t" as string]: tint as string }}><img src={`https://api.iconify.design/logos/${logo}.svg`} height={44} alt="" /></div><h4>{t}</h4><p>{d}</p><div className="tags"><span className={`tag ${tc}`}>{cat}</span>{(caps as string[]).map(c => <span key={c} className="tag t-cap">{c}</span>)}</div></div>)}</div></div>,
  "glow-card": () => <div className="preview left"><div className="pv-grid">
    <GlowCard id="gc1" color="#BBC3F1" contour="hill" sigma={8.6} icon="tts" title="Text to Speech" body="Natural voices across 11 Indic languages" />
    <GlowCard id="gc2" color="#D7EAC1" contour="valley" sigma={6.8} icon="check-badge" title="Sovereign by design" body="Built, deployed and operated entirely in India" />
    <GlowCard id="gc3" color="#FFE0AA" contour="dome" sigma={8.6} icon="translation" title="Translation" body="State-of-the-art translation across 23 languages" /></div></div>,
  stat: () => <div className="preview"><div className="stats"><div><b>&lt;500ms</b><span>Real-time latency</span></div><div><b>350M+</b><span>Conversations</span></div><div><b>10B+</b><span>Tokens served</span></div><div><b>99.9%</b><span>Uptime SLA</span></div></div></div>,
  testimonial: () => <div className="preview col"><figure className="card" style={{ margin: 0, padding: 32 }}><blockquote style={{ margin: 0, font: "400 20px/1.5 var(--font-sans)", color: "var(--tx-secondary)" }}>&ldquo;By embedding multilingual interactions across our consumer loan products, we are reaching more customers with greater relevance.&rdquo;</blockquote>
    <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20 }}><span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--sf-tertiary)", display: "grid", placeItems: "center", fontWeight: 525 }}>SK</span><span><b style={{ fontWeight: 525, display: "block" }}>Shallu Kaushik</b><span style={{ fontSize: 13, color: "var(--tx-tertiary)" }}>Chief Digital Officer, Tata Capital</span></span><a className="btn btn-secondary btn-sm" style={{ marginLeft: "auto" }}>Read full story</a></figcaption></figure></div>,
  "code-block": () => <div className="preview col"><div style={{ border: "1px solid var(--st)", borderRadius: 16, overflow: "hidden", textAlign: "left", background: "#fafafa" }}>
    <div style={{ display: "flex", alignItems: "center", background: "#f0f0f0", padding: 6 }}><Seg items={["Python", "JavaScript", "cURL"]} /><span style={{ marginLeft: "auto", borderLeft: "1px solid var(--st-secondary)", paddingLeft: 6 }}><CopyDemo /></span></div>
    <pre style={{ margin: 0, padding: 18, font: "400 13px/1.8 var(--font-mono)", overflow: "auto" }}><span style={{ color: "#33c" }}>from</span> sarvamai <span style={{ color: "#33c" }}>import</span> SarvamAI{"\n"}client = <span style={{ color: "#212191" }}>SarvamAI</span>(api_subscription_key=<span style={{ color: "#496d21" }}>&quot;YOUR_API_KEY&quot;</span>){"\n"}audio = client.text_to_speech.<span style={{ color: "#212191" }}>convert</span>(text=<span style={{ color: "#496d21" }}>&quot;नमस्ते, कैसे हो आप?&quot;</span>, target_language_code=<span style={{ color: "#496d21" }}>&quot;hi-IN&quot;</span>)</pre></div></div>,
  eyebrow: () => <div className="preview" style={{ background: "linear-gradient(180deg,#ffe9d6,#fff 70%)", flexDirection: "column" }}><img src={`${A}/motifs/ornament-divider.svg`} width={208} alt="" /><div className="eyebrow"><i /><p>India&apos;s Sovereign AI Platform</p><i /></div></div>,
  "pillar-list": () => <div className="preview left"><div style={{ display: "grid", gap: 26, maxWidth: 520, textAlign: "left" }}>{[["green", "Sovereign by design", "build, deploy, and run AI with full control, developed and operated entirely in India"], ["indigo", "State of the art models", "built for India's languages, culture, and context"], ["orange", "Human at the core", "forward deployed engineers work alongside your teams"]].map(([h, t, b]) =>
    <div key={t} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 12 }}><img src={`${A}/motifs/star-bullet-${h}.svg`} width={22} alt="" /><div><b style={{ font: "500 20px/1.3 var(--font-sans)" }}>{t}</b><p style={{ margin: "4px 0 0", color: "var(--tx-tertiary)", lineHeight: 1.65 }}>{b}</p></div></div>)}</div></div>,
  "logo-marquee": () => <div className="preview col"><div className="pv-label" style={{ margin: 0, textAlign: "center" }}>India builds with Sarvam</div>
    <div style={{ display: "flex", gap: 48, justifyContent: "center", alignItems: "center", flexWrap: "wrap", filter: "grayscale(1) brightness(.8)", opacity: .5, fontWeight: 600, fontSize: 20, letterSpacing: "-.02em" }}>{["AXIS BANK", "CRED", "Infosys", "LIC", "Tata Capital", "Urban Company"].map(x => <span key={x}>{x}</span>)}</div>
    <p style={{ fontSize: 12, color: "var(--tx-tertiary)", textAlign: "center", margin: 0 }}>Placeholder wordmarks; use the customers&apos; real SVG logos.</p></div>,
  "audio-player": () => <div className="preview"><Player /></div>,
  navbar: () => <div className="preview col" style={{ padding: 0 }}><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, padding: "0 28px", borderBottom: "1px solid var(--st-secondary)", gap: 16 }}>
    <img src={`${A}/logos/sarvam-wordmark-black.svg`} height={18} alt="sarvam" /><span style={{ display: "flex", gap: 28, fontSize: 15 }}>{["Products", "Developers", "Resources", "Company"].map(x => <span key={x}>{x}</span>)}</span>
    <span style={{ display: "flex", gap: 8 }}><a className="btn btn-primary">Log In</a><a className="btn btn-secondary">Contact Us</a></span></div><div style={{ height: 80, background: "radial-gradient(40% 120% at 50% 0%,rgba(249,115,22,.35),transparent 70%)" }} /></div>,
  footer: () => <div className="preview col" style={{ textAlign: "left" }}><div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(4,1fr)", gap: 24 }}>
    <div><img src={`${A}/logos/sarvam-wordmark-black.svg`} height={24} alt="sarvam" /><p style={{ fontSize: 13, color: "var(--tx-tertiary)", margin: "6px 0 0" }}>AI for all from India</p></div>
    {[["Products", ["Content Studio", "Document AI", "Work Agents"]], ["APIs", ["Text to Speech", "Speech to Text", "Translation"]], ["Resources", ["Blogs", "Documentation", "API Pricing"]], ["Company", ["About Us", "Careers", "Brand"]]].map(([h, ls]) =>
      <div key={h as string}><div style={{ font: "400 12px var(--font-label)", textTransform: "uppercase", marginBottom: 12 }}>{h}</div>{(ls as string[]).map(l => <div key={l} style={{ fontSize: 14, color: "var(--tx-tertiary)", margin: "8px 0" }}>{l}</div>)}</div>)}</div>
    <div aria-hidden style={{ font: "700 120px/0.8 var(--font-sans)", letterSpacing: "-.04em", marginTop: 24, background: "linear-gradient(135deg,#9e5f0a,#293a18 40%,#c11317 70%,#febf2b)", WebkitBackgroundClip: "text", color: "transparent", overflow: "hidden", height: 80 }}>sarvam</div></div>,
  "section-header": () => <div className="preview col" style={{ textAlign: "center" }}><h2 style={{ font: "500 var(--fs-h2)/1.2 var(--font-display)", letterSpacing: "-.02em", margin: 0 }}>Build anything with Sarvam APIs</h2><p style={{ color: "var(--tx-tertiary)", margin: "12px auto 0", maxWidth: 640 }}>Everything you need to add Indic AI to your product.</p></div>,
  "cta-panel": () => <div className="preview" style={{ padding: 16 }}><div className="cta-panel"><h3>Build the Future of India&apos;s AI<br />with Sarvam</h3><img src={`${A}/motifs/star-bullet-indigo.svg`} width={32} alt="" style={{ filter: "brightness(0) invert(1)", display: "block", margin: "0 auto 24px", position: "relative", zIndex: 1 }} /><a className="btn btn-ondark" style={{ position: "relative", zIndex: 1 }}>Get Started</a></div></div>,

  // ---------------- foundation specimens
  "f:color": () => <>
    <div className="preview left"><div className="chips">{[["Canvas", "#fcfcfc", "page bg"], ["Card", "#ffffff", "cards"], ["Secondary", "#f5f5f5", "chips, btn"], ["Stroke", "#e6e6e6", "borders"], ["Text", "#1f1f1f", "headlines"], ["Text 2", "#3d3d3d", "lead"], ["Text 3", "#666666", "body"], ["Slate", "#2a2c33", "primary"], ["Black", "#141414", "dark panels"]].map(([n, h, r]) => <Chip key={n} name={n} hex={h} role={r} />)}</div></div>
    <div className="preview left"><Ramps /></div>
    <div className="preview left"><div className="chips">{[["Forest", "#293a18", "heritage"], ["Marigold", "#febf2b", "heritage"], ["Ochre", "#9e5f0a", "heritage"], ["Sindoor", "#c11317", "heritage"]].map(([n, h, r]) => <Chip key={n} name={n} hex={h} role={r} />)}</div></div></>,
  "f:typography": () => <div className="preview col">{[
    ["display · Season Mix 400 · 44→64→72", <div key="d" style={{ font: "400 var(--fs-display)/1.05 var(--font-display)", letterSpacing: "-.025em" }}>AI for all from India</div>],
    ["h2 · Season Mix 500 · 28→36", <div key="h" style={{ font: "500 var(--fs-h2)/1.2 var(--font-display)", letterSpacing: "-.02em" }}>The AI Platform India Builds On</div>],
    ["two-tone · indigo 900 / 400", <div key="t" style={{ font: "400 var(--fs-h2)/1.1 var(--font-display)" }}><span style={{ color: "var(--sr-indigo-900)" }}>Champions</span><br /><span style={{ color: "var(--sr-indigo-400)" }}>Program</span></div>],
    ["h3 · Matter 500 · 18→21", <div key="3" style={{ font: "500 var(--fs-h3)/1.3 var(--font-sans)" }}>Sovereign by design</div>],
    ["lead · Matter 400 · 16→20", <div key="l" style={{ fontSize: "var(--fs-lead)", lineHeight: 1.75, color: "var(--tx-secondary)" }}>Built on sovereign compute. Powered by frontier-class models.</div>],
    ["label · Semi Mono 12 caps", <div key="b" style={{ font: "400 12px var(--font-label)", letterSpacing: 2, textTransform: "uppercase", color: "var(--tx-tertiary)" }}>India builds with Sarvam</div>],
    ["Indic · indigo 700", <div key="i" lang="hi" style={{ font: "500 32px/1.5 'Noto Serif Devanagari','Nirmala UI',serif", color: "var(--sr-indigo-700)" }}>भारत के लिए, भारत से</div>],
  ].map(([k, v]) => <div key={k as string} className="type-row"><small>{k}</small>{v}</div>)}</div>,
  "f:radius-elevation-surfaces": () => <>
    <div className="preview">{[6, 12, 16, 24, 32].map(r => <div key={r} style={{ width: 96, height: 96, borderRadius: r, border: "1px solid var(--st)", display: "flex", alignItems: "flex-end", padding: 8, font: "400 11px var(--font-mono)", color: "var(--tx-tertiary)" }}>{r}px</div>)}<div style={{ width: 160, height: 52, borderRadius: 999, border: "1px solid var(--st)", display: "grid", placeItems: "center", font: "400 11px var(--font-mono)" }}>pill</div></div>
    <div className="preview">{["var(--shadow-elev-sm)", "var(--shadow-card)", "var(--shadow-card-hover)", "var(--shadow-elev-md)", "var(--shadow-elev-lg)"].map(s => <div key={s} style={{ width: 150, height: 96, borderRadius: 16, background: "#fff", boxShadow: s, display: "flex", alignItems: "flex-end", padding: 10, font: "400 10px var(--font-mono)", color: "var(--tx-tertiary)" }}>{s.slice(6, -1)}</div>)}</div></>,
  "f:gradients-and-light": () => <div className="preview left"><div className="pv-grid">{["aura-hero", "grad-spectrum", "grad-sunrise", "grad-spectrum-light", "grad-night", "grad-blue-light", "grad-orange-medium", "grad-green-light", "grad-pink-light"].map(g =>
    <div key={g} style={{ height: 150, borderRadius: 16, background: `var(--${g})${g === "aura-hero" ? ",#fcfcfc" : ""}`, position: "relative", border: "1px solid var(--st-secondary)" }}><span style={{ position: "absolute", left: 10, bottom: 8, font: "400 11px var(--font-mono)", background: "rgba(255,255,255,.85)", padding: "2px 8px", borderRadius: 99 }}>--{g}</span></div>)}</div></div>,
  "f:motifs-and-glyphs": () => <div className="preview left"><div className="glyph-grid">
    {fig(`${A}/logos/sarvam-logo-black.svg`, "logomark")}
    {[...Array(16)].map((_, i) => fig(`${A}/glyphs/model-${String(i + 1).padStart(2, "0")}.svg`, `model-${String(i + 1).padStart(2, "0")}`))}
    {["voice-motif-01", "voice-motif-02", "voice-motif-03"].map(n => fig(`${A}/glyphs/${n}.svg`, n))}
    {["gateway-arch-indigo", "gateway-concentric-saffron", "gateway-concentric-leaf", "star-bullet-green", "star-bullet-indigo", "star-bullet-orange"].map(n => fig(`${A}/motifs/${n}.svg`, n))}</div></div>,
  "f:iconography": () => <>
    <L>Style 1 · flat stroke (dense UI)</L><div className="preview left"><div className="glyph-grid">{ICONS.map(n => fig(`${A}/icons/${n}.svg`, n))}</div></div>
    <L>Style 2 · solid product hue (tiles, badges)</L><div className="preview left"><div className="glyph-grid">{ICONS.map(n => fig(`${A}/icons-solid/${n}.svg`, n))}</div></div>
    <L>Style 3 · depth periwinkle (illustrative, 40px+)</L><div className="preview left"><div className="glyph-grid">{ICONS.map(n => fig(`${A}/icons-depth/${n}.svg`, n))}</div></div></>,
  "f:soft-glow-surfaces": () => <><div className="preview left"><div className="pv-grid">{["lilac-hill", "sage-valley", "peach-whisper", "rose-ramp", "honey-dome", "horizon", "sr-dawn", "sr-spectrum", "sr-meadow"].map(g =>
    <figure key={g} style={{ margin: 0 }}><img src={`${A}/glows/${g}.svg`} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: 16, border: "1px solid var(--st-secondary)" }} /><figcaption style={{ font: "400 11px var(--font-mono)", color: "var(--tx-tertiary)", marginTop: 6 }}>{g}</figcaption></figure>)}</div></div>
    <p><a className="btn btn-outline" href="/tools/soft-glow/generator.html" target="_blank">Open the visual glow generator →</a></p></>,
  "f:glyph-color-depth": () => <div className="preview left"><div className="glyph-grid">{["gateway-periwinkle-pink", "gateway-indigo-dusk", "saffron-luminous", "forest-gold", "sky-white", "rose-shadow", "leaf-sky", "sindoor-marigold", "spectrum-arch", "marigold-cream", "deep-indigo-violet", "blush-coral"].map(n => fig(`${A}/glyphs-depth/${n}.svg`, n))}</div></div>,
  "f:logo-usage": () => <div className="preview"><div style={{ padding: 28, border: "1px solid var(--st)", borderRadius: 16 }}><img src={`${A}/logos/sarvam-wordmark-black.svg`} height={32} alt="sarvam wordmark" /></div>
    <div style={{ padding: 28, background: "var(--black)", borderRadius: 16 }}><img src={`${A}/logos/sarvam-wordmark-white.svg`} height={32} alt="" /></div>
    <div style={{ padding: 20, border: "1px solid var(--st)", borderRadius: 16 }}><img src={`${A}/logos/sarvam-logo-black.svg`} height={56} alt="logomark" /></div></div>,
};

export function Preview({ id }: { id: string }) {
  const f = PREVIEWS[id];
  return f ? <section aria-label="Examples" className="previews">{f()}</section> : null;
}
export const hasPreview = (id: string) => id in PREVIEWS;
