'use client';

const inputClassName =
  'w-full rounded-md border border-stroke-5/25 bg-transparent px-4.5 py-3 text-accent/90 placeholder:text-primary-50/40 focus:outline-none font-inter-tight text-tagline-2 font-normal';

export default function ChatInput({
  value,
  onChange,
  onSend,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <div className="border-stroke-5 bg-background-5 border-t px-6 py-4">
      <div className="mx-auto flex max-w-3xl items-end gap-3">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder="Message your Hermes agent..."
          rows={1}
          className={`${inputClassName} max-h-32 min-h-[44px] flex-1 resize-none`}
        />
        <button
          onClick={onSend}
          disabled={!value.trim()}
          className="bg-secondary flex size-11 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22 11 13 2 9z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
