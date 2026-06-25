'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import ChatInput from './chat-input';
import MessageBubble from './message-bubble';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export default function ChatPanel({
  agentId,
  sessionId,
  onFirstMessage,
}: {
  agentId: string;
  sessionId: string;
  onFirstMessage?: () => void;
}) {
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

  // Persist a message to our DB so history survives reloads
  const persist = useCallback(
    (role: 'user' | 'assistant', content: string) => {
      fetch(`/api/sessions/${sessionId}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, content }),
      }).catch(() => {});
    },
    [sessionId],
  );

  // Load existing history for this session
  useEffect(() => {
    setMessages([]);
    setStatus(null);
    fetch(`/api/sessions/${sessionId}`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.messages)) {
          setMessages(
            data.messages.map((m: { id: string; role: string; content: string }) => ({
              id: m.id,
              role: m.role as ChatMessage['role'],
              content: m.content,
            })),
          );
        }
      })
      .catch(() => {});
  }, [sessionId]);

  // Open the live WebSocket for this agent
  useEffect(() => {
    let ws: WebSocket | null = null;
    let cancelled = false;

    async function connect() {
      let wsUrl: string | null = null;
      try {
        const res = await fetch(`/api/chat/connect?agentId=${encodeURIComponent(agentId)}`);
        const data = await res.json();
        wsUrl = data.wsUrl;
      } catch {
        wsUrl = null;
      }
      if (cancelled || !wsUrl) return;

      try {
        ws = new WebSocket(wsUrl);
      } catch {
        return;
      }
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === 'status') {
          if (data.status === 'thinking' || data.status === 'connecting') {
            setStatus(data.message);
          } else if (data.status === 'error') {
            setStatus(null);
            setMessages((p) => [...p, { id: crypto.randomUUID(), role: 'system', content: data.message }]);
          } else {
            setStatus(null);
          }
        }
        if (data.type === 'message' && data.role === 'assistant') {
          setStatus(null);
          setMessages((p) => [...p, { id: crypto.randomUUID(), role: 'assistant', content: data.content }]);
          persist('assistant', data.content);
        }
        if (data.type === 'error') {
          setStatus(null);
          setMessages((p) => [...p, { id: crypto.randomUUID(), role: 'system', content: data.message }]);
        }
      };
      ws.onclose = () => setConnected(false);
    }

    connect();
    return () => {
      cancelled = true;
      if (ws) ws.close();
    };
  }, [agentId, persist]);

  function handleSend() {
    if (!input.trim()) return;
    const text = input;
    const isFirst = messages.filter((m) => m.role === 'user').length === 0;

    setMessages((p) => [...p, { id: crypto.randomUUID(), role: 'user', content: text }]);
    setInput('');
    persist('user', text);
    if (isFirst) onFirstMessage?.();

    if (wsRef.current && connected) {
      wsRef.current.send(JSON.stringify({ message: text, sessionId }));
      setStatus('Hermes is thinking...');
    } else {
      setStatus(null);
      setMessages((p) => [
        ...p,
        {
          id: crypto.randomUUID(),
          role: 'system',
          content: 'Not connected to your agent yet. Make sure it is running and try again.',
        },
      ]);
    }
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-3xl space-y-5">
          {messages.length === 0 && !status && (
            <p className="text-tagline-2 font-inter-tight text-primary-50/40 py-12 text-center font-normal">
              Send a message to start chatting with your agent.
            </p>
          )}
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {status && (
            <div className="flex items-center gap-2">
              <span className="bg-primary-400 inline-block size-2 animate-pulse rounded-full" />
              <span className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">{status}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput value={input} onChange={setInput} onSend={handleSend} />
    </div>
  );
}
