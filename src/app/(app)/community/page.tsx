import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function CommunityPage() {
  return (
    <div>
      <JumboText text="COMMUN" accentVar="--k-ch-community" />

      <ChapterHeader
        title="Community"
        description="Budowanie społeczności wokół swojego kina."
        number={17}
        accentVar="--k-ch-community"
      />

      <SectionBlock title="Gdzie budować społeczność" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Online</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Letterboxd (recenzje), MUBI (artowe kino), Discord/Telegram (grupy tematyczne), X/Twitter (film community). Buduj profil, komentuj, angażuj się.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Offline</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>DKF-y, kina studyjne, warsztaty, meetupy filmowe, hackathony kreatywne. Katowice ma silną scenę — korzystaj z niej.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Alumni network</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Absolwenci Kieślowskiego pracują w branży. LinkedIn, spotkania absolwentów, mentoring — najcenniejszy networking.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Personal brand" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Portfolio online</strong> — Vimeo + strona osobista. Minimalizm, jakość, łatwy dostęp.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Konsystencja</strong> — Publikuj regularnie. Nawet małe projekty budują obecność.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Autentyczność</strong> — Pokaż proces, nie tylko wynik. Ludzie łączą się z osobą, nie z produktem.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Dawaj wartość</strong> — Tutoriale, porady, behind-the-scenes. Pomagaj innym, a inni pomogą Tobie.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Załóż profil na Letterboxd">
          <p>Recenzuj filmy. Buduj smak filmowy publicznie. To przyciąga ludzi o podobnej wrażliwości.</p>
        </ActionStep>
        <ActionStep step={2} title="Zorganizuj pokaz">
          <p>Nawet mały — w barze, kawiarni, uczelni. Pokaż swój film + 2-3 filmy znajomych. Q&A po seansie.</p>
        </ActionStep>
        <ActionStep step={3} title="Znajdź mentora">
          <p>Ktoś 5-10 lat dalej na ścieżce. Absolwent uczelni, filmowiec z regionu. Jedna kawa = miesiące nauki.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
