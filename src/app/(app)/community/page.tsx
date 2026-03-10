import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function CommunityPage() {
  return (
    <div>
      <JumboText text="TRIBE" accentVar="--k-ch-community" />

      <ChapterHeader
        title="Community"
        description="Jeden filmowiec z AI buduje tribe 10k ludzi. Building in public = Twoja supermoc."
        number={17}
        accentVar="--k-ch-community"
      />

      <SectionBlock title="Building in public" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Dokumentuj, nie perfekuj</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Pokaż swój AI workflow. Jak generujesz ujęcia, jak piszesz scenariusz z Claude, jak robisz VFX sam. Ludzie fascynują się procesem bardziej niż produktem.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>AI content engine</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Claude pisze thready, posty, newslettery. Midjourney robi wizuale. Runway generuje short-form content. Jeden człowiek produkuje content jak 5-osobowy team.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>One-person studio brand</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Nie jesteś &quot;studentem filmowym&quot;. Jesteś one-person AI film studio. Logo (Midjourney), strona (Next.js + Vercel), newsletter (Resend), reel (Twój materiał + AI). Personal brand za $0.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Gdzie budować tribe" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>X / Twitter</strong> — Film AI community jest tu. Thready o workflow, breakdown ujęć, behind-the-scenes. Hashtagów: #AIFilmmaking #RunwayML #ComfyUI.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>YouTube</strong> — Tutoriale i making-of. &quot;How I made this VFX shot with ComfyUI&quot;. Searchable content = long-term growth.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Discord</strong> — Zbuduj serwer wokół swojego projektu. Behind-the-scenes, early access, Q&amp;A. 100 zaangażowanych ludzi &gt; 10k passive followers.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Newsletter</strong> — Resend + Next.js. Cotygodniowy update: co zrobiłeś, czego się nauczyłeś, co planujesz. E-mail &gt; algorytm social media.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Pierwszy thread">
          <p>X / Twitter. &quot;Robię krótkometrażówkę z AI. Oto mój stack i process. 🧵&quot; — 5-10 tweetów z wizualami. Claude pisze, Ty redagujesz.</p>
        </ActionStep>
        <ActionStep step={2} title="Strona one-person studio">
          <p>Next.js + Vercel. O Tobie, Twój reel, Twój blog, kontakt. Claude Code pisze, Midjourney robi visual identity.</p>
        </ActionStep>
        <ActionStep step={3} title="Zacznij newsletter">
          <p>Resend albo Buttondown. Pierwszy mail: &quot;Dlaczego robię film z AI&quot;. Zbieraj subskrybentów od dnia 1.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
