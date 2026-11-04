"use client";
import { AnimatePresence, motion } from "motion/react";
import { useMode } from "./mode";
import { EASE } from "./motion";
import type { DocContent } from "@/lib/content";

export function DocView({ doc, human }: { doc: DocContent; human: React.ReactNode }) {
  const { mode } = useMode();
  return (
    <AnimatePresence mode="wait" initial={false}>
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
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-medium tracking-tight">{doc.title}</h1>
        <span
          title={doc.origin === "measured" ? "Specified from sarvam.ai production" : "Not on sarvam.ai: built on shadcn following Sarvam's brand rules"}
          className="rounded-md border px-2 py-0.5 text-[12px] text-muted-foreground"
        >
          {doc.origin === "measured" ? "From sarvam.ai" : "Built on shadcn"}
        </span>
      </div>
      <p className="mt-3 text-lg text-muted-foreground">{doc.description}</p>
      <hr className="my-10" />
      {human}
    </article>
  );
}
