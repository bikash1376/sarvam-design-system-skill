"use client";
import { AnimatePresence, motion } from "motion/react";
import { useMode } from "./mode";
import { EASE } from "./motion";
import type { DocContent } from "@/lib/content";

export function DocView({ doc, human }: { doc: DocContent; human: React.ReactNode }) {
  const { mode } = useMode();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${doc.agentPath}-${mode}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.25, ease: EASE.brand }}
      >
        {mode === "agent" ? <AgentView doc={doc} /> : <HumanView doc={doc} human={human} />}
      </motion.div>
    </AnimatePresence>
  );
}

function AgentView({ doc }: { doc: DocContent }) {
  return (
    <article>
      <p className="mb-3 text-[15px] text-muted-foreground">{doc.agentPath}</p>
      <pre className="whitespace-pre-wrap break-words rounded-xl border bg-background p-6 font-mono text-[13px] leading-6 text-foreground">
        {doc.agentMd}
      </pre>
    </article>
  );
}

function HumanView({ doc, human }: { doc: DocContent; human: React.ReactNode }) {
  return (
    <article>
      <h1 className="text-[26px] font-medium leading-tight tracking-tight">{doc.title}</h1>
      <p className="mt-3 text-[18px] leading-snug text-muted-foreground">{doc.description}</p>
      <hr className="my-10" />
      {human}
    </article>
  );
}
