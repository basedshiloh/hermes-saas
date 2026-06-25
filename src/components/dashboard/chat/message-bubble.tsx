import { cn } from '@/src/utils/cn';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export default function MessageBubble({ message }: { message: ChatMessage }) {
  if (message.role === 'system') {
    return (
      <div className="border-primary-400/20 bg-primary-600/10 text-tagline-2 font-inter-tight text-primary-200 rounded-xl border p-4 font-normal">
        {message.content}
      </div>
    );
  }

  const isUser = message.role === 'user';

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'text-tagline-2 font-inter-tight max-w-[80%] whitespace-pre-wrap rounded-2xl px-5 py-3.5 font-normal',
          isUser
            ? 'bg-secondary text-accent'
            : 'bg-background-7 border-stroke-5 text-primary-50/90 border',
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
