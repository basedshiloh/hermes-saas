"use client";

import { useState } from "react";

const PROVIDERS = [
  {
    id: "openrouter",
    name: "OpenRouter",
    description: "200+ models, one API key. Recommended for most users.",
    placeholder: "sk-or-v1-...",
  },
  {
    id: "openai",
    name: "OpenAI",
    description: "GPT-4o, GPT-4, and more.",
    placeholder: "sk-...",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    description: "Claude models.",
    placeholder: "sk-ant-...",
  },
  {
    id: "nous",
    name: "Nous Portal",
    description: "Nous Research models via their own portal.",
    placeholder: "nk-...",
  },
];

export default function ByokForm({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [provider, setProvider] = useState("openrouter");
  const [key, setKey] = useState("");
  const [label, setLabel] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const selectedProvider = PROVIDERS.find((p) => p.id === provider)!;

  async function handleSave() {
    if (!key.trim()) return;
    setSaving(true);
    setError("");

    try {
      const res = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ provider, key, label: label || undefined }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to save key");
      }
      setSaved(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to save key");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Connect your model key
        </h2>
        <p className="text-sm text-white/50">
          Hermes uses your own API key for inference. We encrypt it at rest and
          never log it. We recommend{" "}
          <span className="text-primary-400">OpenRouter</span> for access to
          200+ models with a single key.
        </p>
      </div>

      <div className="mx-auto max-w-md space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Provider</label>
          <div className="grid grid-cols-2 gap-2">
            {PROVIDERS.map((p) => (
              <button
                key={p.id}
                onClick={() => setProvider(p.id)}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-all ${
                  provider === p.id
                    ? "border-primary-500 bg-primary-600/10 text-white"
                    : "border-stroke-5 text-white/60 hover:border-white/20"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">API Key</label>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder={selectedProvider.placeholder}
            className="bg-background-7 border-stroke-5 w-full rounded-lg border px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary-500 focus:outline-none"
          />
          <p className="text-xs text-white/40">
            {selectedProvider.description}
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">
            Label{" "}
            <span className="font-normal text-white/40">(optional)</span>
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g. My main key"
            className="bg-background-7 border-stroke-5 w-full rounded-lg border px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-primary-500 focus:outline-none"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={saving || !key.trim()}
            className="bg-primary-600 hover:bg-primary-700 flex-1 rounded-lg py-2.5 text-sm font-medium text-white transition-colors disabled:opacity-40"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Save Key"}
          </button>
          <button
            onClick={onComplete}
            className="text-white/50 hover:text-white/70 rounded-lg px-4 py-2.5 text-sm transition-colors"
          >
            {saved ? "Continue" : "Skip for now"}
          </button>
        </div>
      </div>
    </div>
  );
}
