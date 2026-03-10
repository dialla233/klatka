import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function OdbiorcyPage() {
  return (
    <div>
      <JumboText text="WIDZOW" accentVar="--k-ch-audience" />

      <ChapterHeader
        title="Grupa odbiorców"
        description="Dla kogo robisz film? Zdefiniuj swoją publiczność."
        number={10}
        accentVar="--k-ch-audience"
      />

      <SectionBlock title="Kto jest Twoim widzem?" delay={0}>
        <p className="mb-4">Nie robisz filmu &quot;dla wszystkich&quot;. Robisz film dla kogoś konkretnego. Im lepiej znasz swojego widza, tym lepszy zrobisz film.</p>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Festivalowa publiczność</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Cinefile, krytycy, programerzy. Cenią oryginalność, formę, punkt widzenia. Nie potrzebujesz szerokiej historii — potrzebujesz głębokiej.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Publiczność online</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>YouTube, Vimeo, TikTok. Krótsze formaty, szybki hook, akcesybilność. Algorytm decyduje o zasięgu.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Lokalna społeczność</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>DKF, kina studyjne, pokazy specjalne. Bezpośredni kontakt z widzem, Q&A, budowanie relacji.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.1}>
        <ActionStep step={1} title="Opisz swojego idealnego widza">
          <p>Wiek, zainteresowania, co ogląda, gdzie ogląda. Stwórz personę. AI pomoże Ci ją rozwinąć.</p>
        </ActionStep>
        <ActionStep step={2} title="Znajdź 5 filmów dla tej samej publiczności">
          <p>Co ogląda Twój widz? Jakie filmy go poruszają? Gdzie je odkrywa?</p>
        </ActionStep>
        <ActionStep step={3} title="Wybierz platformę premierową">
          <p>Festiwal? YouTube? Pokaz lokalny? Zdecyduj PRZED post-produkcją — wpływa na format i długość.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
