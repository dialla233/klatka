import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function LudziePage() {
  return (
    <div>
      <JumboText text="LUDZIE" accentVar="--k-ch-people" />

      <ChapterHeader
        title="Ludzie"
        description="Jak budować ekipę i pracować z ludźmi na planie filmowym?"
        number={9}
        accentVar="--k-ch-people"
      />

      <SectionBlock title="Kluczowe role" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Na planie studenckim</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Reżyser, operator, dźwiękowiec, asystent reżysera (AD), oświetlacz. Minimum 4-5 osób na profesjonalny krótki metraż.
            </p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Praca z aktorami</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Casting: e-casting.pl, grupy aktorskie, szkoły teatralne. Próby przed planem — minimum 2 spotkania. Komunikacja: mów co czuje postać, nie jak ma zagrać.
            </p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Dokumenty</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Umowa o dzieło z cesją praw, model release (zgoda na wizerunek), NDA jeśli potrzebne. Nie kręć bez podpisanych dokumentów.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Zasady pracy na planie" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Szanuj czas</strong> — Zacznij punktualnie. Kończ na czas. Call sheet to obietnica.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Karm ekipę</strong> — Ciepły posiłek co 6 godzin. To nie luksus, to konieczność.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Komunikuj się jasno</strong> — Każdy musi wiedzieć co robimy i dlaczego.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Bądź otwarty na pomysły</strong> — Najlepsze ujęcia często przychodzą z planu.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zrób listę ekipy">
          <p>Kogo potrzebujesz? Kogo znasz? Kogo musisz znaleźć? Zacznij od ludzi, którym ufasz.</p>
        </ActionStep>
        <ActionStep step={2} title="Przeprowadź casting">
          <p>Nawet na projekt studencki — przygotuj sceny do odczytania, nagraj self-tape&apos;y, wybierz świadomie.</p>
        </ActionStep>
        <ActionStep step={3} title="Przygotuj umowy">
          <p>AI pomoże Ci stworzyć szablon umowy o dzieło z cesją praw autorskich.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
