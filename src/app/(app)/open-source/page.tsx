import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function OpenSourcePage() {
  return (
    <div>
      <JumboText text="OPEN" accentVar="--k-ch-opensource" />

      <ChapterHeader
        title="Open Source"
        description="Darmowe narzędzia profesjonalnej jakości. Filozofia otwartości w filmie."
        number={16}
        accentVar="--k-ch-opensource"
      />

      <SectionBlock title="Narzędzia open source" delay={0}>
        <div className="space-y-3">
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>Blender</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Pełne studio 3D: modelowanie, animacja, compositing, rendering. Darmowe. Użyte w &quot;Next Gen&quot; (Netflix).</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>DaVinci Resolve (Free)</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>Montaż, color grading, VFX, mastering audio — wszystko w jednym. Darmowa wersja to 95% Studio.</p>
          </div>
          <div className="rounded-lg border p-4" style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}>
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>ComfyUI + Stable Diffusion</p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>AI generatywne na Twoim komputerze. Bez limitów, bez opłat. Storyboardy, concept art, tekstury.</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Filozofia otwartości" delay={0.1}>
        <ul className="list-none space-y-2">
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>FFmpeg</strong> — Swiss Army knife wideo. Konwersja, kompresja, streaming. Każdy studio go używa.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>ACES / OpenColorIO</strong> — Otwarte standardy zarządzania kolorem. Hollywood standard.</span></li>
          <li className="flex gap-2"><span style={{ color: "var(--k-accent)" }}>→</span><span><strong>Dzielenie się wiedzą</strong> — Tutoriale, behind-the-scenes, open-source LUTy. Community rośnie, gdy się dzielisz.</span></li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje zadania" delay={0.2}>
        <ActionStep step={1} title="Zainstaluj Blender">
          <p>Nawet jeśli nie robisz 3D — naucz się podstaw compositing w Blender. To się przyda.</p>
        </ActionStep>
        <ActionStep step={2} title="Naucz się FFmpeg">
          <p>5 komend: konwersja, resize, extract audio, concat, compress. AI napisze Ci komendy.</p>
        </ActionStep>
        <ActionStep step={3} title="Podziel się czymś">
          <p>LUT, preset, tutorial, breakdown. Publikuj za darmo. To buduje reputację szybciej niż reklama.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
