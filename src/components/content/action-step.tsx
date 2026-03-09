"use client";

interface ActionStepProps {
  step: number;
  title: string;
  children: React.ReactNode;
}

export default function ActionStep({ step, title, children }: ActionStepProps) {
  return (
    <div
      className="flex gap-4 rounded-xl border p-4 mb-3"
      style={{
        background: "var(--k-bg-card)",
        borderColor: "var(--k-border)",
      }}
    >
      <span
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
        style={{
          fontFamily: "var(--k-font-mono)",
          fontSize: "var(--k-text-caption)",
          fontWeight: 600,
          color: "var(--k-accent)",
          background: "var(--k-accent-dim)",
        }}
      >
        {step}
      </span>
      <div>
        <p
          className="mb-1"
          style={{
            fontFamily: "var(--k-font-display)",
            fontSize: "var(--k-text-small)",
            fontWeight: 600,
            color: "var(--k-text)",
          }}
        >
          {title}
        </p>
        <div
          style={{
            fontSize: "var(--k-text-small)",
            color: "var(--k-text-tertiary)",
            lineHeight: 1.6,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
