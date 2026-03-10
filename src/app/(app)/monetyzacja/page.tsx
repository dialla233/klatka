import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function MonetyzacjaPage() {
  return (
    <div>
      <JumboText text="REVENUE" accentVar="--k-ch-monetization" />

      <ChapterHeader
        title="Monetyzacja"
        description="AI obniżyło koszty, ale nie przychody. Nowe źródła dochodu dla one-person studio."
        number={13}
        accentVar="--k-ch-monetization"
      />

      <SectionBlock title="Revenue streams" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>AI video freelancing</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Firmy potrzebują wideo. Ty masz AI stack, którego oni nie rozumieją. Social media ads, explainer videos, product shots — $500-5000/projekt. Twój film funduje się sam.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Kursy / tutorials</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Nauczysz się czegoś → nagraj kurs. &quot;Jak robię VFX z ComfyUI&quot;, &quot;AI filmmaking pipeline&quot;. Udemy, YouTube, własna platforma. Passive income z wiedzy, którą i tak zdobywasz.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Direct-to-audience sales</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Gumroad / Stripe — sprzedawaj film bezpośrednio. Pay-what-you-want. Pakiety: film + making-of + soundtrack + storyboard AI. $5-50 per sale, zero pośredników.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Ekonomia one-person studio" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Koszt filmu</strong> — $3k (AI stack + sprzęt + aktor). Jeden freelance projekt pokrywa budżet.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Break-even</strong> — 60 sprzedaży po $50 albo 300 po $10. Albo: 1 nagroda festiwalowa. Albo: 2 zlecenia freelance.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Efekt kuli śnieżnej</strong> — Każdy film buduje portfolio → więcej zleceń → więcej budżetu → lepszy film → powtórz.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Własność IP</strong> — Nie pracujesz na cudzych warunkach. Twój film, Twoje prawa, Twój revenue. Na zawsze.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Pierwsze zlecenie AI video">
          <p>Znajdź firmę, która potrzebuje wideo. Pokaż reel z AI. Zrób za $500. Reinwestuj w film.</p>
        </ActionStep>
        <ActionStep step={2} title="Policz break-even">
          <p>Ile kosztuje film? Ile musisz sprzedać? Przy jakiej cenie? Claude pomoże zrobić model finansowy.</p>
        </ActionStep>
        <ActionStep step={3} title="Zacznij building in public">
          <p>Dokumentuj swój AI workflow. To content, który się monetyzuje sam — kursy, tutoriale, consulting.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
