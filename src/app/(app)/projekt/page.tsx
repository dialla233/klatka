import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function ProjektPage() {
  return (
    <div>
      <JumboText text="PROJKT" accentVar="--k-ch-project" />

      <ChapterHeader
        title="Projekt"
        description="Zarządzanie projektem filmowym od A do Z. Pre-produkcja, plan, logistyka."
        number={7}
        accentVar="--k-ch-project"
      />

      <SectionBlock title="Pre-produkcja — fundament" delay={0}>
        <p className="mb-3">80% sukcesu filmu to pre-produkcja. Im lepiej się przygotujesz, tym mniej problemów na planie.</p>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Breakdown scenariusza</strong> — Rozłóż każdą scenę na elementy: aktorzy, rekwizyty, lokacje, FX.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Stripboard</strong> — Harmonogram zdjęciowy: które sceny kiedy kręcisz.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Call sheet</strong> — Kto, gdzie, o której. Każdy dzień zdjęciowy.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Shot list</strong> — Lista ujęć z opisem: rozmiar kadru, ruch kamery, obiektyw.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Narzędzia" delay={0.1}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>StudioBinder</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Darmowy plan: call sheets, shot lists, storyboardy. Standard branżowy.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Notion / Trello</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Do zarządzania taskami, deadline&apos;ami, komunikacją z ekipą. Elastyczne, darmowe.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>AI Storyboarding</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Midjourney + shot list = wizualny plan zdjęciowy. Zamiast rysować — generuj.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zrób breakdown jednej sceny">
          <p>Weź najważniejszą scenę i rozłóż ją: kto, co, gdzie, jaki sprzęt. AI pomoże.</p>
        </ActionStep>
        <ActionStep step={2} title="Stwórz shot list">
          <p>Minimum: numer ujęcia, opis, rozmiar kadru, ruch kamery. Maksimum: storyboard z AI.</p>
        </ActionStep>
        <ActionStep step={3} title="Zaplanuj jeden dzień zdjęciowy">
          <p>Call sheet: godziny, lokacja, transport, catering, plan awaryjny. Przetestuj na jednej scenie.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
