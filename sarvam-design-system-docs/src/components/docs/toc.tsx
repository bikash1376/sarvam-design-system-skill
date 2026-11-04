"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, Tick02Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string };
const REPO = "https://github.com/bikash1376/sarvam-design-system-skill";
const INSTALL = "npx skills add bikash1376/sarvam-design-system-skill";

function CopyRow({ label, text, icon = Copy01Icon }: { label: string; text: string; icon?: typeof Copy01Icon }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard?.writeText(text); setDone(true); setTimeout(() => setDone(false), 1400); }}
      className="flex h-9 items-center gap-2 rounded-lg bg-muted px-3 text-[14px] transition-colors hover:bg-muted/70"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={done ? "ok" : "c"} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.15 }} className="grid place-items-center text-muted-foreground">
          <HugeiconsIcon icon={done ? Tick02Icon : icon} size={15} />
        </motion.span>
      </AnimatePresence>
      {done ? "Copied" : label}
    </button>
  );
}

/** Right column: "On this page" (scroll-spy, click to jump) + Install panel. Portals into the layout's slot. */
export function Toc({ items, title, source }: { items: TocItem[]; title: string; source?: string }) {
  const [slot, setSlot] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => { setSlot(document.getElementById("toc-slot")); }, []);
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: 0 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);


  if (!slot) return null;
  return createPortal(
    <div className="space-y-8">
      {items.length > 0 && (
        <nav aria-label="On this page">
          <p className="mb-3 text-sm font-medium">On this page</p>
          <ul className="space-y-0.5 text-sm">
            {items.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(i.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); history.replaceState(null, "", `#${i.id}`); setActive(i.id); }}
                  className={cn("relative block py-1 pl-3 transition-colors", active === i.id ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
                >
                  {active === i.id && <motion.span layoutId="toc-active" className="absolute top-1 bottom-1 left-0 w-0.5 rounded-full bg-foreground" transition={{ type: "spring", bounce: 0.15, duration: 0.4 }} />}
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="border-t pt-6">
        <p className="text-sm font-medium">Install</p>
        <p className="mt-1 mb-3 text-sm text-muted-foreground">The whole skill, for Claude Code, Cursor, Codex and other agents</p>
        <code className="mb-2 block rounded-lg bg-muted px-3 py-2 font-mono text-[12px] leading-5 break-all">{INSTALL}</code>
        <CopyRow label="Copy command" text={INSTALL} />
      </div>
      <div className="border-t pt-6">
        <p className="text-sm font-medium">GitHub</p>
        <a href={REPO} target="_blank" rel="noreferrer" className="mt-3 inline-flex h-9 items-center gap-2 rounded-lg bg-muted px-3 text-[14px] hover:bg-muted/70">
          <HugeiconsIcon icon={GithubIcon} size={15} />sarvam-design-system-skill
        </a>
      </div>
    </div>,
    slot,
  );
}
