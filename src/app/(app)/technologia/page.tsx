import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function TechnologiaPage() {
  return (
    <div>
      <JumboText text="STACK" accentVar="--k-ch-tech" />

      <ChapterHeader
        title="Technologia"
        description="Twój filmmaking stack. AI + kamera + laptop = studio produkcyjne."
        number={8}
        accentVar="--k-ch-tech"
      />

      <SectionBlock title="AI Video Generation" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Sora / Runway Gen-3 / Kling 2.0</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Generujesz ujęcia, których nie możesz nakręcić. Krajobraz marsjański? Lata 20.? Podwodna scena? Text-to-video + image-to-video. Mieszaj z materiałem kręconym — widz nie rozróżni.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>ComfyUI + Stable Diffusion</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Open source. Twój GPU = Twoje studio VFX. Nieskończone generacje, zero opłat. Custom modele, ControlNet, IP-Adapter. Pełna kontrola nad każdym pixelem.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Midjourney / Flux / DALL-E</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Storyboardy w minuty zamiast dni. Concept art, moodboardy, plakaty. Reżyser wizualny, nie rysownik — opisujesz, AI rysuje.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="AI Audio + Post" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>ElevenLabs</strong> — Voice cloning, lector, dubbing w 29 językach. Sound effects z text-to-SFX.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Suno / Udio</strong> — Soundtrack na zamówienie. &quot;Ambient tension like Jonny Greenwood&quot; — gotowe w 30 sekund.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Topaz Video AI</strong> — Upscale 1080p → 4K, slow-mo z interpolacją. Ratujesz materiał, którego nie da się ponownie nakręcić.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>DaVinci Resolve + AI</strong> — Magic Mask, AI color matching, voice isolation. Darmowa wersja = 95% Studio. Montaż, grading, VFX — jedna apka.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Minimum viable camera" delay={0.15}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Kamera</strong> — Sony A7III / Fuji X-T5 / iPhone 15 Pro z Blackmagic Camera app. LOG, 10-bit, 4K. Reszta to grading.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Dźwięk</strong> — Rode VideoMic NTG lub Zoom H1n. AI usunie szum (Adobe Podcast AI), ale czysty dźwięk to fundament.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Światło</strong> — 2x Aputure MC / Nanlite Litolite. Małe, RGB, na akumulator. Na plan wchodzisz z plecakiem, nie z vanem.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zainstaluj ComfyUI">
          <p>Twój GPU to Twoje studio VFX. Zainstaluj, załaduj model, wygeneruj pierwsze ujęcie. Claude Code pomoże z setupem.</p>
        </ActionStep>
        <ActionStep step={2} title="Test Runway / Kling">
          <p>Weź jedno ujęcie z kamery. Daj do image-to-video. Porównaj z oryginałem. Naucz się promptować wideo.</p>
        </ActionStep>
        <ActionStep step={3} title="Zbuduj swój stack">
          <p>Wypisz: co generuję (AI), co kręcę (kamera), co mieszam. Twój osobisty pipeline produkcyjny.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
