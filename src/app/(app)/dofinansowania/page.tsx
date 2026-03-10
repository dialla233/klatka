import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function DofinansowaniaPage() {
  return (
    <div>
      <JumboText text="GRANTY" accentVar="--k-ch-grants" />

      <ChapterHeader
        title="Granty AI+Film"
        description="Nie PISF na tradycyjny film. Innovation grants na to, co robisz: AI + kino."
        number={15}
        accentVar="--k-ch-grants"
      />

      <SectionBlock title="Granty, które pasują do Twojego podejścia" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Creative Europe — Innovation Lab</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Szukają projektów łączących technologię z kulturą. AI filmmaking = idealny fit. €60-200k. Wymaga koproducenta z innego kraju EU — ale z remote collab to łatwe.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Horizon Europe — Culture &amp; Creativity</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Mega budżety na R&amp;D. &quot;AI-driven storytelling&quot;, &quot;generative media production&quot; — to Twoje słowa kluczowe. Wymaga konsorcjum, ale uczelnia Kieślowskiego może być partnerem.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Runway AI Film Festival</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Festiwal + granty od Runway specjalnie na filmy z AI. Cash prizes, mentoring, distribution. Twoja naturalna arena.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="AI pisze Ci wniosek" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Claude + szablon</strong> — Daj Claude wytyczne grantu + opis projektu. Dostaniesz draft wniosku w 30 minut. Ty redagujesz, nie piszesz od zera.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Budget justification</strong> — Claude rozpisuje budżet w formacie wymaganym przez fundację. Knows the lingo.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Impact statement</strong> — &quot;Jak AI demokratyzuje produkcję filmową&quot; — Claude pisze to lepiej niż grant writer za $3k.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Pitch deck</strong> — Midjourney robi visual identity, Claude pisze copy, Canva/Figma składa. Profesjonalny pitch za $0.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Research: granty AI + creative">
          <p>Poproś Claude o listę aktualnych grantów łączących AI z kulturą/filmem. EU, US, lokalne. Z terminami i kwotami.</p>
        </ActionStep>
        <ActionStep step={2} title="Wniosek ćwiczeniowy z AI">
          <p>Weź jeden grant. Daj Claude wytyczne + opis projektu. Niech napisze draft. Ty redagujesz. Ćwicz pipeline.</p>
        </ActionStep>
        <ActionStep step={3} title="Pitch deck z AI">
          <p>10 slajdów: problem, rozwiązanie, Twój film, AI approach, budget, timeline, team, impact. AI generuje wszystko.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
