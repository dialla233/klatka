import {
  pgTable,
  text,
  timestamp,
  serial,
  integer,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";

export const filmmakerProfiles = pgTable("filmmaker_profiles", {
  id: serial("id").primaryKey(),
  name: text("name"),
  year: text("year"),
  specialization: text("specialization"),
  genres: text("genres"),
  inspirations: text("inspirations"),
  currentProject: text("current_project"),
  challenges: text("challenges"),
  aiExperience: text("ai_experience"),
  dream: text("dream"),
  rawAnswers: jsonb("raw_answers"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const conversations = pgTable("conversations", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => filmmakerProfiles.id),
  chapterSlug: text("chapter_slug").notNull(),
  title: text("title"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  conversationId: integer("conversation_id")
    .references(() => conversations.id)
    .notNull(),
  role: text("role").notNull(), // "user" | "assistant" | "system"
  content: text("content").notNull(),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chapterNotes = pgTable("chapter_notes", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => filmmakerProfiles.id),
  chapterSlug: text("chapter_slug").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const savedFilms = pgTable("saved_films", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => filmmakerProfiles.id),
  tmdbId: integer("tmdb_id").notNull(),
  title: text("title").notNull(),
  posterPath: text("poster_path"),
  releaseDate: text("release_date"),
  overview: text("overview"),
  chapterSlug: text("chapter_slug"),
  note: text("note"),
  savedAt: timestamp("saved_at").defaultNow().notNull(),
});

export const savedBooks = pgTable("saved_books", {
  id: serial("id").primaryKey(),
  profileId: integer("profile_id").references(() => filmmakerProfiles.id),
  gutenbergId: integer("gutenberg_id").notNull(),
  title: text("title").notNull(),
  authors: text("authors"),
  subjects: text("subjects"),
  chapterSlug: text("chapter_slug"),
  note: text("note"),
  savedAt: timestamp("saved_at").defaultNow().notNull(),
});
