"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MVP_CHAPTERS } from "@/lib/constants";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-1 overflow-x-auto border-t px-3 py-2 lg:hidden"
      style={{
        background: "var(--k-glass-heavy)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "var(--k-border)",
      }}
    >
      {MVP_CHAPTERS.map((chapter) => {
        const href = `/${chapter.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={chapter.slug}
            href={href}
            className="flex flex-shrink-0 flex-col items-center gap-0.5 rounded-lg px-3 py-1.5"
            style={{
              color: isActive ? "var(--k-text)" : "var(--k-text-ghost)",
              background: isActive ? "var(--k-bg-elevated)" : "transparent",
              textDecoration: "none",
              minWidth: "4rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--k-font-mono)",
                fontSize: "var(--k-text-caption)",
                color: isActive
                  ? `var(${chapter.accentVar})`
                  : "var(--k-text-ghost)",
              }}
            >
              {String(chapter.number).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--k-font-body)",
                fontSize: "10px",
                whiteSpace: "nowrap",
              }}
            >
              {chapter.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
