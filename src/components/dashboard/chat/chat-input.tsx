"use client";

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
    <div className="border-stroke-5 border-t p-4">
      <div className="mx-auto max-w-3xl">
        <div className="bg-background-7 border-stroke-5 flex items-end gap-3 rounded-xl border p-3">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
            placeholder="Message your Hermes agent..."
            rows={1}
            className="max-h-32 min-h-[40px] flex-1 resize-none bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
          <button
            onClick={onSend}
            disabled={!value.trim()}
            className="bg-primary-600 hover:bg-primary-700 flex size-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors disabled:opacity-40"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2 11 13" />
              <path d="M22 2 15 22 11 13 2 9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
