import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function MonetyzacjaPage() {
  return (
    <div>
      <JumboText text="PRZYCH" accentVar="--k-ch-monetization" />

      <ChapterHeader
        title="Monetyzacja"
        description="Jak zarabiać na filmach i twórczości filmowej?"
        number={13}
        accentVar="--k-ch-monetization"
      />

      <SectionBlock title="Źródła przychodów" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Festiwale i nagrody</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Nagrody pieniężne: 2-50k PLN. Licencje festiwalowe. Prestiż otwiera drzwi do dalszego finansowania.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Freelancing</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Stawki dzienne operatora: 800-3000 PLN. Buduj reel z projektów osobistych. Klienci kupują styl, nie CV.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Stock footage</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Pond5, Artgrid, Shutterstock. Kręcisz raz, zarabiasz wielokrotnie. Drony, timelapse, lifestyle — popyt stały.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.1}>
        <ActionStep step={1} title="Stwórz swój reel">
          <p>60-90 sekund najlepszych kadrów. Muzyka, tempo, Twój styl. To Twoja wizytówka na lata.</p>
        </ActionStep>
        <ActionStep step={2} title="Wycena swoich usług">
          <p>Policz: sprzęt + czas + postprodukcja + zysk. AI pomoże Ci ustalić stawki na polski rynek.</p>
        </ActionStep>
        <ActionStep step={3} title="Zacznij od jednego źródła pasywnego">
          <p>Stock footage? YouTube? Kursy? Wybierz jedno i zacznij regularnie publikować.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
