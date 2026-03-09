import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import SectionBlock from "@/components/content/section-block";
import ActionStep from "@/components/content/action-step";

export default function AIwFilmiePage() {
  return (
    <div>
      <JumboText text="AI" accentVar="--k-ch-ai" />

      <ChapterHeader
        title="AI w filmie"
        description="Jak sztuczna inteligencja zmienia branżę filmową? Co już działa, co nadchodzi, i jak to wykorzystać."
        number={2}
        accentVar="--k-ch-ai"
      />

      <SectionBlock title="Generacja wideo" delay={0}>
        <p className="mb-3">
          Trzy narzędzia, które zmieniają zasady gry w produkcji filmowej:
        </p>
        <div className="space-y-3">
          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Runway Gen-3 Alpha
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Najlepsza kontrola nad ruchem kamery i spójnością postaci. Rozszerzanie kadru, usuwanie obiektów, lip sync. Od $12/mies.
            </p>
          </div>
          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Kling AI 1.6
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Najlepsza fizyka i realizm ruchu. Doskonały do ujęć z ludźmi. Model z Chin, który zaskoczył Hollywood.
            </p>
          </div>
          <div
            className="rounded-lg border p-4"
            style={{ background: "var(--k-bg-card)", borderColor: "var(--k-border)" }}
          >
            <p style={{ fontFamily: "var(--k-font-display)", fontWeight: 600, color: "var(--k-text)", marginBottom: "4px" }}>
              Sora (OpenAI)
            </p>
            <p style={{ fontSize: "var(--k-text-small)", color: "var(--k-text-tertiary)" }}>
              Najbardziej &quot;kinowa&quot; jakość. Ograniczony dostęp, ale wyznacza kierunek.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="AI w postprodukcji" delay={0.1}>
        <p className="mb-3">
          Tu AI już jest standardem — nie przyszłością:
        </p>
        <ul className="list-none space-y-2">
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Topaz Video AI</strong> — upscaling 4K/8K, interpolacja klatek, stabilizacja</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>DaVinci Resolve</strong> — wbudowane AI do color grading, noise reduction, speed warp</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>Blender + ComfyUI</strong> — otwarte narzędzia do VFX z AI</span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--k-accent)" }}>→</span>
            <span><strong>ElevenLabs</strong> — dubbing, voice cloning, efekty dźwiękowe</span>
          </li>
        </ul>
      </SectionBlock>

      <SectionBlock title="Twoje kolejne kroki" delay={0.2}>
        <ActionStep step={1} title="Załóż konto na Runway">
          <p>Darmowy plan daje 125 kredytów — wystarczy na kilka testowych ujęć. Sprawdź Gen-3 Alpha Turbo na start.</p>
        </ActionStep>
        <ActionStep step={2} title="Zainstaluj DaVinci Resolve">
          <p>Darmowa wersja to pełne studio montażowe. Dodaj Topaz do pipeline&apos;u postprodukcji.</p>
        </ActionStep>
        <ActionStep step={3} title="Obejrzyj Curious Refuge">
          <p>Społeczność AI filmowców. Showcasy, kursy, inspiracje. Zobaczysz co jest możliwe.</p>
        </ActionStep>
        <ActionStep step={4} title="Zrób 30-sekundową etiudę">
          <p>Weź prosty pomysł. Wygeneruj ujęcia w Runway. Zmontuj w Resolve. Dodaj muzykę z Suno. Pokaż światu.</p>
        </ActionStep>
      </SectionBlock>
    </div>
  );
}
