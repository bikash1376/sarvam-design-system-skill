"use client";
/* Animation patterns (skill: components/reference/animations.md), in the sarvam.ai/token-factory card grammar.
   Every loop starts when in view, pauses when out of view, and shows a still end frame under reduced motion. */
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon, Database01Icon, Mail01Icon, UserGroupIcon, SparklesIcon } from "@hugeicons/core-free-icons";

const EB = [0.2, 0, 0, 1] as const;
const ER = [0.25, 1, 0.5, 1] as const;
const ACC = "var(--sr-indigo-600)";
const LINE = "var(--sr-grey-300)";

/** Loop driver: a phase that advances every `ms` while visible (or a fixed end frame under reduced motion). */
function useLoop(ref: React.RefObject<Element | null>, steps: number, ms: number, delay = 0) {
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const [i, setI] = useState(reduce ? steps - 1 : 0);
  useEffect(() => {
    if (reduce || !inView) return;
    let t: ReturnType<typeof setInterval>;
    const s = setTimeout(() => { t = setInterval(() => setI((x) => (x + 1) % steps), ms); }, delay * 1000);
    return () => { clearTimeout(s); clearInterval(t); };
  }, [inView, reduce, steps, ms, delay]);
  return { i: reduce ? steps - 1 : i, inView, reduce };
}

function Card({ title, body, children }: { title: string; body: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--st-secondary)] bg-white">
      <div className="relative grid h-44 place-items-center bg-[var(--sf)] [background-image:radial-gradient(var(--sr-grey-200)_1px,transparent_1px)] [background-size:14px_14px]" aria-hidden>{children}</div>
      <div className="p-5"><p className="text-[16px] [font-weight:var(--fw-medium)]">{title}</p><p className="mt-1 text-[13px] leading-snug text-[var(--tx-tertiary)]">{body}</p></div>
    </div>
  );
}

/* 1 · autoscale: curve rises/falls, GPU chips follow */
function Autoscale({ delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const levels = [1, 2, 4, 5, 3, 2];
  const { i } = useLoop(ref, levels.length, 900, delay);
  return (
    <div ref={ref} className="w-[78%] space-y-3">
      <svg viewBox="0 0 200 60" className="w-full rounded-md border border-[var(--st)] bg-white">
        <path d="M0 50 C40 50 50 14 100 12 S160 48 200 46" fill="none" stroke={LINE} strokeWidth="1.2" />
        <motion.path d="M0 50 C40 50 50 14 100 12 S160 48 200 46" fill="none" stroke={ACC} strokeWidth="1.6" initial={{ pathLength: 0 }} animate={{ pathLength: (i + 1) / levels.length }} transition={{ duration: 0.8, ease: EB }} />
        <motion.line y1="4" y2="56" stroke={ACC} strokeOpacity=".35" strokeWidth="1" animate={{ x1: ((i + 1) / levels.length) * 200, x2: ((i + 1) / levels.length) * 200 }} transition={{ duration: 0.8, ease: EB }} />
      </svg>
      <div className="flex justify-center gap-1.5">
        {[0, 1, 2, 3, 4].map((k) => (
          <motion.span key={k} className="grid size-6 place-items-center rounded-md border" animate={{ backgroundColor: k < levels[i] ? "var(--sr-indigo-500)" : "#fff", borderColor: k < levels[i] ? "var(--sr-indigo-500)" : "var(--st)", scale: k === levels[i] - 1 ? [1, 1.12, 1] : 1 }} transition={{ duration: 0.4, ease: EB }}>
            <span className="size-2 rounded-full border border-white/80" />
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* 2 · rollout: heartbeat scrolls, 5% → 50% → 100% checkpoints */
function Rollout({ delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const { i, inView, reduce } = useLoop(ref, 4, 1100, delay);
  const stops = ["5%", "50%", "100%"];
  return (
    <div ref={ref} className="w-[80%] space-y-4">
      <div className="overflow-hidden rounded-md border border-[var(--st)] bg-white py-2">
        <motion.svg viewBox="0 0 400 30" className="h-7 w-[200%]" animate={inView && !reduce ? { x: ["0%", "-50%"] } : {}} transition={{ duration: 4, ease: "linear", repeat: Infinity }}>
          {[0, 200].map((o) => <path key={o} transform={`translate(${o} 0)`} d="M0 15 H60 l6 -10 l6 20 l6 -14 l5 4 H140 l5 -8 l5 12 l4 -4 H200" fill="none" stroke={ACC} strokeWidth="1.4" />)}
        </motion.svg>
      </div>
      <div className="relative flex items-center justify-between px-1">
        <div className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-[var(--sr-grey-300)]" />
        <motion.div className="absolute left-3 top-1/2 h-0.5 -translate-y-1/2 rounded bg-[var(--sr-green-600)]" animate={{ width: `calc(${(Math.min(i, 2) / 2) * 100}% - 24px)` }} transition={{ duration: 0.7, ease: EB }} />
        {stops.map((s, k) => (
          <div key={s} className="relative flex flex-col items-center gap-1">
            <motion.span className="grid size-5 place-items-center rounded-full border bg-white text-white" animate={{ backgroundColor: k < i ? "var(--sr-green-600)" : "#fff", borderColor: k < i ? "var(--sr-green-600)" : "var(--sr-grey-400)", scale: k === i - 1 ? [0.6, 1.15, 1] : 1 }} transition={{ duration: 0.45, ease: ER }}>
              {k < i && <HugeiconsIcon icon={Tick02Icon} size={12} strokeWidth={2.4} />}
            </motion.span>
            <span className="s-mono text-[10px] text-[var(--tx-tertiary)]">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 3 · flow: dots travel from tools to the hub, hub pulses on arrival */
function Flow({ delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const nodes = [{ x: 18, y: 26, icon: Database01Icon }, { x: 18, y: 106, icon: Mail01Icon }, { x: 214, y: 66, icon: UserGroupIcon }];
  const run = inView && !reduce;
  return (
    <div ref={ref} className="relative h-[140px] w-[250px]">
      <svg viewBox="0 0 250 140" className="absolute inset-0">
        {nodes.map((n, k) => <path key={k} id={`fp${k}`} d={`M${n.x + 14} ${n.y + 14} C${(n.x + 125) / 2} ${n.y + 14} ${(n.x + 125) / 2} 84 125 84`} fill="none" stroke={LINE} strokeWidth="1.2" strokeDasharray="3 4" />)}
      </svg>
      {nodes.map((n, k) => (
        <motion.span key={`d${k}`} className="absolute size-2 rounded-full bg-[var(--sr-indigo-500)]"
          style={{ offsetPath: `path("M${n.x + 14} ${n.y + 14} C${(n.x + 125) / 2} ${n.y + 14} ${(n.x + 125) / 2} 84 125 84")`, left: -4, top: -4 } as React.CSSProperties}
          animate={run ? { offsetDistance: ["0%", "100%"], opacity: [0, 1, 1, 0] } : { opacity: 0 }}
          transition={{ duration: 1.6, ease: EB, repeat: Infinity, repeatDelay: 1.2, delay: delay + k * 0.9 }} />
      ))}
      {nodes.map((n, k) => <span key={k} className="absolute grid size-7 place-items-center rounded-lg border border-[var(--st)] bg-white text-[var(--tx-tertiary)]" style={{ left: n.x, top: n.y }}><HugeiconsIcon icon={n.icon} size={14} /></span>)}
      <motion.span className="absolute grid size-11 place-items-center rounded-xl bg-[var(--sr-indigo-600)] text-white shadow-[0_6px_20px_rgba(85,106,220,.35)]" style={{ left: 103, top: 62 }}
        animate={run ? { scale: [1, 1, 1.08, 1] } : {}} transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0, times: [0, 0.6, 0.8, 1], delay: delay + 1.4 }}>
        <HugeiconsIcon icon={SparklesIcon} size={18} />
      </motion.span>
      <span className="s-mono absolute left-[88px] top-[112px] rounded-full border border-[var(--st)] bg-white px-2 py-0.5 text-[9px] text-[var(--tx-tertiary)]">crm.update()</span>
    </div>
  );
}

/* 4 · grid-fill: cells light in sequence in brand tints */
function GridFill({ delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const N = 24;
  const { i } = useLoop(ref, N + 6, 140, delay);
  const tint = (k: number) => ["var(--sr-indigo-100)", "var(--sr-orange-100)", "var(--sr-green-100)"][(k * 7) % 3];
  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-6 gap-1.5 rounded-xl border border-[var(--st)] bg-white p-2">
        {Array.from({ length: N }).map((_, k) => (
          <motion.span key={k} className="size-6 rounded-[5px] border" animate={{ backgroundColor: k < i ? tint(k) : "#fff", borderColor: k < i ? "transparent" : "var(--st)" }} transition={{ duration: 0.25 }} />
        ))}
      </div>
      <span className="s-mono absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[var(--st)] bg-white px-2 py-0.5 text-[9px] text-[var(--sr-indigo-700)]">1M-token window</span>
    </div>
  );
}

/* 5 · bar-race: bars grow, number counts up */
function BarRace({ delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const v = useMotionValue(reduce ? 1.6 : 1);
  const txt = useTransform(v, (x) => `${x.toFixed(1)}×`);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(v, [1, 1.6], { duration: 1.4, ease: ER, delay, repeat: Infinity, repeatDelay: 2.4 });
    return () => c.stop();
  }, [inView, reduce, v, delay]);
  return (
    <div ref={ref} className="w-[80%] space-y-2.5 rounded-xl p-3" style={{ background: "linear-gradient(160deg,#dfe5fb,#b9c4f5)" }}>
      {[["Sarvam", 110, "var(--sr-indigo-900)"], ["Others", 67, "var(--sr-grey-700)"]].map(([n, val, c]) => (
        <div key={n as string}>
          <div className="mb-1 flex justify-between text-[10px] text-[var(--tx-secondary)]"><span>{n as string}</span><span className="s-mono">{val as number}</span></div>
          <div className="h-2.5 rounded-sm bg-white/60"><motion.div className="h-full origin-left rounded-sm" style={{ background: c as string, width: `${(val as number) / 1.4}%` }} initial={{ scaleX: reduce ? 1 : 0 }} animate={inView && !reduce ? { scaleX: [0, 1, 1] } : { scaleX: 1 }} transition={{ duration: 3.8, times: [0, 0.32, 1], ease: ER, delay, repeat: Infinity }} /></div>
        </div>
      ))}
      <motion.p className="s-display text-[22px] text-[var(--sr-indigo-900)]">{txt}</motion.p>
    </div>
  );
}

/* 6 · type-in: code types, tool icons highlight in turn */
function TypeIn({ delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const code = "client.chat.completions(...)";
  const { i } = useLoop(ref, code.length + 12, 75, delay);
  const shown = Math.min(i, code.length);
  const hl = i > code.length ? Math.floor((i - code.length) / 3) % 4 : -1;
  return (
    <div ref={ref} className="w-[80%] space-y-3">
      <div className="rounded-md border border-[var(--st)] bg-white p-2.5 s-mono text-[10px] leading-5">
        <p className="text-[var(--tx-tertiary)]">from sarvamai import SarvamAI</p>
        <p className="text-[var(--sr-indigo-800)]">{code.slice(0, shown)}<motion.span className="ml-px inline-block h-3 w-px translate-y-0.5 bg-[var(--sr-indigo-600)]" animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} /></p>
      </div>
      <div className="flex justify-center gap-2">
        {["Py", "JS", "↗", "⌘"].map((t, k) => (
          <motion.span key={t} className="grid size-7 place-items-center rounded-md border text-[10px]" animate={{ borderColor: hl === k ? "var(--sr-indigo-500)" : "var(--st)", backgroundColor: hl === k ? "var(--sr-indigo-50)" : "#fff", color: hl === k ? "var(--sr-indigo-700)" : "var(--tx-tertiary)", y: hl === k ? -2 : 0 }} transition={{ duration: 0.25, ease: EB }}>{t}</motion.span>
        ))}
      </div>
    </div>
  );
}

/* 7 · badge-orbit: dashed rings rotate around a certification badge */
function BadgeOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const run = inView && !reduce;
  return (
    <div ref={ref} className="flex gap-6">
      {[["ISO", "27001", "2022"], ["SOC", "2", "TYPE 2"]].map(([a, b, c], k) => (
        <div key={a} className="relative grid size-24 place-items-center">
          <motion.svg viewBox="0 0 100 100" className="absolute inset-0" animate={run ? { rotate: k ? -360 : 360 } : {}} transition={{ duration: 24, ease: "linear", repeat: Infinity }}>
            <circle cx="50" cy="50" r="47" fill="none" stroke="var(--sr-grey-300)" strokeWidth="1" strokeDasharray="2 5" />
          </motion.svg>
          <motion.svg viewBox="0 0 100 100" className="absolute inset-2" animate={run ? { rotate: k ? 360 : -360 } : {}} transition={{ duration: 36, ease: "linear", repeat: Infinity }}>
            <circle cx="50" cy="50" r="47" fill="none" stroke="var(--sr-indigo-300)" strokeWidth="1" strokeDasharray="14 10" />
          </motion.svg>
          <div className="grid size-16 place-items-center rounded-full bg-white text-center shadow-[var(--shadow-card)]"><span><span className="block text-[8px] tracking-widest text-[var(--tx-tertiary)]">{a}</span><span className="block text-[15px] [font-weight:var(--fw-medium)] leading-none">{b}</span><span className="block text-[7px] text-[var(--tx-tertiary)]">{c}</span></span></div>
        </div>
      ))}
    </div>
  );
}

/* 8 · grain-field: canvas columns of saffron grain (hero) */
function GrainField() {
  const cv = useRef<HTMLCanvasElement>(null);
  const inView = useInView(cv);
  const reduce = useReducedMotion();
  useEffect(() => {
    const c = cv.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const W = (c.width = c.clientWidth * 2), H = (c.height = c.clientHeight * 2);
    const cols = 64, cw = W / cols;
    let raf = 0, t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let k = 0; k < cols; k++) {
        const x = k * cw;
        const n = Math.sin(k * 0.21 + t * 0.9) * 0.5 + Math.sin(k * 0.07 - t * 0.6) * 0.35 + Math.sin(k * 0.53 + t * 1.7) * 0.15;
        const edge = Math.abs(k - cols / 2) / (cols / 2);
        const h = H * (0.08 + 0.42 * (0.5 + n / 2) * (0.15 + edge * edge * 1.1));
        const g = ctx.createLinearGradient(0, H - h, 0, H);
        g.addColorStop(0, "rgba(249,187,158,.0)"); g.addColorStop(0.12, "#f9bb9e"); g.addColorStop(0.5, "#f38858"); g.addColorStop(1, "#e6651b");
        ctx.fillStyle = g; ctx.fillRect(x, H - h, cw - 1, h);
        for (let s = 0; s < 22; s++) { ctx.fillStyle = `rgba(243,136,88,${0.12 + Math.random() * 0.35})`; ctx.fillRect(x + Math.random() * cw, H - h - Math.random() * 26, 2, 2); }
      }
      t += 0.012;
      if (!reduce && inView) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce]);
  return <canvas ref={cv} className="absolute inset-0 size-full" />;
}

export function AnimationsPreview() {
  return (
    <div className="space-y-6">
      <div className="relative h-56 overflow-hidden rounded-2xl bg-white" aria-hidden>
        <GrainField />
        <div className="relative pt-8 text-center"><p className="s-display text-[28px] leading-tight">Frontier open models.<br />Served with speed, scale and privacy.</p></div>
      </div>
      <p className="text-center text-[12px] text-[var(--tx-tertiary)]">grain-field · hero only</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Meet changing demand" body="autoscale · capacity follows the curve"><Autoscale /></Card>
        <Card title="Keep production running" body="rollout · staged 5% → 50% → 100%"><Rollout delay={0.4} /></Card>
        <Card title="Tool-calling agents" body="flow · calls travel to the hub"><Flow delay={0.8} /></Card>
        <Card title="Million-token context" body="grid-fill · the window fills, then clears"><GridFill delay={1.2} /></Card>
        <Card title="Faster inference" body="bar-race · FACTS.md numbers only"><BarRace delay={0.2} /></Card>
        <Card title="Fit your existing tools" body="type-in · code types, tools light up"><TypeIn delay={0.6} /></Card>
        <Card title="Independently audited" body="badge-orbit · slow dashed rings"><BadgeOrbit /></Card>
      </div>
    </div>
  );
}
