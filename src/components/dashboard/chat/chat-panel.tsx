'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { MOCK_CONVERSATION, type MockMessage } from '@/src/data/mock-dashboard';
import ChatInput from './chat-input';
import MessageBubble from './message-bubble';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

function runMockDemo(
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  setStatus: React.Dispatch<React.SetStateAction<string | null>>,
): () => void {
  let idx = 0;
  const interval = setInterval(() => {
    if (idx < MOCK_CONVERSATION.length) {
      const msg = MOCK_CONVERSATION[idx];
      setMessages((prev) => [...prev, { id: msg.id, role: msg.role, content: msg.content }]);
      if (msg.role === 'assistant') {
        setStatus('Hermes is thinking...');
        setTimeout(() => setStatus(null), 800);
      }
      idx++;
    } else {
      clearInterval(interval);
    }
  }, 1200);
  return () => clearInterval(interval);
}

export default function ChatPanel({ agentId }: { agentId?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [connected, setConnected] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, status, scrollToBottom]);

  useEffect(() => {
    let ws: WebSocket | null = null;
    let cleanupMock: (() => void) | null = null;
    let cancelled = false;

    async function connect() {
      if (!agentId) {
        cleanupMock = runMockDemo(setMessages, setStatus);
        return;
      }

      let wsUrl: string | null = null;
      try {
        const res = await fetch(`/api/chat/connect?agentId=${encodeURIComponent(agentId)}`);
        const data = await res.json();
        wsUrl = data.wsUrl;
      } catch {
        wsUrl = null;
      }

      if (cancelled) return;

      // No agent configured yet — show the demo conversation
      if (!wsUrl) {
        cleanupMock = runMockDemo(setMessages, setStatus);
        return;
      }

      try {
        ws = new WebSocket(wsUrl);
      } catch {
        cleanupMock = runMockDemo(setMessages, setStatus);
        return;
      }
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.type === 'status') {
          if (data.status === 'thinking' || data.status === 'connecting') {
            setStatus(data.message);
          } else {
            setStatus(null);
            setMessages((prev) => [
              ...prev,
              { id: crypto.randomUUID(), role: 'system', content: data.message },
            ]);
          }
        }

        if (data.type === 'message' && data.role === 'assistant') {
          setStatus(null);
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), role: 'assistant', content: data.content },
          ]);
        }

        if (data.type === 'error') {
          setStatus(null);
          setMessages((prev) => [
            ...prev,
            { id: crypto.randomUUID(), role: 'system', content: data.message },
          ]);
        }
      };

      ws.onclose = () => setConnected(false);
    }

    connect();

    return () => {
      cancelled = true;
      if (ws) ws.close();
      if (cleanupMock) cleanupMock();
    };
  }, [agentId]);

  function handleSend() {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    if (wsRef.current && connected) {
      wsRef.current.send(JSON.stringify({ message: input }));
      setStatus('Hermes is thinking...');
    } else {
      // Mock response when not connected
      setStatus('Hermes is thinking...');
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: 'assistant',
            content:
              'This is a demo — your real Hermes agent will respond here once deployed. Try picking a different pack to explore!',
          },
        ]);
        setStatus(null);
      }, 1000);
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-5">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {status && (
            <div className="flex items-center gap-2">
              <span className="bg-primary-400 inline-block size-2 animate-pulse rounded-full" />
              <span className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">
                {status}
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput value={input} onChange={setInput} onSend={handleSend} />
    </div>
  );
}
