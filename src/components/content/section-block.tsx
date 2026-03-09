"use client";

import { motion } from "framer-motion";

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export default function SectionBlock({
  title,
  children,
  delay = 0,
}: SectionBlockProps) {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.4 + delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <h3
        className="mb-4"
        style={{
          fontFamily: "var(--k-font-display)",
          fontSize: "var(--k-text-h2)",
          fontWeight: 600,
          color: "var(--k-text)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          color: "var(--k-text-secondary)",
          lineHeight: 1.7,
          fontSize: "var(--k-text-body)",
        }}
      >
        {children}
      </div>
    </motion.section>
  );
}
