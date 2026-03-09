"use client";

interface FilmCardProps {
  title: string;
  originalTitle?: string;
  posterPath?: string | null;
  releaseDate?: string;
  overview?: string;
  voteAverage?: number;
}

export default function FilmCard({
  title,
  originalTitle,
  posterPath,
  releaseDate,
  overview,
  voteAverage,
}: FilmCardProps) {
  const year = releaseDate?.split("-")[0];

  return (
    <div
      className="flex gap-4 rounded-xl border p-4"
      style={{
        background: "var(--k-bg-card)",
        borderColor: "var(--k-border)",
      }}
    >
      {posterPath ? (
        <img
          src={posterPath}
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
            fontSize: "var(--k-text-caption)",
          }}
        >
          No poster
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
          {year && (
            <span
              style={{
                color: "var(--k-text-ghost)",
                fontWeight: 400,
                marginLeft: "8px",
              }}
            >
              ({year})
            </span>
          )}
        </p>
        {originalTitle && originalTitle !== title && (
          <p
            style={{
              fontSize: "var(--k-text-caption)",
              color: "var(--k-text-ghost)",
              marginBottom: "4px",
            }}
          >
            {originalTitle}
          </p>
        )}
        {voteAverage !== undefined && voteAverage > 0 && (
          <span
            className="inline-block rounded px-2 py-0.5 mb-2"
            style={{
              fontSize: "var(--k-text-caption)",
              fontWeight: 600,
              color: "var(--k-accent)",
              background: "var(--k-accent-dim)",
            }}
          >
            {voteAverage.toFixed(1)}
          </span>
        )}
        {overview && (
          <p
            className="line-clamp-2"
            style={{
              fontSize: "var(--k-text-small)",
              color: "var(--k-text-tertiary)",
              lineHeight: 1.5,
            }}
          >
            {overview}
          </p>
        )}
      </div>
    </div>
  );
}
