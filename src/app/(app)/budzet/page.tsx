import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function BudzetPage() {
  return (
    <div>
      <JumboText text="BUDŻT" accentVar="--k-ch-budget" />

      <ChapterHeader
        title="Budżet"
        description="AI zredukowało koszt filmu z $200k do $3k. Oto jak to liczyć."
        number={5}
        accentVar="--k-ch-budget"
      />

      <SectionBlock title="Co AI zastąpiło" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Scenarzysta → Claude</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Tradycyjnie: $5-15k za scenariusz. Teraz: Claude Opus pisze, przepisuje, analizuje strukturę — $20/msc. Ty jesteś reżyserem, AI jest maszyną do pisania.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>VFX team → Runway / Kling / ComfyUI</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Tradycyjnie: $20-100k za VFX. Teraz: Runway Gen-3 generuje ujęcia za $0.05/sek. ComfyUI na Twoim GPU — za darmo. Jeden człowiek robi robotę 10-osobowego studia.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Kompozytor + sound → Suno / ElevenLabs</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Tradycyjnie: $3-10k za muzykę. Teraz: Suno generuje soundtrack w 30 sekund. ElevenLabs robi foley i ambience. Koszt: $10-30/msc.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Na co faktycznie wydajesz" delay={0.1}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <div className="flex justify-between items-center mb-1">
              <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)" }}>AI stack</p>
              <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-accent)" }}>~$100/msc</p>
            </div>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Claude Pro ($20), Runway ($15-35), Midjourney ($10), Suno ($10), ElevenLabs ($5-22). To jest Twoje &quot;studio&quot;.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <div className="flex justify-between items-center mb-1">
              <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)" }}>Sprzęt (jednorazowo)</p>
              <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-accent)" }}>$1-3k</p>
            </div>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Mirrorless + dobry mikrofon + 2 panele LED. Albo: wynajmij na weekend za $200. AI upscaluje z 1080p do 4K.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <div className="flex justify-between items-center mb-1">
              <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)" }}>Ludzie + lokacja</p>
              <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-accent)" }}>$500-2k</p>
            </div>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Jedyny koszt, którego AI nie wyeliminuje (jeszcze). Aktor, lokacja, catering. Kręcisz 2-5 dni, nie 30.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Policz swój AI stack">
          <p>Otwórz spreadsheet. Wypisz subskrypcje AI. Policz miesięczny koszt. Porównaj z tradycyjnym budżetem.</p>
        </ActionStep>
        <ActionStep step={2} title="Stwórz budżet na $3k">
          <p>Poproś Claude o breakdown budżetu z pełnym AI pipeline. Daj mu swój projekt — dostaniesz realistyczny plan.</p>
        </ActionStep>
        <ActionStep step={3} title="Co MUSISZ mieć fizycznie?">
          <p>Kamera? Aktor? Lokacja? Lista absolutnego minimum. Resztę robi AI.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
