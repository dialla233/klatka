"use client";

import { motion } from "framer-motion";

interface ChatFABProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatFAB({ onClick, isOpen }: ChatFABProps) {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border shadow-lg lg:bottom-8 lg:right-8"
      style={{
        background: isOpen ? "var(--k-bg-elevated)" : "var(--k-bg-card)",
        borderColor: isOpen
          ? "var(--k-accent)"
          : "var(--k-border-hover)",
        boxShadow: isOpen
          ? "0 0 30px var(--k-accent-glow)"
          : "0 4px 24px rgba(0,0,0,0.4)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Zamknij chat" : "Porozmawiaj z AI"}
    >
      {isOpen ? (
        // X icon
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 5L15 15M15 5L5 15"
            stroke="var(--k-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        // Chat bubble icon
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="var(--k-text-secondary)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.button>
  );
}
