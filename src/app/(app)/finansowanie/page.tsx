import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function FinansowaniePage() {
  return (
    <div>
      <JumboText text="KASAA" accentVar="--k-ch-funding" />

      <ChapterHeader
        title="Finansowanie"
        description="Kiedy film kosztuje $3k, nie potrzebujesz PISF. Potrzebujesz strategii."
        number={6}
        accentVar="--k-ch-funding"
      />

      <SectionBlock title="Nowa ekonomia filmowa" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Self-fund z oszczędności</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Budżet $3k? Odłóż $500/msc przez pół roku. Żadnych wniosków, komisji, oczekiwania. Zaczynasz kiedy chcesz, robisz co chcesz. Total creative freedom.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>AI side hustle → film fund</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Rób AI-generated content na zlecenie. Social media video, reklamy z Runway, voice-overy z ElevenLabs. $500-2000/zlecenie. 3 zlecenia = budżet na film.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Crowdfunding z AI pitch</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>AI generuje Ci: trailer koncepcyjny (Runway), plakat (Midjourney), pitch deck (Claude), voice-over (ElevenLabs). Profesjonalny crowdfunding za $0.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Dlaczego tradycyjne granty to pułapka" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Czas</strong> — Wniosek do PISF to 3-6 miesięcy oczekiwania. W tym czasie mógłbyś nakręcić 3 filmy z AI.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Kontrola</strong> — Granty = kompromisy artystyczne. Self-funding = robisz dokładnie to, co chcesz.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Szybkość</strong> — AI pozwala iterować. Film nie wyszedł? Robisz następny za miesiąc. Granty tego nie pozwalają.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Wyjątek</strong> — Innovation grants (Horizon Europe, Creative Europe Innovation) — szukają dokładnie tego co robisz: AI + film.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zrób 1 płatne zlecenie z AI">
          <p>Znajdź kogoś kto potrzebuje wideo. Użyj swoich AI narzędzi. Zarobione → film fund.</p>
        </ActionStep>
        <ActionStep step={2} title="AI pitch package">
          <p>Wygeneruj: trailer koncepcyjny, plakat, one-pager. Cały kit promocyjny — zero kosztów, tylko AI.</p>
        </ActionStep>
        <ActionStep step={3} title="Policz: ile Ci potrzeba?">
          <p>Dokładna kwota. Podziel przez miesiące. Ustaw auto-przelew na konto &quot;film fund&quot;.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
