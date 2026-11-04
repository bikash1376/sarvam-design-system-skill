"use client";
import { motion, MotionConfig } from "motion/react";

/** Sarvam motion tokens as Motion values (foundations/10-motion.md). */
export const EASE = { brand: [0.2, 0, 0, 1], reveal: [0.25, 1, 0.5, 1], standard: [0.4, 0, 0.2, 1] } as const;

/** App-wide Motion defaults: brand easing, and reduced motion respected everywhere. */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: EASE.brand, duration: 0.35 }}>
      {children}
    </MotionConfig>
  );
}

/** Section reveal: fades up 16px once when it enters the viewport. */
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: EASE.reveal }}
    >
      {children}
    </motion.div>
  );
}
