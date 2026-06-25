'use client';

import { cn } from '@/src/utils/cn';

export interface ChatSessionItem {
  id: string;
  title: string;
  updatedAt: string;
}

export default function SessionSidebar({
  sessions,
  activeId,
  onSelect,
  onNew,
  onDelete,
}: {
  sessions: ChatSessionItem[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="bg-background-5 border-stroke-5 flex h-full w-64 shrink-0 flex-col border-r">
      <div className="p-3">
        <button
          onClick={onNew}
          className="bg-secondary text-tagline-2 font-ibm-plex-mono w-full rounded-full py-2.5 font-normal text-white transition-opacity hover:opacity-90"
        >
          + New chat
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-2 pb-3">
        {sessions.length === 0 ? (
          <p className="text-tagline-3 font-inter-tight text-primary-50/30 px-2 py-4 font-normal">
            No conversations yet.
          </p>
        ) : (
          <div className="space-y-1">
            {sessions.map((s) => (
              <div
                key={s.id}
                className={cn(
                  'group flex items-center gap-2 rounded-lg px-3 py-2 transition-colors',
                  activeId === s.id ? 'bg-background-7' : 'hover:bg-background-7/60',
                )}
              >
                <button
                  onClick={() => onSelect(s.id)}
                  className="min-w-0 flex-1 text-left"
                >
                  <span
                    className={cn(
                      'text-tagline-3 font-inter-tight block truncate font-normal',
                      activeId === s.id ? 'text-accent' : 'text-primary-50/60',
                    )}
                  >
                    {s.title}
                  </span>
                </button>
                <button
                  onClick={() => onDelete(s.id)}
                  className="text-primary-50/30 hover:text-ns-red shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label="Delete chat"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
