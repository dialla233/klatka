import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildSystemPrompt } from "@/lib/ai/system-prompts";
import { db } from "@/lib/db";
import { filmmakerProfiles } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { messages, chapterSlug } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return new Response("Missing GEMINI_API_KEY", { status: 500 });
    }

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
      // Profile loading is optional
    }

    const systemPrompt = buildSystemPrompt(
      chapterSlug || "general",
      profileSummary
    );

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: systemPrompt,
    });

    // Convert messages to Gemini format
    const history = messages.slice(-20).map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Last message is the user's current message
    const lastMessage = history.pop();
    if (!lastMessage) {
      return new Response("No messages", { status: 400 });
    }

    const chat = model.startChat({
      history: history.length > 0 ? history : undefined,
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 1500,
      },
    });

    const result = await chat.sendMessageStream(lastMessage.parts[0].text);

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            // Send in OpenAI-compatible SSE format for the frontend
            const data = JSON.stringify({
              choices: [{ delta: { content: text } }],
            });
            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          }
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
