import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function ProjektPage() {
  return (
    <div>
      <JumboText text="PROJK" accentVar="--k-ch-project" />

      <ChapterHeader
        title="Projekt"
        description="Zarządzanie filmem jak software — z automatyzacją, pipeline'ami i AI."
        number={7}
        accentVar="--k-ch-project"
      />

      <SectionBlock title="One-person production pipeline" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Claude Code = Twój AD</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Breakdown scenariusza, shot list, harmonogram — Claude generuje w minuty to, co AD robi tygodniami. MCP servery podłączone do kalendarza, plików, bazy danych.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>n8n = automatyzacja produkcji</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Webhook → transkrypcja dailies → auto-log do bazy → powiadomienie. Nowy plik w Dropbox → auto-backup → rename → katalogowanie. Zero manualnej roboty.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Next.js + Vercel = production hub</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Dashboard produkcji: status scen, timeline, media assets, notatki. Deploy na Vercel — production hub dostępny z telefonu na planie.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Dev tools → film tools" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Git</strong> — Wersjonowanie scenariusza. Każda wersja zapisana, diff między wersjami, branch na alternatywne zakończenia.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>GitHub Projects</strong> — Kanban: pre-produkcja → zdjęcia → post → dystrybucja. Każda scena to issue.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Claude Code</strong> — Pisze Ci skrypty: FFmpeg pipeline&apos;y, batch processing, automatyczne renaming plików.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Supabase / NeonDB</strong> — Baza danych produkcji. Casting, lokacje, sprzęt, harmonogram — wszystko queryable.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Postaw production hub">
          <p>Next.js na Vercel. Dashboard z listą scen, statusami, timeline&apos;em. Claude Code napisze w godzinę.</p>
        </ActionStep>
        <ActionStep step={2} title="Scenariusz w Git">
          <p>Markdown + Git. Każda wersja to commit. Branch &quot;alt-ending&quot;. Diff między wersjami. Profesjonalny workflow.</p>
        </ActionStep>
        <ActionStep step={3} title="Jeden n8n workflow">
          <p>Nowy plik → auto-rename → log do spreadsheet. Prosty start, potem budujesz dalej.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
