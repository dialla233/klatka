import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function PomyslPage() {
  return (
    <div>
      <JumboText text="POMYSL" accentVar="--k-ch-idea" />

      <ChapterHeader
        title="Pomysł"
        description="Skąd biorą się historie warte opowiedzenia? Jak znaleźć tę jedną, która nie daje spokoju."
        number={3}
        accentVar="--k-ch-idea"
      />

      <SectionBlock title="Gdzie szukać historii" delay={0}>
        <p className="mb-4">
          Najlepsze filmy nie biorą się z próżni. Biorą się z obsesji —
          tematem, postacią, pytaniem, które nie daje spokoju.
        </p>

        <div className="space-y-3">
          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Domena publiczna
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              60,000+ książek na Project Gutenberg. Baśnie, legendy, zapomniany realizm — historie, które
              czekają na współczesną reinterpretację. Użyj chatu AI żeby je przeszukać.
            </p>
          </div>

          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Niszowe historie prawdziwe
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Regionalne legendy, zapomniani bohaterowie, zdarzenia na marginesie historii.
              Śląsk sam w sobie jest kopalnią takich opowieści.
            </p>
          </div>

          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Twoje doświadczenie
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Co Cię boli? Co Cię zaskakuje? Jakie pytanie nie daje Ci spać?
              Personal storytelling to najsilniejszy punkt wyjścia.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Techniki generowania pomysłów" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>What If?</strong> — Co by było, gdyby...? Jedno pytanie, nieskończone możliwości.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Mashup</strong> — Połącz dwa niepowiązane światy. Noir + Śląsk. Sci-fi + babcia.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Perspektywa</strong> — Opowiedz znaną historię oczami kogoś innego.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Constraint</strong> — Ogranicz się: jeden pokój, jedna noc, jeden dialog.</span>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Wypisz 10 pytań, które nie dają Ci spokoju">
          <p>Nie wymyślaj — przypomnij sobie. Prawdziwe obsesje, nie szkolne ćwiczenia.</p>
        </ActionStep>
        <ActionStep step={2} title="Przeszukaj literaturę">
          <p>Użyj chatu AI — powiedz mu co Cię interesuje, a on przeszuka Project Gutenberg i zaproponuje teksty źródłowe.</p>
        </ActionStep>
        <ActionStep step={3} title="Napisz logline">
          <p>Jedno zdanie. Kto? Co robi? Dlaczego to ważne? Jeśli nie zmieścisz się w jednym zdaniu — szukaj dalej.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
