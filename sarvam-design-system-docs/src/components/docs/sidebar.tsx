"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { NAV, hrefOf } from "@/lib/nav";
import { cn } from "@/lib/utils";

/** Docs navigation. `variant="rail"` is the sticky desktop sidebar; `variant="drawer"` sits inside the mobile/tablet drawer. */
export function Sidebar({ variant = "rail", onNavigate }: { variant?: "rail" | "drawer"; onNavigate?: () => void }) {
  const pathname = usePathname();
  const drawer = variant === "drawer";
  return (
    <nav
      aria-label="Docs"
      className={cn(
        drawer
          ? "pb-8"
          : "no-scrollbar sticky top-[var(--docs-top)] max-h-[calc(100vh-var(--docs-top))] overflow-y-auto overscroll-contain pb-24 pt-2 [mask-image:linear-gradient(to_bottom,transparent_0,#000_24px,#000_calc(100%-48px),transparent_100%)]",
      )}
    >
      {NAV.map(({ group, items }) => (
        <div key={group} className={drawer ? "mb-6" : "mb-8"}>
          <p className="mb-2 px-3 text-[15px] font-medium text-foreground">{group}</p>
          <ul className="space-y-0.5">
            {items.map((item) => {
              const href = hrefOf(item);
              const active = pathname === href || pathname === `${href}/`;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-md px-3 text-[15px] transition-colors",
                      drawer ? "py-2" : "py-1.5",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId={drawer ? "drawer-active" : "sidebar-active"}
                        className="absolute inset-0 rounded-md bg-muted"
                        transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
                      />
                    )}
                    <span className="relative">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
