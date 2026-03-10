import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function LudziePage() {
  return (
    <div>
      <JumboText text="CREW" accentVar="--k-ch-people" />

      <ChapterHeader
        title="Ludzie"
        description="Skeleton crew + AI. Kiedy MUSISZ mieć człowieka, a kiedy wystarczy prompt."
        number={9}
        accentVar="--k-ch-people"
      />

      <SectionBlock title="AI zastąpiło te role" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Scenarzysta → Claude Opus</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Dialogi, struktura, przepisywanie — AI robi drafty, Ty robisz decyzje. Nie musisz pisać od zera. Musisz wiedzieć czego chcesz.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Colorista → DaVinci AI + LUTy</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>AI color matching, auto-balance, Magic Mask. Stylizujesz film sam. Tworzysz swój look — nie czekasz na kolorystę.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>VFX artist → Runway + ComfyUI</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Rotoskopia, ekrany zielone, generowanie tła, efekty — to co robiło studio 10 osób, robisz sam z AI w weekend.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Kompozytor → Suno / Udio</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Generujesz ścieżkę dźwiękową dopasowaną do emocji sceny. Iterujesz w minuty. Licencja czysta.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Kogo MUSISZ mieć" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Aktor</strong> — AI nie zastąpi ludzkiej twarzy na ekranie (jeszcze). Jeden dobry aktor &gt; 10 złych. Znajomy student aktorstwa, lokalny performer, nawet Ty sam.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Dźwiękowiec (opcja)</strong> — Jeśli kręcisz live-action, czysty dźwięk na planie to fundament. Ale Rode Wireless Go + AI noise removal = plan B dla solo.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Nikt więcej</strong> — Serio. Operator = Ty. Reżyser = Ty. Montażysta = Ty + AI. Gaffer = LED na statywie. AD = Claude z harmonogramem.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Mapuj swój film na role">
          <p>Każda scena: kto jest potrzebny fizycznie? Aktor? Statysta? Reszta = AI. Bądź bezwzględny.</p>
        </ActionStep>
        <ActionStep step={2} title="Znajdź jednego aktora">
          <p>Studenci aktorstwa szukają materiału do reela tak samo jak Ty. Win-win. Jeden dobry człowiek na ekranie wystarczy.</p>
        </ActionStep>
        <ActionStep step={3} title="Test: nakręć scenę solo">
          <p>Kamera na statywie, sam na planie. Zmontuj z AI. Jeśli to działa — nie potrzebujesz ekipy.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
