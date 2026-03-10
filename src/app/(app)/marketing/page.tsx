import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function MarketingPage() {
  return (
    <div>
      <JumboText text="MARKET" accentVar="--k-ch-marketing" />

      <ChapterHeader
        title="Marketing"
        description="Jak wypromować swój film? Social media, PR, premiera."
        number={12}
        accentVar="--k-ch-marketing"
      />

      <SectionBlock title="Materiały marketingowe" delay={0}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Plakat</strong> — Jeden kadr, który mówi wszystko. Midjourney pomoże z konceptem.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Trailer</strong> — 60-90 sekund. Hook w 3 sekundy. Nie spoileruj zakończenia.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>BTS (Behind the Scenes)</strong> — TikToki/Reelsy z planu. Ludzie kochają proces.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Press kit (EPK)</strong> — Synopsis, biogramy, stills, plakat, dane techniczne. PDF + folder z materiałami.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Social media strategy" delay={0.1}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Instagram / TikTok</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>BTS content, frame studies, color grading before/after, gear reviews. Buduj brand filmowca, nie tylko filmy.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>YouTube</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Vlogi produkcyjne, tutoriale, breakdowny. Dłuższy format = głębsza relacja z widzem. Monetyzowalny.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zacznij dokumentować proces">
          <p>Od dziś. Każdy etap to content. Telefon w kieszeni, 30 sekund dziennie. Potem zmontuj.</p>
        </ActionStep>
        <ActionStep step={2} title="Stwórz EPK">
          <p>Nawet dla projektu studenckiego. Synopsis, 5 stills, 1 plakat, dane techniczne. AI pomoże z tekstami.</p>
        </ActionStep>
        <ActionStep step={3} title="Zaplanuj premierę">
          <p>Pokaz + Q&A + networking. Zaproś ludzi z branży. Jeden dobry pokaz &gt; 100 lajków online.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
