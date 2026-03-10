import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function DofinansowaniaPage() {
  return (
    <div>
      <JumboText text="GRANTY" accentVar="--k-ch-grants" />

      <ChapterHeader
        title="Dofinansowania"
        description="Granty, stypendia, dofinansowania — pieniądze czekają."
        number={15}
        accentVar="--k-ch-grants"
      />

      <SectionBlock title="Polskie źródła" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>PISF — programy</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Produkcja filmowa, debiuty, mikrobudżety, filmy dokumentalne, animacja. Nabory kilka razy w roku. Wymaga scenariusza i kosztorysu.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Stypendia MKiDN</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Młoda Polska (do 35 lat), stypendia twórcze, stypendium marszałka województwa. 5-40k PLN.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Regionalne fundusze</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Śląski Fundusz Filmowy, Łódzkie, Mazowieckie. Wymagają kręcenia w regionie. Mniejsza konkurencja niż PISF.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Europejskie i międzynarodowe" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Kreatywna Europa (MEDIA)</strong> — Rozwój projektów, dystrybucja, szkolenia.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Eurimages</strong> — Koprodukcje europejskie. Minimum 2 kraje.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Erasmus+</strong> — Projekty edukacyjne i artystyczne. Idealne dla studentów.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Sprawdź Śląski Fundusz Filmowy">
          <p>Jako student Kieślowskiego masz naturalną przewagę w regionalnym funduszu. Sprawdź terminy.</p>
        </ActionStep>
        <ActionStep step={2} title="Przygotuj wniosek ćwiczeniowy">
          <p>Weź szablon PISF i wypełnij go dla swojego projektu. Nawet jeśli nie złożysz — nauczysz się formatu.</p>
        </ActionStep>
        <ActionStep step={3} title="Zaaplikuj o stypendium">
          <p>Młoda Polska, stypendium marszałka, fundacje korporacyjne. Szukaj szeroko. AI pomoże z wnioskiem.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
