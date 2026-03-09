"use client";

import { motion } from "framer-motion";

interface ChapterHeaderProps {
  title: string;
  description: string;
  number: number;
  accentVar?: string;
}

export default function ChapterHeader({
  title,
  description,
  number,
  accentVar,
}: ChapterHeaderProps) {
  return (
    <motion.header
      className="mb-12 border-b pb-8"
      style={{ borderColor: "var(--k-border)" }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Chapter number overline */}
      <p className="overline mb-3" style={accentVar ? { color: `var(${accentVar})` } : undefined}>
        Rozdział {String(number).padStart(2, "0")}
      </p>

      {/* Title */}
      <h2
        className="display mb-4"
        style={{
          fontFamily: "var(--k-font-display)",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: "var(--k-text-h3)",
          color: "var(--k-text-secondary)",
          lineHeight: 1.6,
          maxWidth: "40rem",
        }}
      >
        {description}
      </p>
    </motion.header>
  );
}
