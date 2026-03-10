"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import JumboText from "@/components/layout/jumbo-text";
import ChapterHeader from "@/components/layout/chapter-header";
import { parseSSEStream } from "@/lib/parse-sse";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export default function OnboardingPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startInterview = async () => {
    setStarted(true);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: "Cześć, chcę zacząć. Przeprowadź ze mną wywiad.",
            },
          ],
          chapterSlug: "onboarding",
        }),
      });

      const assistantMsg: Message = {
        id: "intro",
        role: "assistant",
        content: "",
      };
      setMessages([assistantMsg]);

      await parseSSEStream(response, (token) => {
        assistantMsg.content += token;
        setMessages([{ ...assistantMsg }]);
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          chapterSlug: "onboarding",
        }),
      });

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, assistantMsg]);

      await parseSSEStream(response, (token) => {
        assistantMsg.content += token;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id
              ? { ...m, content: assistantMsg.content }
              : m
          )
        );
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      <JumboText text="AUTORA" accentVar="--k-ch-expectations" />

      <ChapterHeader
        title="Oczekiwania autora"
        description="Kim jesteś jako twórca? Wywiad AI buduje Twój profil twórczy."
        number={1}
        accentVar="--k-ch-expectations"
      />

      {/* Start button or interview */}
      {!started ? (
        <motion.div
          className="flex flex-col items-center gap-6 py-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p
            style={{
              fontFamily: "var(--k-font-display)",
              fontSize: "var(--k-text-h2)",
              color: "var(--k-text-secondary)",
              textAlign: "center",
              maxWidth: "28rem",
            }}
          >
            AI przeprowadzi z Tobą krótki wywiad, żeby poznać Twój profil
            twórczy.
          </p>
          <p
            style={{
              fontSize: "var(--k-text-small)",
              color: "var(--k-text-tertiary)",
              textAlign: "center",
            }}
          >
            8-10 pytań. Odpowiedzi zawsze można zmienić.
          </p>
          <motion.button
            onClick={startInterview}
            className="cursor-pointer rounded-xl border px-8 py-3"
            style={{
              fontFamily: "var(--k-font-display)",
              fontSize: "var(--k-text-body)",
              fontWeight: 500,
              color: "var(--k-accent)",
              background: "var(--k-accent-dim)",
              borderColor: "var(--k-border-accent)",
            }}
            whileHover={{ scale: 1.02, borderColor: "var(--k-accent)" }}
            whileTap={{ scale: 0.98 }}
          >
            Zacznij wywiad
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className="pb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Messages */}
          <div className="space-y-4 mb-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex"
                style={{
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  className="max-w-[80%] rounded-2xl px-5 py-3"
                  style={{
                    background:
                      msg.role === "user"
                        ? "var(--k-bg-elevated)"
                        : "var(--k-bg-card)",
                    border:
                      msg.role === "assistant"
                        ? "1px solid var(--k-border)"
                        : "none",
                    color:
                      msg.role === "user"
                        ? "var(--k-text)"
                        : "var(--k-text-secondary)",
                    lineHeight: 1.7,
                    fontSize: "var(--k-text-body)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {msg.content}
                  {isLoading &&
                    msg.role === "assistant" &&
                    msg.id === messages[messages.length - 1]?.id && (
                      <span
                        className="ml-1 animate-pulse"
                        style={{ color: "var(--k-accent)" }}
                      >
                        ▌
                      </span>
                    )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            className="fixed bottom-0 left-0 right-0 border-t px-4 py-3 lg:left-64"
            style={{
              background: "var(--k-glass-heavy)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderColor: "var(--k-border)",
            }}
          >
            <div className="mx-auto max-w-3xl">
              <div
                className="flex items-end gap-2 rounded-xl border px-3 py-2"
                style={{
                  background: "var(--k-bg-card)",
                  borderColor: "var(--k-border)",
                }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Twoja odpowiedź..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent outline-none"
                  style={{
                    fontFamily: "var(--k-font-body)",
                    fontSize: "var(--k-text-body)",
                    color: "var(--k-text)",
                    lineHeight: 1.5,
                    maxHeight: "6rem",
                    border: "none",
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="flex h-9 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg disabled:opacity-30"
                  style={{
                    background: input.trim()
                      ? "var(--k-accent)"
                      : "var(--k-bg-elevated)",
                    color: input.trim()
                      ? "var(--k-bg)"
                      : "var(--k-text-ghost)",
                    border: "none",
                    borderRadius: "var(--k-radius-sm)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14 2L7 9M14 2L10 14L7 9M14 2L2 6L7 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
