"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { NAV, hrefOf } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Docs"
      className="no-scrollbar sticky top-[var(--docs-top)] max-h-[calc(100vh-var(--docs-top))] overflow-y-auto overscroll-contain pb-24 [mask-image:linear-gradient(to_bottom,transparent_0,#000_24px,#000_calc(100%-48px),transparent_100%)] pt-2"
    >
      {NAV.map(({ group, items }) => (
        <div key={group} className="mb-8">
          <p className="mb-2 px-3 text-[15px] font-medium text-foreground">{group}</p>
          <ul className="space-y-0.5">
            {items.map((item) => {
              const href = hrefOf(item);
              const active = pathname === href || pathname === `${href}/`;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-md px-3 py-1.5 text-[15px] transition-colors",
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {active && (
                      <motion.span layoutId="sidebar-active" className="absolute inset-0 rounded-md bg-muted" transition={{ type: "spring", bounce: 0.12, duration: 0.45 }} />
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
