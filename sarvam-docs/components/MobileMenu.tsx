"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const path = usePathname();
  useEffect(() => { document.getElementById("side")?.classList.remove("open"); }, [path]);
  return (
    <button className="menu-toggle" aria-controls="side"
      onClick={e => {
        const s = document.getElementById("side"); if (!s) return;
        const open = s.classList.toggle("open");
        (e.currentTarget as HTMLButtonElement).setAttribute("aria-expanded", String(open));
      }}>Menu</button>
  );
}
