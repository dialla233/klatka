import { db } from "@/lib/db";
import { filmmakerProfiles } from "@/lib/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const profiles = await db
      .select()
      .from(filmmakerProfiles)
      .orderBy(desc(filmmakerProfiles.updatedAt))
      .limit(1);

    if (profiles.length === 0) {
      return Response.json({ profile: null });
    }

    return Response.json({ profile: profiles[0] });
  } catch (error) {
    console.error("Onboarding GET error:", error);
    return Response.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const result = await db
      .insert(filmmakerProfiles)
      .values({
        name: data.name || null,
        year: data.year || null,
        specialization: data.specialization || null,
        genres: data.genres || null,
        inspirations: data.inspirations || null,
        currentProject: data.currentProject || null,
        challenges: data.challenges || null,
        aiExperience: data.aiExperience || null,
        dream: data.dream || null,
        rawAnswers: data.rawAnswers || null,
      })
      .returning();

    return Response.json({ profile: result[0] });
  } catch (error) {
    console.error("Onboarding POST error:", error);
    return Response.json({ error: "Failed to save profile" }, { status: 500 });
  }
}
