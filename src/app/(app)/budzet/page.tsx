import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function BudzetPage() {
  return (
    <div>
      <JumboText text="BUDZET" accentVar="--k-ch-budget" />

      <ChapterHeader
        title="Budżet"
        description="Jak zaplanować budżet studenckiego filmu? Ile naprawdę kosztuje produkcja?"
        number={5}
        accentVar="--k-ch-budget"
      />

      <SectionBlock title="Trzy poziomy budżetu" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              0–5 000 PLN — Guerrilla
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Telefon/lustrzanka, naturalny dźwięk, znajomi jako aktorzy, lokacje publiczne. AI generuje muzykę i efekty. Wystarczy na etiudę 5-15 min.
            </p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              5–20 000 PLN — Studencki
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Wypożyczony sprzęt, gaże symboliczne, catering, transport. Profesjonalny dźwięk. Realna jakość festiwalowa.
            </p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              20–100 000 PLN — Niskobudżetowy
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Pełna ekipa, wynajęte lokacje, ubezpieczenie, postprodukcja w studiu. Wymaga dofinansowania lub koproducenta.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Gdzie NIE oszczędzać" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Dźwięk</strong> — Zły dźwięk zabija film szybciej niż zły obraz.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Catering</strong> — Głodna ekipa to zła ekipa. Podstawa logistyki.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Ubezpieczenie</strong> — Jeden wypadek na planie może kosztować więcej niż cały film.</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Color grading</strong> — To robi różnicę między &quot;amatorskim&quot; a &quot;kinowym&quot;.</span>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Stwórz budżet w arkuszu">
          <p>Podziel na: pre-produkcja, produkcja, post-produkcja, marketing. AI pomoże Ci oszacować koszty.</p>
        </ActionStep>
        <ActionStep step={2} title="Zrób listę barterów">
          <p>Kto może pożyczyć sprzęt? Kto udostępni lokację? Co możesz załatwić bez pieniędzy?</p>
        </ActionStep>
        <ActionStep step={3} title="Oblicz koszt jednego dnia zdjęciowego">
          <p>Transport + catering + wynajem + gaże + rezerwa 15%. To Twoja jednostka planowania.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
