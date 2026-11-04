"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/** Human view keeps code out of the way: folded, wrapped, never a horizontal scrollbar. Opens like a dropdown. */
export function FoldedCode({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-4 rounded-xl border bg-muted/40">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between px-4 py-2.5 text-[13px] text-muted-foreground hover:text-foreground">
        {open ? "Hide code" : "Show code"}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>⌄</motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }} className="overflow-hidden">
            <pre className="!m-0 !rounded-none !rounded-b-xl !bg-transparent whitespace-pre-wrap break-words border-t px-4 py-3">{children}</pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
