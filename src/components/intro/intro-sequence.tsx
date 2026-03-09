"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LETTERS = ["K", "L", "A", "T", "K", "A"];

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const letterVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function IntroSequence() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);
  // 0: black, 1: line, 2: school text, 3: KLATKA, 4: tagline + button

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 4600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    router.push("/onboarding");
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--k-bg)" }}
    >
      {/* Horizontal cinema line */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            className="absolute"
            style={{
              top: "38%",
              left: "10%",
              right: "10%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, var(--k-text-ghost) 20%, var(--k-text-tertiary) 50%, var(--k-text-ghost) 80%, transparent)",
              transformOrigin: "center",
            }}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        )}
      </AnimatePresence>

      {/* School text */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.p
            className="overline absolute"
            style={{ top: "40%", textAlign: "center" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Szkoła Filmowa im. Kieślowskiego
          </motion.p>
        )}
      </AnimatePresence>

      {/* KLATKA - letter by letter */}
      <div className="flex items-center justify-center gap-[0.02em]">
        {phase >= 3 &&
          LETTERS.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              className="jumbo select-none"
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: "inline-block",
                fontFamily: "var(--k-font-display)",
              }}
            >
              {letter}
            </motion.span>
          ))}
      </div>

      {/* Tagline + Enter button */}
      <AnimatePresence>
        {phase >= 4 && (
          <motion.div
            className="absolute flex flex-col items-center gap-8"
            style={{ bottom: "18%" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p
              style={{
                fontFamily: "var(--k-font-body)",
                fontSize: "var(--k-text-h3)",
                color: "var(--k-text-secondary)",
                letterSpacing: "0.02em",
                fontWeight: 300,
              }}
            >
              Zbuduj film od zera. Z AI.
            </p>

            <motion.button
              onClick={handleEnter}
              className="group relative cursor-pointer"
              style={{
                fontFamily: "var(--k-font-display)",
                fontSize: "var(--k-text-small)",
                color: "var(--k-text-tertiary)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "none",
                border: "1px solid var(--k-border)",
                borderRadius: "var(--k-radius-xl)",
                padding: "var(--k-space-3) var(--k-space-8)",
                transition: "all var(--k-duration) var(--k-ease)",
              }}
              whileHover={{
                borderColor: "var(--k-accent)",
                color: "var(--k-accent)",
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Wejdź
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
