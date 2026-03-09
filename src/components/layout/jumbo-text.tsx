"use client";

import { motion } from "framer-motion";

interface JumboTextProps {
  text: string;
  accentVar?: string;
}

export default function JumboText({ text, accentVar }: JumboTextProps) {
  return (
    <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      {/* Ghost background text */}
      <div
        className="pointer-events-none absolute select-none"
        style={{
          fontFamily: "var(--k-font-display)",
          fontSize: "clamp(6rem, 25vw, 20rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: "var(--k-bg-elevated)",
          whiteSpace: "nowrap",
        }}
        aria-hidden="true"
      >
        {text}
      </div>

      {/* Main text */}
      <motion.h1
        className="jumbo relative z-10"
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={
          accentVar
            ? {
                background: `linear-gradient(135deg, var(--k-text) 60%, var(${accentVar}))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : undefined
        }
      >
        {text}
      </motion.h1>
    </div>
  );
}
