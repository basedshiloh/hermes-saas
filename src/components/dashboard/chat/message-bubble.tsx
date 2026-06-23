import { cn } from '@/src/utils/cn';
import type { MockMessage } from '@/src/data/mock-dashboard';

export default function MessageBubble({ message }: { message: MockMessage }) {
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
