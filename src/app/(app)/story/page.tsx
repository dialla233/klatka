import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function StoryPage() {
  return (
    <div>
      <JumboText text="STORY" accentVar="--k-ch-story" />

      <ChapterHeader
        title="Story"
        description="Jak rozwinąć pomysł w pełną historię filmową? Struktura, bohater, konflikt."
        number={4}
        accentVar="--k-ch-story"
      />

      <SectionBlock title="Struktura narracyjna" delay={0}>
        <p className="mb-4">
          Każda dobra historia ma kręgosłup. Nie musisz go widzieć — ale musi tam być.
        </p>

        <div className="space-y-3">
          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Trzy akty
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Setup → Konfrontacja → Rozwiązanie. Najprostsza i najbardziej uniwersalna struktura.
              Nie ogranicza — daje ramę.
            </p>
          </div>

          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Save the Cat! Beat Sheet
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              15 beats od &quot;Opening Image&quot; do &quot;Final Image&quot;.
              Konkretna mapa — idealna do etiud i krótkiego metrażu.
            </p>
          </div>

          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Minimalizm narracyjny
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Kieślowski, Bresson, Varda — mniej znaczy więcej. Obraz mówi za dialog.
              Milczenie jest częścią fabuły. Dla operatora — idealne podejście.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Bohater" delay={0.1}>
        <p className="mb-3">
          Nie potrzebujesz bohatera &quot;sympatycznego&quot;. Potrzebujesz bohatera, który czegoś chce
          i czegoś się boi. To wystarczy.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Pragnienie</strong> — Czego bohater chce na powierzchni?</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Potrzeba</strong> — Czego naprawdę potrzebuje, ale tego nie wie?</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Flaw</strong> — Co go powstrzymuje? Jaki jest jego błąd?</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Arc</strong> — Czy bohater się zmienia? Jak?</span>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Napisz bio bohatera">
          <p>Nie fabularną — ludzką. Skąd jest? Co je na śniadanie? Czego żałuje? AI Ci pomoże to rozwinąć.</p>
        </ActionStep>
        <ActionStep step={2} title="Zmapuj 3-aktową strukturę">
          <p>Jeden A4. Akt I: co się wydarza? Akt II: jak eskaluje? Akt III: jak się kończy?</p>
        </ActionStep>
        <ActionStep step={3} title="Napisz scenę kluczową">
          <p>Nie od początku — od punktu zwrotnego. Scena, która zmienia wszystko. Reszta ułoży się wokół niej.</p>
        </ActionStep>
        <ActionStep step={4} title="Znajdź referencje filmowe">
          <p>Użyj chatu żeby znaleźć filmy z podobną strukturą lub tematem. Uczenie się od mistrzów to nie plagiat — to rzemiosło.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
