"use client";

import { useState } from "react";

interface PackOption {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const PACKS: PackOption[] = [
  {
    id: "seo",
    name: "SEO Automation",
    description:
      "Keyword research, competitor analysis, and SEO-optimized content writing.",
    icon: "🔍",
  },
  {
    id: "social",
    name: "Social Media",
    description:
      "Content ideation, scheduling, and automated social media post creation.",
    icon: "📱",
  },
  {
    id: "general",
    name: "General Assistant",
    description:
      "Open-ended assistant for coding, research, business tasks, and more.",
    icon: "✨",
  },
];

export default function PackPicker({
  onSubmit,
}: {
  onSubmit: (packs: string[]) => void;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">
          What will you use Hermes for?
        </h2>
        <p className="text-sm text-white/50">
          Pick one or more use cases. This configures your dashboard tabs and
          pre-loads relevant tools. You can change this later.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PACKS.map((pack) => {
          const isSelected = selected.has(pack.id);
          return (
            <button
              key={pack.id}
              onClick={() => toggle(pack.id)}
              className={`space-y-3 rounded-xl border p-6 text-left transition-all ${
                isSelected
                  ? "border-primary-500 bg-primary-600/10"
                  : "border-stroke-5 bg-white/5 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <span className="text-3xl">{pack.icon}</span>
              <h3 className="text-lg font-medium text-white">{pack.name}</h3>
              <p className="text-sm text-white/50">{pack.description}</p>
              {isSelected && (
                <span className="text-primary-400 inline-flex items-center gap-1 text-xs font-medium">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Selected
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => onSubmit(Array.from(selected))}
          disabled={selected.size === 0}
          className="bg-primary-600 hover:bg-primary-700 rounded-xl px-8 py-3 font-medium text-white transition-colors disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
