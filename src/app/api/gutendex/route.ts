export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return Response.json({ error: "Query parameter 'q' is required" }, { status: 400 });
  }

  try {
    const url = `https://gutendex.com/books/?search=${encodeURIComponent(query)}&languages=en,pl`;
    const response = await fetch(url);

    if (!response.ok) {
      return Response.json({ error: "Gutendex API error" }, { status: response.status });
    }

    const data = await response.json();

    const books = data.results?.slice(0, 10).map((book: Record<string, unknown>) => ({
      id: book.id,
      title: book.title,
      authors: (book.authors as Array<{ name: string }>)?.map((a) => a.name).join(", ") || "Unknown",
      subjects: (book.subjects as string[])?.slice(0, 5) || [],
      languages: book.languages,
      downloadCount: book.download_count,
      formats: {
        html: (book.formats as Record<string, string>)?.["text/html; charset=utf-8"] ||
              (book.formats as Record<string, string>)?.["text/html"],
        plainText: (book.formats as Record<string, string>)?.["text/plain; charset=utf-8"] ||
                   (book.formats as Record<string, string>)?.["text/plain"],
        coverImage: (book.formats as Record<string, string>)?.["image/jpeg"],
      },
    })) || [];

    return Response.json({ books, count: data.count });
  } catch (error) {
    console.error("Gutendex API error:", error);
    return Response.json({ error: "Failed to search books" }, { status: 500 });
  }
}
