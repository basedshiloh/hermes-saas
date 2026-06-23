'use client';

import { MOCK_CONVERSATION, type MockMessage } from '@/src/data/mock-dashboard';
import { useEffect, useState } from 'react';
import ChatInput from './chat-input';
import MessageBubble from './message-bubble';

export default function ChatPanel() {
  const [messages, setMessages] = useState<MockMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < MOCK_CONVERSATION.length) {
        setMessages((prev) => [...prev, MOCK_CONVERSATION[idx]]);
        if (MOCK_CONVERSATION[idx].role === 'assistant') {
          setStreaming(true);
          setTimeout(() => setStreaming(false), 800);
        }
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  function handleSend() {
    if (!input.trim()) return;
    const userMsg: MockMessage = { id: crypto.randomUUID(), role: 'user', content: input };
    const botMsg: MockMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: 'This is a demo — your real Hermes agent will respond here once deployed. Try picking a different pack to explore!',
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setStreaming(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
      setStreaming(false);
    }, 1000);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-5">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {streaming && (
            <div className="flex items-center gap-2">
              <span className="bg-primary-400 inline-block size-2 animate-pulse rounded-full" />
              <span className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">
                Hermes is thinking...
              </span>
            </div>
          )}
        </div>
      </div>
      <ChatInput value={input} onChange={setInput} onSend={handleSend} />
    </div>
  );
}
