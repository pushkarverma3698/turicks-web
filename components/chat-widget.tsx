"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, ArrowDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
}

const QUICK_SUGGESTIONS = [
  "What services does Turicks provide?",
  "How long does it take to build an MVP?",
  "Tell me about your AI products.",
  "How can I book a call?",
];

const DEFAULT_WELCOME = "Hi! I'm **Turi**, your Turicks AI assistant. Ask me anything about our services, products, team, or how we can build your next custom software solution!";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fallback to local worker URL if env variable is not set
  const API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || "https://turicks-chatbot-backend.pushkarverma.workers.dev"; // Default or replacement placeholder

  // Initialize chat history from LocalStorage or welcome message
  useEffect(() => {
    const saved = localStorage.getItem("turicks_chat_history");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages([{ id: "welcome", role: "model", content: DEFAULT_WELCOME }]);
      }
    } else {
      setMessages([{ id: "welcome", role: "model", content: DEFAULT_WELCOME }]);
    }
  }, []);

  // Save messages to LocalStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("turicks_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll to bottom helper
  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages]);

  // Scroll visibility handler
  const handleScroll = () => {
    if (!chatContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
    // Show scroll button if user has scrolled up more than 100px from the bottom
    setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 100);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMessageId = Math.random().toString(36).slice(2, 9);
    const modelMessageId = Math.random().toString(36).slice(2, 9);

    const userMsg: Message = {
      id: userMessageId,
      role: "user",
      content: textToSend.trim(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Append a temporary model message we can stream text into
    const modelMsgPlaceholder: Message = {
      id: modelMessageId,
      role: "model",
      content: "",
    };
    setMessages(prev => [...prev, modelMsgPlaceholder]);

    try {
      // Map message history to Gemini API format (role: user/model, parts: [{text: ...}])
      // Exclude the current temporary model message
      const historyForAPI = newMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }));

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg.content,
          history: historyForAPI.slice(0, -1), // Everything except the user's latest message (which is passed in the message parameter)
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      if (!response.body) {
        throw new Error("Response body is not readable");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let accumulatedResponse = "";
      let buffer = "";

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value || new Uint8Array(), { stream: !done });
        buffer += chunk;

        const lines = buffer.split("\n");
        // Maintain unfinished line in the buffer
        buffer = lines.pop() || "";

        for (const line of lines) {
          const cleanLine = line.trim();
          if (!cleanLine) continue;
          if (cleanLine.startsWith("data: ")) {
            const dataStr = cleanLine.slice(6).trim();
            if (dataStr === "[DONE]") continue;
            try {
              const parsed = JSON.parse(dataStr);
              const textVal = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
              if (textVal) {
                accumulatedResponse += textVal;
                // Live update the temporary model message
                setMessages(prev => {
                  const updated = [...prev];
                  const last = updated[updated.length - 1];
                  if (last && last.id === modelMessageId) {
                    last.content = accumulatedResponse;
                  }
                  return updated;
                });
              }
            } catch (e) {
              // Ignore partial JSON parsing errors
            }
          }
        }
      }

    } catch (error) {
      console.error("Chatbot API error:", error);
      setMessages(prev => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last && last.id === modelMessageId) {
          last.content = "Sorry, I'm experiencing a small server connection hiccup right now. Please try again or reach out to our team at contact@turicks.com!";
        }
        return updated;
      });
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    const welcome: Message = { id: "welcome", role: "model", content: DEFAULT_WELCOME };
    setMessages([welcome]);
    localStorage.removeItem("turicks_chat_history");
  };

  // Convert basic markdown format (like bolding **) into React nodes
  const formatMessageContent = (content: string) => {
    if (!content) return "";
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={idx} className="font-extrabold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex h-[500px] w-[360px] flex-col rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-md sm:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-4 bg-muted/30 rounded-t-2xl">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-inner">
                    <Bot className="h-5 w-5" />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-emerald-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">Turi</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-primary animate-pulse" />
                    AI Agent • Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearChat}
                  className="rounded-lg p-1.5 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition"
                  title="Clear history"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div
              ref={chatContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-muted"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-start gap-2`}
                >
                  {msg.role === "model" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted text-foreground rounded-tl-none border border-border"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {formatMessageContent(msg.content)}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && messages[messages.length - 1]?.content === "" && (
                <div className="flex justify-start items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Bot className="h-4 w-4 animate-bounce" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none border border-border bg-muted px-4 py-3 text-sm shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 pt-1 flex flex-wrap gap-1.5">
                {QUICK_SUGGESTIONS.map((sug, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(sug)}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground hover:border-primary hover:text-primary transition shadow-sm cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="border-t border-border p-3 flex gap-2 items-center bg-muted/10 rounded-b-2xl"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Turi anything..."
                disabled={isTyping}
                className="flex-1 rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:brightness-110 disabled:opacity-50 transition shadow"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            {/* Floating scroll bottom indicator inside widget */}
            {showScrollBtn && (
              <button
                onClick={() => scrollToBottom("smooth")}
                className="absolute bottom-16 right-4 rounded-full bg-primary p-1.5 text-primary-foreground shadow-lg hover:brightness-110 transition border border-primary-foreground/15"
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer border border-primary-foreground/10"
        aria-label="Open Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
