import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function FinansowaniePage() {
  return (
    <div>
      <JumboText text="FINANS" accentVar="--k-ch-finance" />

      <ChapterHeader
        title="Finansowanie"
        description="Granty, crowdfunding, sponsorzy — skąd wziąć kasę na film?"
        number={6}
        accentVar="--k-ch-finance"
      />

      <SectionBlock title="Źródła finansowania" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              PISF — Polski Instytut Sztuki Filmowej
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Programy mikrobudżetowe (do 100k PLN), debiuty, filmy krótkometrażowe. Nabory 2-3x w roku. Wymaga scenariusza i kosztorysu.
            </p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Crowdfunding
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Patronite (stałe wsparcie), Zrzutka.pl (jednorazowe zbiórki), Kickstarter (międzynarodowe). Wymaga community i dobrego pitchu wideo.
            </p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Regionalne fundusze filmowe
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Śląska Filmowa, Łódź Film Commission, Mazovia Warsaw Film Commission. Mniejsza konkurencja, lokalne wsparcie.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Jak przygotować pitch" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Logline</strong> — Jedno zdanie, które sprzedaje film.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Treatment</strong> — 2-5 stron opisu fabularnego.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Lookbook</strong> — Wizualne referencje: kadry, moodboard, paleta kolorów.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Pitch deck</strong> — 10-15 slajdów: kto, co, dla kogo, za ile.</span>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Sprawdź terminy PISF">
          <p>Wejdź na pisf.pl i zanotuj najbliższy nabór. AI pomoże Ci zrozumieć wymagania.</p>
        </ActionStep>
        <ActionStep step={2} title="Przygotuj lookbook">
          <p>Użyj Midjourney lub Flux do wygenerowania kadrów koncepcyjnych. To Twoja wizualna obietnica.</p>
        </ActionStep>
        <ActionStep step={3} title="Napisz pitch w 60 sekund">
          <p>Nagraj się na telefon. Jeśli nie potrafisz opowiedzieć filmu w minutę — musisz dopracować pomysł.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
