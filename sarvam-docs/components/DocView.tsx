"use client";
import { useEffect, useState } from "react";

type Mode = "human" | "agent";
type Panel = null | "customize" | "install";

const REPO = process.env.NEXT_PUBLIC_SKILL_REPO || "https://github.com/bikash1376/sarvam-aii.git";

function useCopy() {
  const [done, setDone] = useState<string | null>(null);
  const copy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text).then(() => { setDone(key); setTimeout(() => setDone(null), 2000); });
  };
  return { done, copy };
}

export default function DocView({ human, agent, file }: { human: React.ReactNode; agent: string; file: string }) {
  const [mode, setMode] = useState<Mode>("human");
  const [panel, setPanel] = useState<Panel>(null);
  const [fonts, setFonts] = useState("brand");
  const [radius, setRadius] = useState(16);
  const [primary, setPrimary] = useState("#2a2c33");
  const [origin, setOrigin] = useState("https://your-site");
  const { done, copy } = useCopy();

  // restore preferences
  useEffect(() => {
    setOrigin(window.location.origin);
    try {
      const m = localStorage.getItem("ds-mode") as Mode | null; if (m) setMode(m);
      const c = JSON.parse(localStorage.getItem("ds-custom") || "null");
      if (c) { setFonts(c.fonts); setRadius(c.radius); setPrimary(c.primary); }
    } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem("ds-mode", mode); } catch {} }, [mode]);
  useEffect(() => {
    const r = document.documentElement;
    r.dataset.fonts = fonts;
    r.style.setProperty("--preview-radius", radius + "px");
    r.style.setProperty("--btn-primary", primary);
    try { localStorage.setItem("ds-custom", JSON.stringify({ fonts, radius, primary })); } catch {}
  }, [fonts, radius, primary]);

  // cursor glow for every dark button on the site
  useEffect(() => {
    const f = (e: PointerEvent) => {
      const b = (e.target as Element)?.closest?.(".btn-primary,.btn-hero-dark,.iconbtn.dark") as HTMLElement | null;
      if (!b) return; const r = b.getBoundingClientRect();
      b.style.setProperty("--gx", e.clientX - r.left + "px"); b.style.setProperty("--gy", e.clientY - r.top + "px");
    };
    document.addEventListener("pointermove", f);
    return () => document.removeEventListener("pointermove", f);
  }, []);

  // Esc closes panels
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setPanel(null); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);

  const zip = `${origin}/sarvam-design-system.zip`;
  const agentPrompt = `Install the Sarvam design system skill for this project.
1. Download ${zip}
2. Unzip it so the folder is at ~/.claude/skills/sarvam-design-system (Windows: %USERPROFILE%\\.claude\\skills\\sarvam-design-system). SKILL.md must be at the folder root.
3. For any Sarvam-branded work, read SKILL.md, DECISIONS.md, tokens/tokens.css and the relevant foundations/ and components/reference/ files before writing code.
4. Fonts (Season Mix, Matter) are licensed and not in the zip: use the fallbacks named in foundations/03-typography.md unless assets/fonts/ exists.`;
  const unix = `curl -L ${zip} -o /tmp/sarvam.zip && mkdir -p ~/.claude/skills && unzip -o /tmp/sarvam.zip -d ~/.claude/skills`;
  const win = `iwr ${zip} -OutFile $env:TEMP\\sarvam.zip; Expand-Archive $env:TEMP\\sarvam.zip "$env:USERPROFILE\\.claude\\skills" -Force`;
  const git = `git clone ${REPO} && mkdir -p ~/.claude/skills && cp -r sarvam-aii/sarvam-design-system ~/.claude/skills/`;
  const overrides = `:root {\n  --preview-radius: ${radius}px;   /* card radius (system default 16px) */\n  --btn-primary: ${primary};      /* primary button fill (default --slate) */\n}${fonts === "fallback" ? `\n/* free fallbacks */\n:root { --font-display: "Source Serif 4", Georgia, serif; --font-sans: "Inter Tight", system-ui, sans-serif; }` : ""}`;

  const CopyBtn = ({ k, t, label = "Copy" }: { k: string; t: string; label?: string }) => (
    <button className="copy" onClick={() => copy(k, t)} aria-live="polite">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="13" height="13" rx="3" /><path d="M16 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h2" />{done === k && <path d="m11.5 14.5 2 2 4-4.5" />}</svg>
      <span>{done === k ? "Copied" : label}</span>
    </button>
  );

  return (
    <>
      <div hidden={mode !== "human"}>{human}</div>
      <div hidden={mode !== "agent"} className="agent">
        <div className="bar"><span>{file}</span><CopyBtn k="page" t={agent} label="Copy markdown" /></div>
        <pre>{agent}</pre>
      </div>

      {panel === "customize" && (
        <div className="panel" role="dialog" aria-label="Customize">
          <h3>Customize</h3>
          <p>Preview token overrides live on every page, then copy them into your project.</p>
          <div className="row"><label htmlFor="cf">Fonts</label>
            <div className="seg" id="cf">{[["brand", "Brand (Season Mix + Matter)"], ["fallback", "Free fallbacks"]].map(([v, l]) =>
              <button key={v} className={fonts === v ? "on" : ""} onClick={() => setFonts(v)}>{l}</button>)}</div></div>
          <div className="row"><label htmlFor="cr">Card radius · {radius}px</label>
            <input id="cr" type="range" min={8} max={32} step={4} value={radius} onChange={e => setRadius(+e.target.value)} /></div>
          <div className="row"><label>Primary fill</label>
            <div className="seg">{[["#2a2c33", "Slate"], ["#141414", "Black"], ["#212191", "Indigo 900"]].map(([v, l]) =>
              <button key={v} className={primary === v ? "on" : ""} onClick={() => setPrimary(v)}>{l}</button>)}</div></div>
          <pre>{overrides}</pre>
          <div className="row"><CopyBtn k="ov" t={overrides} label="Copy CSS" />
            <button className="copy" onClick={() => { setFonts("brand"); setRadius(16); setPrimary("#2a2c33"); }}>Reset to system</button></div>
        </div>
      )}

      {panel === "install" && (
        <div className="panel" role="dialog" aria-label="Install">
          <h3>Install the skill</h3>
          <p>Private distribution: no registry, no shadcn, no skills.sh. Pick one.</p>
          <p><b style={{ color: "var(--tx)" }}>1 · Ask your coding agent</b>, which downloads and installs it.</p>
          <pre>{agentPrompt}</pre>
          <div className="row"><CopyBtn k="prompt" t={agentPrompt} label="Copy prompt" /></div>
          <p><b style={{ color: "var(--tx)" }}>2 · One-liner</b> (font-free zip, 1.2 MB)</p>
          <pre>{unix}</pre>
          <div className="row"><CopyBtn k="unix" t={unix} label="Copy macOS / Linux" /></div>
          <pre>{win}</pre>
          <div className="row"><CopyBtn k="win" t={win} label="Copy Windows PowerShell" /><a className="copy" href="/sarvam-design-system.zip" download>Download zip</a></div>
          <p><b style={{ color: "var(--tx)" }}>3 · Private repo, with fonts (recommended)</b>. Invited collaborators only; includes Season Mix + Matter.</p>
          <pre>{git}</pre>
          <div className="row"><CopyBtn k="git" t={git} label="Copy git clone" /></div>
          <p>Restart your agent afterwards so it discovers the skill.</p>
        </div>
      )}

      <div className="dock" role="toolbar" aria-label="View">
        <button className={mode === "human" ? "on" : ""} aria-pressed={mode === "human"} onClick={() => setMode("human")}>Human</button>
        <button className={mode === "agent" ? "on" : ""} aria-pressed={mode === "agent"} onClick={() => setMode("agent")}>Agent</button>
        <i />
        <button className={panel === "customize" ? "on" : ""} onClick={() => setPanel(panel === "customize" ? null : "customize")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8" /><circle cx="16" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></svg><span>Customize</span></button>
        <button className={panel === "install" ? "on" : ""} onClick={() => setPanel(panel === "install" ? null : "install")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg><span>Install</span></button>
      </div>
    </>
  );
}
