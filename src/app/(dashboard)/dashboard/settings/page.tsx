"use client";

import { useEffect, useState } from "react";

interface ModelKeyEntry {
  id: string;
  provider: string;
  label: string;
  createdAt: string;
}

export default function SettingsPage() {
  const [keys, setKeys] = useState<ModelKeyEntry[]>([]);
  const [provider, setProvider] = useState("openrouter");
  const [newKey, setNewKey] = useState("");
  const [label, setLabel] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    const res = await fetch("/api/keys");
    const data = await res.json();
    setKeys(data.keys || []);
  }

  async function handleSave() {
    if (!newKey.trim()) return;
    setSaving(true);
    await fetch("/api/keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider, key: newKey, label: label || undefined }),
    });
    setNewKey("");
    setLabel("");
    setSaving(false);
    fetchKeys();
  }

  async function handleDelete(id: string) {
    await fetch(`/api/keys?id=${id}`, { method: "DELETE" });
    fetchKeys();
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 p-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Settings</h2>
        <p className="text-sm text-white/50">
          Manage your API keys and account preferences.
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="text-lg font-medium text-white">Model API Keys</h3>

        {keys.length > 0 && (
          <div className="space-y-2">
            {keys.map((k) => (
              <div
                key={k.id}
                className="border-stroke-5 flex items-center justify-between rounded-lg border bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {k.label || k.provider}
                  </p>
                  <p className="text-xs text-white/40">
                    {k.provider} &middot; Added{" "}
                    {new Date(k.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(k.id)}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="border-stroke-5 space-y-3 rounded-lg border bg-white/5 p-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs text-white/60">Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="bg-background-7 border-stroke-5 w-full rounded-lg border px-3 py-2 text-sm text-white focus:outline-none"
              >
                <option value="openrouter">OpenRouter</option>
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
                <option value="nous">Nous Portal</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/60">Label (optional)</label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="My key"
                className="bg-background-7 border-stroke-5 w-full rounded-lg border px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-white/60">API Key</label>
            <input
              type="password"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="sk-..."
              className="bg-background-7 border-stroke-5 w-full rounded-lg border px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSave}
            disabled={saving || !newKey.trim()}
            className="bg-primary-600 hover:bg-primary-700 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors disabled:opacity-40"
          >
            {saving ? "Saving..." : "Add Key"}
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-medium text-white">Subscription</h3>
        <div className="border-stroke-5 rounded-lg border bg-white/5 p-4">
          <p className="text-sm text-white/60">
            Manage your subscription through the Stripe Customer Portal.
          </p>
          <button className="text-primary-400 hover:text-primary-300 mt-2 text-sm font-medium">
            Manage billing →
          </button>
        </div>
      </section>
    </div>
  );
}
