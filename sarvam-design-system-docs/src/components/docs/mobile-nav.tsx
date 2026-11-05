"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { Sidebar } from "./sidebar";

const REPO = "https://github.com/bikash1376/sarvam-design-system-skill";
const INSTALL = "npx skills add bikash1376/sarvam-design-system-skill --skill sarvam-design-system";

/** Below 1024px: logomark + hamburger in the top bar; the hamburger opens a drawer with the full docs nav. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open]);

  return (
    <>
      <Link href="/" aria-label="Sarvam design system home" className="pointer-events-auto absolute left-4 top-[22px] flex items-center gap-2 sm:left-6 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/skill/logos/sarvam-logo-black.svg" alt="" className="size-7" />
      </Link>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="docs-drawer"
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto absolute right-3 top-[18px] z-[60] grid size-10 place-items-center rounded-xl border bg-background sm:right-5 lg:hidden"
      >
        <span className="relative block h-3 w-4">
          <motion.span className="absolute left-0 top-0 h-[1.5px] w-4 rounded bg-foreground" animate={open ? { y: 5.25, rotate: 45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }} />
          <motion.span className="absolute left-0 top-[5.25px] h-[1.5px] w-4 rounded bg-foreground" animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
          <motion.span className="absolute left-0 top-[10.5px] h-[1.5px] w-4 rounded bg-foreground" animate={open ? { y: -5.25, rotate: -45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              className="pointer-events-auto fixed inset-0 z-50 bg-black/25 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.aside
              key="drawer"
              id="docs-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Docs navigation"
              className="pointer-events-auto fixed inset-y-0 left-0 z-[55] flex w-[86vw] max-w-[340px] flex-col bg-background shadow-[0_12px_40px_-8px_rgba(0,0,0,.18)] lg:hidden"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ duration: 0.32, ease: [0.2, 0, 0, 1] }}
            >
              <div className="flex h-[76px] shrink-0 items-center gap-2.5 border-b px-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/skill/logos/sarvam-logo-black.svg" alt="" className="size-6" />
                <span className="text-[15px] font-medium">Sarvam Design System</span>
              </div>
              <div className="no-scrollbar flex-1 overflow-y-auto overscroll-contain px-2 pt-4">
                <Sidebar variant="drawer" onNavigate={() => setOpen(false)} />
                <div className="mx-3 mb-8 space-y-3 border-t pt-6">
                  <p className="text-sm font-medium">Install</p>
                  <button
                    onClick={() => { navigator.clipboard?.writeText(INSTALL); setCopied(true); setTimeout(() => setCopied(false), 1400); }}
                    className="flex h-9 items-center rounded-lg bg-muted px-3 text-[14px]"
                  >
                    {copied ? "Copied" : "Copy command"}
                  </button>
                  <a href={REPO} target="_blank" rel="noreferrer" className="flex h-9 w-fit items-center gap-2 rounded-lg bg-muted px-3 text-[14px]">
                    <HugeiconsIcon icon={GithubIcon} size={15} />View on GitHub
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
