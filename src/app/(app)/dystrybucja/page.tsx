import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function DystrybucjaPage() {
  return (
    <div>
      <JumboText text="DYSTR" accentVar="--k-ch-distribution" />

      <ChapterHeader
        title="Dystrybucja"
        description="Self-distribution z AI. Nie potrzebujesz dystrybutora. Potrzebujesz strategii."
        number={11}
        accentVar="--k-ch-distribution"
      />

      <SectionBlock title="Ścieżki dystrybucji 2025" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Festiwale z AI strategy</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Film Freeway → Claude analizuje Ci 200 festiwali i wybiera 20 najlepszych dla Twojego filmu. AI pisze synopsy w 6 językach. AI generuje DCP-ready plakat. Submissions za $200 zamiast $2000.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Direct-to-audience</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Własna strona (Next.js + Vercel), Vimeo On Demand, YouTube Premiere. Zbierasz e-maile, budujesz publiczność, kontrolujesz revenue. Zero pośredników.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Global z AI subtitles</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>ElevenLabs dubbing w 29 językach. Whisper do transkrypcji. AI tłumaczy napisy z kontekstem kulturowym. Twój film z Katowic ogląda ktoś w Tokio — bez dystrybutora.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Twoja strona dystrybucyjna" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Next.js + Vercel</strong> — Landing page filmu: trailer, synopsis, press kit, link do oglądania. Deploy w 30 minut. Claude Code Ci to napisze.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Stripe / Gumroad</strong> — Pay-what-you-want albo fixed price. Widzowie płacą Tobie bezpośrednio. Zero prowizji dystrybutora.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Analytics</strong> — Vercel Analytics + Plausible. Wiesz skąd przychodzą widzowie, co klikają, ile oglądają. Data-driven distribution.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Film Freeway + Claude">
          <p>Załóż profil. Daj Claude opis filmu — niech wybierze top 15 festiwali z uzasadnieniem i terminami.</p>
        </ActionStep>
        <ActionStep step={2} title="Landing page filmu">
          <p>Next.js, Vercel, własna domena. Trailer, synopsis, press kit. Claude Code pisze, Ty deployszujesz.</p>
        </ActionStep>
        <ActionStep step={3} title="Napisy AI w 5 językach">
          <p>Whisper → transkrypcja → Claude → tłumaczenie z kontekstem → SRT/VTT. Globalny zasięg za $0.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
