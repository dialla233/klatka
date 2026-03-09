"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ChapterNav from "@/components/layout/chapter-nav";
import MobileNav from "@/components/layout/mobile-nav";
import ChatFAB from "@/components/chat/chat-fab";
import ChatPanel from "@/components/chat/chat-panel";
import { CHAPTERS } from "@/lib/constants";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = usePathname();

  const currentChapter = CHAPTERS.find((c) => pathname === `/${c.slug}`);

  return (
    <div className="min-h-screen" style={{ background: "var(--k-bg)" }}>
      {/* Desktop sidebar */}
      <ChapterNav />

      {/* Main content */}
      <main
        className="min-h-screen pb-20 lg:ml-64 lg:pb-0"
        style={{ padding: "var(--k-space-8) var(--k-space-6)" }}
      >
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />

      {/* Chat FAB */}
      <ChatFAB onClick={() => setChatOpen((v) => !v)} isOpen={chatOpen} />

      {/* Chat Panel */}
      <ChatPanel
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        chapterSlug={currentChapter?.slug}
        chapterTitle={currentChapter?.title}
      />
    </div>
  );
}
