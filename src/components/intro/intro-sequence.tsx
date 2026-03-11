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

const staggerUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: EASE,
    },
  }),
};

export default function IntroSequence() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => setPhase(4), 4400),
      setTimeout(() => setPhase(5), 5800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    router.push("/onboarding");
  };

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--k-bg)" }}
    >
      {/* Horizontal cinema line */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.div
            className="absolute"
            style={{
              top: "28%",
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

      {/* Overline */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.p
            className="overline absolute"
            style={{ top: "30%", textAlign: "center" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            AI &times; Film &times; Eksperyment
          </motion.p>
        )}
      </AnimatePresence>

      {/* KLATKA - letter by letter */}
      <div
        className="flex items-center justify-center gap-[0.02em]"
        style={{ marginTop: "-6vh" }}
      >
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

      {/* Tagline */}
      <AnimatePresence>
        {phase >= 4 && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              fontFamily: "var(--k-font-body)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "var(--k-text-secondary)",
              letterSpacing: "0.02em",
              fontWeight: 300,
              marginTop: "var(--k-space-4)",
            }}
          >
            Zbuduj film od zera. Z AI.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Privacy — IKEA 1-2-3 + Wejdź */}
      <AnimatePresence>
        {phase >= 5 && (
          <motion.div
            className="absolute flex flex-col items-center"
            style={{ bottom: "8%", left: "5%", right: "5%" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* Privacy steps */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-8"
              style={{ maxWidth: "680px" }}
            >
              {[
                { n: "1", text: "Wpisujesz.\nZostaje w przeglądarce." },
                { n: "2", text: "Zamykasz kartę.\nZnika." },
                { n: "3", text: "Masz obawy?\nNie korzystaj." },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  className="flex items-start gap-3"
                  custom={i}
                  variants={staggerUp}
                  initial="hidden"
                  animate="visible"
                >
                  <span
                    style={{
                      fontFamily: "var(--k-font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 700,
                      color: "var(--k-accent)",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    {step.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--k-font-body)",
                      fontSize: "clamp(0.75rem, 1.4vw, 0.85rem)",
                      color: "var(--k-text-tertiary)",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Wejdź */}
            <motion.button
              onClick={handleEnter}
              className="cursor-pointer"
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
                marginBottom: "var(--k-space-6)",
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

            {/* Credit — tiny, humble */}
            <p
              style={{
                fontSize: "0.65rem",
                color: "var(--k-text-ghost)",
                letterSpacing: "0.05em",
              }}
            >
              <a
                href="https://linkedin.com/in/tuszewicki"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--k-text-ghost)", textDecoration: "none" }}
              >
                Piotr Tuszewicki
              </a>
              {" / "}
              <a
                href="https://dialla.pl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--k-text-ghost)", textDecoration: "none" }}
              >
                dialla.pl
              </a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
