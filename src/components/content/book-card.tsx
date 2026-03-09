"use client";

interface BookCardProps {
  title: string;
  authors: string;
  subjects?: string[];
  coverImage?: string | null;
  downloadCount?: number;
  htmlUrl?: string | null;
}

export default function BookCard({
  title,
  authors,
  subjects,
  coverImage,
  downloadCount,
  htmlUrl,
}: BookCardProps) {
  return (
    <div
      className="flex gap-4 rounded-xl border p-4"
      style={{
        background: "var(--k-bg-card)",
        borderColor: "var(--k-border)",
      }}
    >
      {coverImage ? (
        <img
          src={coverImage}
          alt={title}
          className="h-28 w-20 flex-shrink-0 rounded-lg object-cover"
          style={{ background: "var(--k-bg-elevated)" }}
        />
      ) : (
        <div
          className="flex h-28 w-20 flex-shrink-0 items-center justify-center rounded-lg"
          style={{
            background: "var(--k-bg-elevated)",
            color: "var(--k-text-ghost)",
            fontSize: "10px",
            textAlign: "center",
            padding: "4px",
          }}
        >
          Public Domain
        </div>
      )}
      <div className="min-w-0 flex-1">
        <p
          style={{
            fontFamily: "var(--k-font-display)",
            fontWeight: 600,
            color: "var(--k-text)",
            fontSize: "var(--k-text-body)",
            marginBottom: "2px",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "var(--k-text-small)",
            color: "var(--k-text-secondary)",
            marginBottom: "6px",
          }}
        >
          {authors}
        </p>
        {subjects && subjects.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {subjects.slice(0, 3).map((subject) => (
              <span
                key={subject}
                className="rounded px-2 py-0.5"
                style={{
                  fontSize: "var(--k-text-caption)",
                  color: "var(--k-text-tertiary)",
                  background: "var(--k-bg-elevated)",
                }}
              >
                {subject}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-3">
          {downloadCount !== undefined && (
            <span
              style={{
                fontSize: "var(--k-text-caption)",
                color: "var(--k-text-ghost)",
              }}
            >
              {downloadCount.toLocaleString()} pobrań
            </span>
          )}
          {htmlUrl && (
            <a
              href={htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{
                fontSize: "var(--k-text-caption)",
                color: "var(--k-accent)",
              }}
            >
              Czytaj online
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
