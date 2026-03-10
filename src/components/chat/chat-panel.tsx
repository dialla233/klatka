"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { parseSSEStream } from "@/lib/parse-sse";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  chapterSlug?: string;
  chapterTitle?: string;
}

export default function ChatPanel({
  isOpen,
  onClose,
  chapterSlug,
  chapterTitle,
}: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          chapterSlug: chapterSlug || "general",
        }),
      });

      if (!response.ok) throw new Error("Chat request failed");

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, assistantMessage]);

      await parseSSEStream(response, (token) => {
        assistantMessage.content += token;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessage.id
              ? { ...m, content: assistantMessage.content }
              : m
          )
        );
      });
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: "Przepraszam, wystąpił błąd. Spróbuj ponownie.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-0 right-0 z-40 flex flex-col border-l lg:bottom-0 lg:right-0 lg:w-[420px]"
          style={{
            background: "var(--k-bg)",
            borderColor: "var(--k-border)",
            height: "100dvh",
            width: "100%",
          }}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between border-b px-5 py-4"
            style={{ borderColor: "var(--k-border)" }}
          >
            <div>
              <p
                className="overline mb-1"
                style={{ color: "var(--k-accent)" }}
              >
                KLATKA AI
              </p>
              <p
                style={{
                  fontSize: "var(--k-text-small)",
                  color: "var(--k-text-secondary)",
                }}
              >
                {chapterTitle || "Porozmawiaj o filmie"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg"
              style={{
                background: "var(--k-bg-elevated)",
                color: "var(--k-text-tertiary)",
                border: "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {messages.length === 0 && (
              <div
                className="flex h-full flex-col items-center justify-center text-center"
                style={{ color: "var(--k-text-ghost)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--k-font-display)",
                    fontSize: "var(--k-text-h2)",
                    marginBottom: "var(--k-space-2)",
                    color: "var(--k-text-tertiary)",
                  }}
                >
                  Zapytaj o cokolwiek
                </p>
                <p style={{ fontSize: "var(--k-text-small)" }}>
                  AI zna kontekst tego rozdziału i Twój profil.
                </p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className="mb-4"
                style={{
                  textAlign: msg.role === "user" ? "right" : "left",
                }}
              >
                <div
                  className="inline-block max-w-[85%] rounded-2xl px-4 py-3 text-left"
                  style={{
                    background:
                      msg.role === "user"
                        ? "var(--k-bg-elevated)"
                        : "transparent",
                    border:
                      msg.role === "assistant"
                        ? "1px solid var(--k-border)"
                        : "none",
                    fontSize: "var(--k-text-small)",
                    lineHeight: 1.6,
                    color:
                      msg.role === "user"
                        ? "var(--k-text)"
                        : "var(--k-text-secondary)",
                  }}
                >
                  {msg.content}
                  {isLoading &&
                    msg.role === "assistant" &&
                    msg === messages[messages.length - 1] && (
                      <span
                        className="ml-1 inline-block animate-pulse"
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
            className="border-t px-4 py-3"
            style={{ borderColor: "var(--k-border)" }}
          >
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
                placeholder="Napisz wiadomość..."
                rows={1}
                className="flex-1 resize-none bg-transparent outline-none"
                style={{
                  fontFamily: "var(--k-font-body)",
                  fontSize: "var(--k-text-small)",
                  color: "var(--k-text)",
                  lineHeight: 1.5,
                  maxHeight: "6rem",
                  border: "none",
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors disabled:opacity-30"
                style={{
                  background: input.trim()
                    ? "var(--k-accent)"
                    : "var(--k-bg-elevated)",
                  color: input.trim() ? "var(--k-bg)" : "var(--k-text-ghost)",
                  border: "none",
                  borderRadius: "var(--k-radius-sm)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
