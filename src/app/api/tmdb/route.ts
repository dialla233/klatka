export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  const type = searchParams.get("type") || "movie"; // movie | person | multi

  if (!query) {
    return Response.json({ error: "Query parameter 'q' is required" }, { status: 400 });
  }

  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "TMDb API not configured" }, { status: 500 });
  }

  try {
    const url = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=pl-PL&include_adult=false`;
    const response = await fetch(url);

    if (!response.ok) {
      return Response.json({ error: "TMDb API error" }, { status: response.status });
    }

    const data = await response.json();

    const results = data.results?.slice(0, 10).map((item: Record<string, unknown>) => {
      if (type === "person") {
        return {
          id: item.id,
          name: item.name,
          knownFor: item.known_for_department,
          profilePath: item.profile_path
            ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
            : null,
          popularity: item.popularity,
        };
      }
      return {
        id: item.id,
        title: item.title || item.name,
        originalTitle: item.original_title || item.original_name,
        posterPath: item.poster_path
          ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
          : null,
        releaseDate: item.release_date || item.first_air_date,
        overview: item.overview,
        voteAverage: item.vote_average,
        genreIds: item.genre_ids,
      };
    }) || [];

    return Response.json({ results, totalResults: data.total_results });
  } catch (error) {
    console.error("TMDb API error:", error);
    return Response.json({ error: "Failed to search movies" }, { status: 500 });
  }
}
