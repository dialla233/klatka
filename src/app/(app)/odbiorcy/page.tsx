import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function OdbiorcyPage() {
  return (
    <div>
      <JumboText text="WIDZ" accentVar="--k-ch-audience" />

      <ChapterHeader
        title="Odbiorcy"
        description="AI analizuje rynek za Ciebie. Wiesz dokładnie kto i gdzie obejrzy Twój film."
        number={10}
        accentVar="--k-ch-audience"
      />

      <SectionBlock title="AI-powered audience research" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Claude jako analityk rynku</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Daj Claude opis filmu → dostajesz: persona widza, porównanie z podobnymi filmami, rekomendację platform, strategię festiwalową. Research, który kosztował $5k u konsultanta — za $20/msc.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Testowanie z AI-generated trailers</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Runway generuje trailer koncepcyjny ZANIM nakręcisz film. Puść go 50 osobom. Zbierz feedback. Iteruj concept, nie gotowy film.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Platforma = Twoja decyzja artystyczna</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Festiwal ≠ jedyna ścieżka. YouTube = 2.7 mld użytkowników. Vimeo Staff Pick = prestiż. MUBI = arthouse. TikTok = viralowy zasięg. Wybierz świadomie.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Budowanie publiczności PRZED premierą" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Building in public</strong> — Pokazuj proces. Behind-the-scenes z AI generacją. Ludzie kochają patrzeć jak powstaje film z promptów.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>AI content machine</strong> — Claude pisze posty, Midjourney robi grafiki, Runway generuje teasery. Jeden człowiek = cały dział marketingu.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Newsletter / Discord</strong> — Zbieraj widzów jeszcze w pre-produkcji. Na premierze masz już 500 osób, które czekają na Twój film.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Persona widza z Claude">
          <p>Opisz swój film Claude. Poproś o: 3 persony idealnego widza, gdzie ich znaleźć, jaki content ich przyciągnie.</p>
        </ActionStep>
        <ActionStep step={2} title="AI trailer test">
          <p>Wygeneruj 30-sekundowy teaser z Runway/Kling na bazie konceptu. Puść znajomym. Co rezonuje?</p>
        </ActionStep>
        <ActionStep step={3} title="Zacznij building in public">
          <p>Pierwszy post: &quot;Robię film z AI. Oto mój process.&quot; Instagram / X / TikTok. Dokumentuj, nie perfekuj.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
