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
