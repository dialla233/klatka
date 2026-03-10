import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function DystrybucjaPage() {
  return (
    <div>
      <JumboText text="DYSTRY" accentVar="--k-ch-distribution" />

      <ChapterHeader
        title="Kanały dystrybucji"
        description="Festiwale, VOD, kina — jak dotrzeć do widza?"
        number={11}
        accentVar="--k-ch-distribution"
      />

      <SectionBlock title="Festiwale filmowe" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Tier A — Marzenie</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Cannes, Berlinale, Sundance, Locarno, Wenecja. Premiere status required. Złóż — nie masz nic do stracenia.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Polskie — realistyczne</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Gdynia, Nowe Horyzonty, Camerimage (dla operatorów!), Off Cinema, Żubroffka. Twój naturalny teren.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Niszowe i tematyczne</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>AI Film Festival (Runway), Encounters, SXSW shorts, Clermont-Ferrand. Mniej competition, bardziej precyzyjny target.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Film Freeway — jak aplikować" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Profil</strong> — Profesjonalne stills, synopsis EN/PL, trailer jeśli masz.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Strategia</strong> — Zacznij od mniejszych festiwali. Buduj CV selekcjami.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Budżet</strong> — Submission fees: 5-50 USD. Zaplanuj 200-500 PLN na kampanię festiwalową.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Timeline</strong> — Złóż 6-12 miesięcy przed deadline&apos;em. Early bird = tańsze fee.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Załóż konto na Film Freeway">
          <p>Uzupełnij profil. Dodaj materiały. Nawet bez gotowego filmu — przygotuj się.</p>
        </ActionStep>
        <ActionStep step={2} title="Zrób listę 20 festiwali">
          <p>Dobierz do gatunku i długości swojego filmu. AI pomoże Ci znaleźć najlepsze dopasowania.</p>
        </ActionStep>
        <ActionStep step={3} title="Przygotuj DCP lub ProRes master">
          <p>Większość festiwali wymaga DCP (Digital Cinema Package) lub ProRes 422 HQ. Zacznij od ProRes.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
