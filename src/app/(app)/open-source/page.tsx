import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function OpenSourcePage() {
  return (
    <div>
      <JumboText text="OSSSS" accentVar="--k-ch-opensource" />

      <ChapterHeader
        title="Open Source AI"
        description="Twój GPU = Twoje studio. Open source AI daje Ci pełną kontrolę za $0."
        number={16}
        accentVar="--k-ch-opensource"
      />

      <SectionBlock title="Open source filmmaking stack" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>ComfyUI + Stable Diffusion / Flux</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Nieskończone generacje na Twoim GPU. Zero limitu, zero opłat, pełna kontrola. ControlNet dla precyzji, IP-Adapter dla spójności stylu, AnimateDiff dla wideo. Custom models trainowane na Twoim materiale.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Blender + AI plugins</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Pełne studio 3D za darmo. AI-assisted modeling, proceduralne tekstury z Stable Diffusion, camera tracking, compositing. Jeden program na VFX, motion graphics, previz.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Whisper + FFmpeg + yt-dlp</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Whisper = transkrypcja jakości profesjonalnej, offline, za darmo. FFmpeg = konwersja, kompresja, batch processing — Claude Code pisze Ci skrypty. yt-dlp = research referencji.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Dlaczego open source &gt; SaaS" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Zero limitu</strong> — Runway daje Ci 100 sekund/msc. ComfyUI daje Ci tyle ile GPU udźwignie. Iterujesz bez liczenia kredytów.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Pełna kontrola</strong> — Custom workflows, finetune modeli na Twoim materiale, reproducibility. Twój pipeline, Twoje reguły.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Prywatność</strong> — Twój scenariusz i materiał nie idą na serwery korporacji. Wszystko lokalnie.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Community</strong> — Open source = tysiące ludzi budujących narzędzia. Nowy model co tydzień. Nowy workflow co dzień.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Setup ComfyUI">
          <p>Zainstaluj. Załaduj Flux/SDXL. Wygeneruj storyboard dla jednej sceny. Claude Code pomoże z instalacją.</p>
        </ActionStep>
        <ActionStep step={2} title="FFmpeg pipeline z AI">
          <p>Claude Code pisze Ci skrypt: batch rename → transcode → resize → export. Automatyzacja post-produkcji.</p>
        </ActionStep>
        <ActionStep step={3} title="Whisper transkrypcja">
          <p>Zainstaluj Whisper. Transkrybuj próbną scenę. Porównaj z płatnym rozwiązaniem. Zobaczysz — open source wygrywa.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
