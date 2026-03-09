import OpenAI from "openai";
import { buildSystemPrompt } from "@/lib/ai/system-prompts";
import { db } from "@/lib/db";
import { filmmakerProfiles } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { messages, chapterSlug } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return new Response("Missing OPENAI_API_KEY", { status: 500 });
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // Load filmmaker profile for context
    let profileSummary: string | undefined;
    try {
      const profiles = await db
        .select()
        .from(filmmakerProfiles)
        .orderBy(desc(filmmakerProfiles.updatedAt))
        .limit(1);

      if (profiles.length > 0) {
        const p = profiles[0];
        const parts = [];
        if (p.name) parts.push(`Imię: ${p.name}`);
        if (p.year) parts.push(`Rok: ${p.year}`);
        if (p.specialization) parts.push(`Specjalizacja: ${p.specialization}`);
        if (p.genres) parts.push(`Gatunki: ${p.genres}`);
        if (p.inspirations) parts.push(`Inspiracje: ${p.inspirations}`);
        if (p.currentProject) parts.push(`Projekt: ${p.currentProject}`);
        if (p.challenges) parts.push(`Wyzwania: ${p.challenges}`);
        if (p.aiExperience) parts.push(`AI: ${p.aiExperience}`);
        if (p.dream) parts.push(`Marzenie: ${p.dream}`);
        if (parts.length > 0) {
          profileSummary = parts.join("\n");
        }
      }
    } catch {
      // Profile loading is optional, continue without it
    }

    const systemPrompt = buildSystemPrompt(
      chapterSlug || "general",
      profileSummary
    );

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.slice(-20),
      ],
      temperature: 0.8,
      max_tokens: 1500,
    });

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const chunk of response) {
          const data = JSON.stringify(chunk);
          controller.enqueue(encoder.encode(`data: ${data}\n\n`));
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
