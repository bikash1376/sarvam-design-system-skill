"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { MotionRoot } from "./motion";
import { cn } from "@/lib/utils";

type Mode = "human" | "agent";
const Ctx = createContext<{ mode: Mode; setMode: (m: Mode) => void }>({ mode: "human", setMode: () => {} });
export const useMode = () => useContext(Ctx);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("human"); // default: Human
  useEffect(() => {
    try {
      if (localStorage.getItem("docs-mode") === "agent") setModeState("agent");
    } catch {}
  }, []);
  const setMode = (m: Mode) => {
    setModeState(m);
    try { localStorage.setItem("docs-mode", m); } catch {}
  };
  return (
    <Ctx.Provider value={{ mode, setMode }}>
      <MotionRoot>{children}</MotionRoot>
    </Ctx.Provider>
  );
}

export function ModeToggle() {
  const { mode, setMode } = useMode();
  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label="View mode"
        className="pointer-events-auto flex gap-1 rounded-xl border bg-background p-1"
      >
        {(["human", "agent"] as const).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={cn(
              "relative rounded-lg px-4 py-2 text-[15px] capitalize transition-colors",
              mode === m ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {mode === m && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 rounded-lg bg-muted"
                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
              />
            )}
            <span className="relative">{m}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
