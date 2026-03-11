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

const sectionFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export default function IntroSequence() {
  const router = useRouter();
  const [phase, setPhase] = useState(0);

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
    <div style={{ background: "var(--k-bg)" }}>
      {/* ═══ HERO — cinematic intro ═══ */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
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

        {/* Overline text */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.p
              className="overline absolute"
              style={{ top: "40%", textAlign: "center" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              AI &times; Film &times; Eksperyment
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

              {/* Scroll indicator */}
              <motion.div
                className="absolute flex flex-col items-center gap-2"
                style={{ bottom: "-80px" }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p style={{ fontSize: "0.65rem", color: "var(--k-text-ghost)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  scroll
                </p>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.3 }}>
                  <path d="M8 2L8 14M8 14L3 9M8 14L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--k-text-ghost)" }} />
                </svg>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══ DATA TRANSPARENCY — safe space ═══ */}
      <motion.section
        className="flex flex-col items-center px-6 py-24"
        style={{ maxWidth: "640px", margin: "0 auto" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
      >
        <div
          className="w-full rounded-2xl p-8 md:p-10"
          style={{
            border: "1px solid var(--k-accent)",
            background: "rgba(212, 168, 83, 0.04)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" style={{ color: "var(--k-accent)", flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            <h2
              style={{
                fontFamily: "var(--k-font-display)",
                fontSize: "var(--k-text-h3)",
                fontWeight: 700,
                color: "var(--k-accent)",
                letterSpacing: "-0.01em",
              }}
            >
              Twoje dane s&#261; bezpieczne
            </h2>
          </div>

          <div className="space-y-4" style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--k-text-secondary)" }}>
            <p style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--k-text)" }}>
              KLATKA nie zapisuje &#380;adnych danych. Zero. Nic.
            </p>
            <p>
              Wszystko, co tu wpiszesz, &#380;yje wy&#322;&#261;cznie w Twojej sesji przegl&#261;darki.
              Zamykasz kart&#281; &mdash; znika. Nie ma kont, nie ma bazy danych zbieraj&#261;cej Twoje historie,
              nie ma analizy tego co piszesz.
            </p>
            <p>
              Mimo to &mdash; baw si&#281; danymi <strong>zupe&#322;nie fikcyjnymi</strong>.
              Wymyślaj postacie, fantazjuj, testuj AI na wymyślonych scenariuszach.
              To playground, nie biuro notarialne.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--k-text-tertiary)" }}>
              Jedyne co opuszcza Twoj&#261; przegl&#261;dark&#281; to zapytania do AI (Google Gemini)
              w celu generowania odpowiedzi. Nie s&#261; one przechowywane po stronie KLATKI.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ═══ ABOUT KLATKA ═══ */}
      <motion.section
        className="flex flex-col items-center px-6 py-16"
        style={{ maxWidth: "640px", margin: "0 auto" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
      >
        <div className="w-full space-y-6" style={{ color: "var(--k-text-secondary)", lineHeight: 1.7 }}>
          <h2
            style={{
              fontFamily: "var(--k-font-display)",
              fontSize: "var(--k-text-h3)",
              fontWeight: 700,
              color: "var(--k-text)",
              letterSpacing: "-0.01em",
            }}
          >
            O projekcie
          </h2>

          <p>
            <strong style={{ color: "var(--k-text)" }}>KLATKA</strong> powsta&#322;a w ci&#261;gu dw&#243;ch nocy
            jako eksperyment &mdash; fun project, &#380;eby potestowa&#263; nowe rzeczy i nauczy&#263; si&#281; czego&#347;
            na &#347;wie&#380;ym, bezpretensjonalnym codebase.
          </p>

          <p>
            G&#322;&#243;wny projekt &mdash;{" "}
            <a
              href="https://dialla.pl"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--k-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              dialla.pl
            </a>{" "}
            &mdash; jest ju&#380; zbyt zaawansowany na zabawy i poszukiwania.
            To solidny codebase wymagaj&#261;cy precyzji i skupienia.
            KLATKA to miejsce na eksperymenty: nowe API, nowe patterny, nowe pomys&#322;y.
          </p>

          <p style={{ fontStyle: "italic", color: "var(--k-text-tertiary)" }}>
            Mam nadziej&#281;, &#380;e to pokazuje, co mo&#380;na wyd&#322;uba&#263; w do&#347;&#263; kr&#243;tkim czasie.
          </p>
        </div>
      </motion.section>

      {/* ═══ DIALLA CTA ═══ */}
      <motion.section
        className="flex flex-col items-center px-6 py-16"
        style={{ maxWidth: "640px", margin: "0 auto" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
      >
        <a
          href="https://dialla.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block rounded-2xl p-8 md:p-10 transition-all duration-300"
          style={{
            border: "1px solid var(--k-border)",
            background: "var(--k-bg-card)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--k-accent)";
            e.currentTarget.style.background = "rgba(212, 168, 83, 0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--k-border)";
            e.currentTarget.style.background = "var(--k-bg-card)";
          }}
        >
          <p
            style={{
              fontFamily: "var(--k-font-display)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--k-accent)",
              marginBottom: "12px",
            }}
          >
            Projekt g&#322;&#243;wny
          </p>
          <h3
            style={{
              fontFamily: "var(--k-font-display)",
              fontSize: "var(--k-text-h2)",
              fontWeight: 700,
              color: "var(--k-text)",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            dialla.pl
          </h3>
          <p style={{ color: "var(--k-text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
            Ciekawy technologicznie, a w przysz&#322;o&#347;ci tak&#380;e filmowo, wizualnie
            i fotograficznie. Je&#347;li interesuje Ci&#281; jak wygl&#261;da pe&#322;noprawny
            projekt budowany z AI &mdash; rzu&#263; okiem.
          </p>
          <span
            style={{
              fontFamily: "var(--k-font-display)",
              fontSize: "var(--k-text-small)",
              color: "var(--k-accent)",
              letterSpacing: "0.05em",
            }}
          >
            Sprawd&#378; dialla.pl &rarr;
          </span>
        </a>
      </motion.section>

      {/* ═══ CREDITS ═══ */}
      <motion.section
        className="flex flex-col items-center px-6 pt-16 pb-24"
        style={{ maxWidth: "640px", margin: "0 auto" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFadeUp}
      >
        <div className="w-full flex flex-col items-center text-center gap-4">
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--k-border)",
              marginBottom: "8px",
            }}
          />
          <p style={{ fontSize: "0.85rem", color: "var(--k-text-tertiary)", lineHeight: 1.6 }}>
            Projekt{" "}
            <a
              href="https://linkedin.com/in/tuszewicki"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--k-text-secondary)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Piotra Tuszewicki
            </a>
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--k-text-ghost)" }}>
            Zbudowane z Next.js, Gemini, Framer Motion i zbyt du&#380;&#261; ilo&#347;ci&#261; kawy.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
