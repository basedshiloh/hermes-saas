"use client";

import { useState } from "react";
import ChatInput from "./chat-input";
import MessageBubble from "./message-bubble";

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "system",
  content:
    "Your Hermes agent is being set up. Once provisioning completes, you'll be able to chat with your agent here. In the meantime, head to Settings to connect your model API key.",
  timestamp: new Date(),
};

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };
    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Your agent isn't connected yet. Complete the setup to start chatting.",
        timestamp: new Date(),
      },
    ]);
    setInput("");
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>
      </div>
      <ChatInput value={input} onChange={setInput} onSend={handleSend} />
    </div>
  );
}
