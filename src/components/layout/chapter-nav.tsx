"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { CHAPTERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function ChapterNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed left-0 top-0 hidden h-screen w-64 flex-col overflow-y-auto border-r lg:flex"
      style={{
        background: "var(--k-bg)",
        borderColor: "var(--k-border)",
        padding: "var(--k-space-6) 0",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="mb-8 block px-6"
        style={{
          fontFamily: "var(--k-font-display)",
          fontSize: "var(--k-text-h2)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "var(--k-text)",
          textDecoration: "none",
        }}
      >
        KLATKA
      </Link>

      {/* Chapter list */}
      <div className="flex flex-1 flex-col gap-0.5 px-3">
        {CHAPTERS.map((chapter) => {
          const href = `/${chapter.slug}`;
          const isActive = pathname === href;
          const isMvp = chapter.phase === "mvp";

          return (
            <Link
              key={chapter.slug}
              href={isMvp ? href : "#"}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all",
                !isMvp && "pointer-events-none opacity-30"
              )}
              style={{
                color: isActive
                  ? "var(--k-text)"
                  : "var(--k-text-tertiary)",
                background: isActive
                  ? "var(--k-bg-elevated)"
                  : "transparent",
                fontFamily: "var(--k-font-body)",
                textDecoration: "none",
              }}
            >
              {/* Chapter number */}
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-xs font-medium"
                style={{
                  fontFamily: "var(--k-font-mono)",
                  fontSize: "var(--k-text-caption)",
                  color: isActive
                    ? `var(${chapter.accentVar})`
                    : "var(--k-text-ghost)",
                  background: isActive
                    ? "var(--k-bg-hover)"
                    : "transparent",
                }}
              >
                {String(chapter.number).padStart(2, "0")}
              </span>

              {/* Title */}
              <span className="truncate">{chapter.title}</span>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="chapter-indicator"
                  className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full"
                  style={{ background: `var(${chapter.accentVar})` }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom: version */}
      <div
        className="px-6 pt-4"
        style={{
          fontFamily: "var(--k-font-mono)",
          fontSize: "var(--k-text-caption)",
          color: "var(--k-text-ghost)",
        }}
      >
        MVP v0.1
      </div>
    </nav>
  );
}
