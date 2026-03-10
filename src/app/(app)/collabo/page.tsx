import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function CollaboPage() {
  return (
    <div>
      <JumboText text="COLLBO" accentVar="--k-ch-collabo" />

      <ChapterHeader
        title="Collabo"
        description="Kolaboracje, partnerstwa, koprodukcje — razem dalej."
        number={14}
        accentVar="--k-ch-collabo"
      />

      <SectionBlock title="Rodzaje kolaboracji" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Koprodukcja studencka</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Uczelnie partnerskie, Erasmus film projects, CILECT network. Twoja uczelnia ma kontakty — korzystaj z nich.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Kolaboracje z muzykami</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Teledyski to idealny format na eksperyment wizualny. Muzyk dostaje klip, Ty dostajesz portfolio i swobodę twórczą.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Branded content</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Marki szukają filmowców z wizją. Nie chodzi o reklamę — chodzi o storytelling z produktem w tle.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.1}>
        <ActionStep step={1} title="Napisz do 3 muzyków">
          <p>Znajdź lokalnych artystów, którzy potrzebują teledysku. Zaproponuj współpracę barterową.</p>
        </ActionStep>
        <ActionStep step={2} title="Sprawdź Erasmus film projects">
          <p>Zapytaj dziekanat o programy wymiany. Koprodukcja międzynarodowa wygląda świetnie w CV.</p>
        </ActionStep>
        <ActionStep step={3} title="Zbuduj portfolio kolaboracyjne">
          <p>Każda współpraca to nowy materiał do reela. Dokumentuj wszystko.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
