import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function TechnologiaPage() {
  return (
    <div>
      <JumboText text="TECHNO" accentVar="--k-ch-tech" />

      <ChapterHeader
        title="Technologia"
        description="Kamery, AI, software — narzędzia współczesnego filmowca."
        number={8}
        accentVar="--k-ch-tech"
      />

      <SectionBlock title="Kamery — co wybrać?" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>iPhone 15/16 Pro</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>ProRes, Log, Cinematic Mode. Sean Baker nakręcił &quot;Tangerine&quot; na iPhone&apos;a. Zaczynasz z tym co masz.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Sony FX3 / A7S III</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Full frame, 4K 120fps, świetne ISO. Standard indie produkcji. Od 10k PLN (używane).</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Blackmagic Pocket 6K</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>RAW, super kolor science, DaVinci Resolve w zestawie. Najlepszy stosunek ceny do jakości kinowej.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Dźwięk — fundamenty" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Zoom H5/H6</strong> — Rejestrator terenowy. Must-have na każdym planie.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Rode NTG5</strong> — Shotgun mic. Czysty dialog, odcięcie tła.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Sennheiser MKE 600</strong> — Alternatywa: cieplejszy ton, klasyka.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>DPA / Sanken lavalier</strong> — Do ukrytego nagrywania dialogów.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zrób test swojego sprzętu">
          <p>Nakręć 30 sekund w najgorszych warunkach (niskie światło, hałas). Zobacz limity swojego zestawu.</p>
        </ActionStep>
        <ActionStep step={2} title="Porównaj workflow RAW vs compressed">
          <p>Nakręć tę samą scenę w obu formatach. Porównaj w DaVinci. Czy różnica jest warta czasu?</p>
        </ActionStep>
        <ActionStep step={3} title="Zbuduj swój kit list">
          <p>Stwórz listę sprzętu na swój projekt. AI pomoże dobrać sprzęt do budżetu.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
