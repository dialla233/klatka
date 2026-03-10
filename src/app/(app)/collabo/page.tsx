import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function CollaboPage() {
  return (
    <div>
      <JumboText text="COLLAB" accentVar="--k-ch-collabo" />

      <ChapterHeader
        title="Collabo"
        description="AI jako creative partner. Remote collaboration. Globalne koprodukcje z laptopa."
        number={14}
        accentVar="--k-ch-collabo"
      />

      <SectionBlock title="AI jako Twój zespół kreatywny" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Claude = scenarzysta + dramaturg + konsultant</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Dialogujesz z AI jak z drugim twórcą. Rzucasz pomysły, AI odpowiada. &quot;A co jeśli bohater kłamie?&quot; — Claude daje 5 wariantów w 30 sekund. Brainstorming 24/7, zero ego.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Remote co-production</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Znajdź filmowca w Berlinie, Tokio, São Paulo. Wy kręcicie, AI łączy materiał. Wspólny repo na GitHub, shared Runway workspace, Claude koordynuje. Koprodukcja bez biurokracji Eurimages.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Muzycy + AI = teledyski</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Niezależny muzyk potrzebuje klipu. Ty masz AI VFX. Kręcisz minimum live-action, resztę generujesz. Muzyk dostaje klip na światowym poziomie, Ty dostajesz reel i portfolio.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Narzędzia do remote collab" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>GitHub</strong> — Scenariusz, assets, configs w repo. Pull requesty na zmiany w scenariuszu. Issues jako task tracker.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Frame.io / Dropbox Replay</strong> — Review wideo z timecoded komentarzami. Remote dailies jak w prawdziwym studiu.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Discord</strong> — War room produkcji. Kanały na scenariusz, zdjęcia, post, marketing. Boty AI odpowiadają na pytania.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Shared AI workspaces</strong> — Runway Teams, Midjourney org. Współdzielone generacje, wspólny styl wizualny.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="AI brainstorm session">
          <p>Otwórz Claude. Daj mu scenariusz. Gadaj jak z partnerem kreatywnym — 30 minut, bez filtra. Zapisz najlepsze pomysły.</p>
        </ActionStep>
        <ActionStep step={2} title="Znajdź remote collaborator">
          <p>Reddit r/filmmakers, Discord Film Twitter, Letterboxd. Ktoś z innego kraju, innej perspektywy. Zaproponuj projekt.</p>
        </ActionStep>
        <ActionStep step={3} title="Zrób AI music video">
          <p>Znajdź lokalnego muzyka. Nakręć 20% materiału live. Wygeneruj 80% z AI. Pokaż mu — jeśli się spodoba, masz collab.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
