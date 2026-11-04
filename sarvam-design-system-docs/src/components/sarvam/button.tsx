"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

/** Sarvam button classes on top of shadcn: six skill variants, full pill, cursor glow on dark variants. */
export const sbtn = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full whitespace-nowrap select-none outline-none transition-[background,transform,box-shadow] duration-[var(--dur-fast)] focus-visible:shadow-[0_0_0_3px_rgba(165,187,252,.6)] disabled:pointer-events-none disabled:opacity-40 [font-weight:var(--fw-medium)]",
  {
    variants: {
      variant: {
        primary: "s-glow bg-[var(--slate)] text-white shadow-[var(--shadow-btn-dark)]",
        "hero-dark": "s-glow bg-[image:var(--grad-btn-dark)] text-white shadow-[var(--shadow-btn-dark)] [font-family:var(--font-display)]",
        "hero-light": "bg-[image:var(--grad-btn-light)] text-[#1e2033] shadow-[var(--shadow-btn-light),inset_0_0_0_1px_var(--st)] [font-family:var(--font-display)]",
        secondary: "bg-[var(--sf-secondary)] text-[var(--tx)] hover:bg-white hover:shadow-[inset_0_0_0_1px_var(--st)]",
        outline: "bg-white text-[var(--tx)] shadow-[inset_0_0_0_1px_var(--st)] hover:bg-[var(--sf)]",
        "on-dark": "bg-white text-[var(--tx)]",
      },
      size: { sm: "h-9 px-4 text-sm", md: "h-10 px-5 text-[15px]", lg: "h-[52px] px-6 text-base" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type SButtonProps = HTMLMotionProps<"button"> & VariantProps<typeof sbtn>;

export function trackGlow(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
}

export function SButton({ className, variant, size, onPointerMove, ...props }: SButtonProps) {
  return (
    <motion.button
      className={cn(sbtn({ variant, size }), className)}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
      onPointerMove={(e) => { trackGlow(e); onPointerMove?.(e); }}
      {...props}
    />
  );
}

/** Icon pill: white pill, hairline border, soft shadow, a light tinted disc holding a solid icon, then the label.
 *  Tones map to the brand ramps: disc = <hue>-100, icon = <hue>-800 (green uses 800 too). */
const TONES = {
  green: { disc: "var(--sr-green-100)", ink: "var(--sr-green-800)" },
  indigo: { disc: "var(--sr-indigo-100)", ink: "var(--sr-indigo-800)" },
  orange: { disc: "var(--sr-orange-100)", ink: "var(--sr-orange-800)" },
  pink: { disc: "var(--sr-pink-100)", ink: "var(--sr-pink-700)" },
} as const;
export type IconPillTone = keyof typeof TONES;

export function SIconPill({ tone = "indigo", icon, children, size = "md", className, ...props }: HTMLMotionProps<"button"> & { tone?: IconPillTone; icon: React.ReactNode; size?: "md" | "lg" }) {
  const t = TONES[tone];
  const big = size === "lg";
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border border-[var(--st)] bg-white text-[var(--tx)] shadow-[0_4px_20px_rgba(0,0,0,.05)] outline-none transition-shadow hover:shadow-[0_8px_28px_-4px_rgba(0,0,0,.1)] focus-visible:shadow-[0_0_0_3px_rgba(165,187,252,.6)] disabled:pointer-events-none disabled:opacity-40",
        big ? "h-14 gap-3.5 pr-7 pl-2 text-[18px]" : "h-12 gap-3 pr-6 pl-1.5 text-[16px]",
        className,
      )}
      {...props}
    >
      <span className={cn("grid shrink-0 place-items-center rounded-full", big ? "size-10" : "size-9")} style={{ background: t.disc, color: t.ink }}>{icon}</span>
      <span className="[font-weight:var(--fw-regular)]">{children as React.ReactNode}</span>
    </motion.button>
  );
}

/** Solid glyphs used in icon pills (filled, currentColor). */
export const SolidIcon = {
  sparkles: (
    <svg viewBox="3 2 19 19" className="size-5" fill="currentColor" aria-hidden><path d="M15 2.5c.5 3.3 2 5 5.3 5.5-3.3.5-4.8 2.2-5.3 5.5-.5-3.3-2-5-5.3-5.5 3.3-.5 4.8-2.2 5.3-5.5Z" /><path d="M7.5 11c.35 2.3 1.4 3.5 3.7 3.85-2.3.35-3.35 1.55-3.7 3.85-.35-2.3-1.4-3.5-3.7-3.85 2.3-.35 3.35-1.55 3.7-3.85Z" /></svg>
  ),
  dub: (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden><path d="M7 5h7.2a4.5 4.5 0 0 0 5.8 5.8V16a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm2.8 4.6v4.8c0 .5.55.8.97.53l3.8-2.4a.62.62 0 0 0 0-1.06l-3.8-2.4a.62.62 0 0 0-.97.53Z" /><path d="M18.5 2c.25 1.5.95 2.25 2.5 2.5-1.55.25-2.25 1-2.5 2.5-.25-1.5-.95-2.25-2.5-2.5 1.55-.25 2.25-1 2.5-2.5Z" /></svg>
  ),
  review: (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden><path d="M7 3h10a3 3 0 0 1 3 3v8.2h-3.8a2 2 0 0 0-2 2V21H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm1.5 5.2a.8.8 0 0 0 0 1.6h7a.8.8 0 0 0 0-1.6h-7Zm0 3.6a.8.8 0 0 0 0 1.6H12a.8.8 0 0 0 0-1.6H8.5Z" /><path d="M15.7 21v-4.3c0-.3.2-.5.5-.5H20L15.7 21Z" /></svg>
  ),
};
