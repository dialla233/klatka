import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function MarketingPage() {
  return (
    <div>
      <JumboText text="PROMO" accentVar="--k-ch-marketing" />

      <ChapterHeader
        title="Marketing"
        description="Jeden człowiek z AI = cały dział marketingu. Plakaty, trailery, social — automat."
        number={12}
        accentVar="--k-ch-marketing"
      />

      <SectionBlock title="AI marketing machine" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Plakaty → Midjourney / Flux</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>10 wariantów plakatu w 20 minut. A/B testuj na social media. Tradycyjnie: grafik za $2k i 2 tygodnie. Teraz: prompt + iteracja + gotowe.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Teasery / trailery → Runway + ElevenLabs</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Trailer koncepcyjny PRZED nakręceniem filmu. Teaser z wygenerowanych ujęć. Voice-over z AI. Soundtrack z Suno. Cały pipeline za godzinę.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Social content → Claude + n8n</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Claude pisze 30 postów naraz. n8n scheduluje posty automatycznie. Behind-the-scenes, making-of, cytaty z filmu — content pipeline na miesiąc w 2 godziny.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Press kit automat" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>EPK (Electronic Press Kit)</strong> — Claude pisze: synopsis (3 wersje: 25/50/150 słów), bio reżysera, notatkę reżyserską, dane techniczne. W 10 minut.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Still photography</strong> — Midjourney generuje promotional stills w stylu Twojego filmu. Albo: AI upscaluje i stylizuje kadry z filmu.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Press outreach</strong> — Claude personalizuje e-maile do 50 dziennikarzy filmowych. Każdy mail inny, dopasowany do ich profilu. Mass outreach, personal touch.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Wygeneruj 5 plakatów">
          <p>Midjourney / Flux. 5 różnych kierunków wizualnych. Pokaż znajomym — który działa najlepiej?</p>
        </ActionStep>
        <ActionStep step={2} title="EPK w 30 minut">
          <p>Daj Claude opis filmu. Poproś o pełny EPK: synopsy, bio, notatkę reżyserską, dane techniczne. Copy-paste do PDF.</p>
        </ActionStep>
        <ActionStep step={3} title="Content calendar na miesiąc">
          <p>Claude generuje 30 postów. Rozplanuj: Instagram, X, TikTok. Zaplanuj posty z n8n albo Buffer.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
