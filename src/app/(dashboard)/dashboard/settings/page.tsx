'use client';

import { cn } from '@/src/utils/cn';
import { useEffect, useState } from 'react';

const inputClassName =
  'w-full rounded-md border border-stroke-5/25 bg-transparent px-4.5 py-3 text-accent/90 placeholder:text-primary-50/40 focus:outline-none font-inter-tight text-tagline-2 font-normal';

interface KeyEntry {
  id: string;
  provider: string;
  label: string;
  createdAt: string;
}

export default function SettingsPage() {
  const [keys, setKeys] = useState<KeyEntry[]>([]);
  const [provider, setProvider] = useState('openrouter');
  const [newKey, setNewKey] = useState('');
  const [label, setLabel] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchKeys();
  }, []);

  async function fetchKeys() {
    try {
      const res = await fetch('/api/keys');
      const data = await res.json();
      setKeys(data.keys || []);
    } catch { /* not wired yet */ }
  }

  async function handleSave() {
    if (!newKey.trim()) return;
    setSaving(true);
    try {
      await fetch('/api/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ provider, key: newKey, label: label || undefined }),
      });
      setNewKey('');
      setLabel('');
      fetchKeys();
    } catch { /* handle error */ }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    await fetch(`/api/keys?id=${id}`, { method: 'DELETE' });
    fetchKeys();
  }

  return (
    <div className="mx-auto max-w-2xl space-y-10 p-6">
      <div>
        <h2 className="text-heading-5 font-inter-tight text-accent">Settings</h2>
        <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
          Manage your API keys and account preferences.
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="text-heading-6 font-inter-tight text-accent">Model API Keys</h3>

        {keys.length > 0 && (
          <div className="space-y-2">
            {keys.map((k) => (
              <div
                key={k.id}
                className="border-stroke-5 bg-background-7 flex items-center justify-between rounded-xl border px-5 py-4"
              >
                <div>
                  <p className="text-tagline-2 font-inter-tight text-accent font-medium">{k.label}</p>
                  <p className="text-tagline-3 font-inter-tight text-primary-50/40 font-normal">
                    {k.provider} &middot; Added {new Date(k.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(k.id)}
                  className="text-tagline-2 font-inter-tight text-ns-red font-normal"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="border-stroke-5 bg-background-7 space-y-4 rounded-xl border p-5">
          <div className="grid grid-cols-2 gap-3">
            <fieldset className="space-y-1.5">
              <label className="text-tagline-3 font-inter-tight text-primary-50/60 font-normal">Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className={cn(inputClassName, 'bg-background-9')}
              >
                <option value="openrouter">OpenRouter</option>
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
                <option value="nous">Nous Portal</option>
              </select>
            </fieldset>
            <fieldset className="space-y-1.5">
              <label className="text-tagline-3 font-inter-tight text-primary-50/60 font-normal">Label (optional)</label>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="My key"
                className={inputClassName}
              />
            </fieldset>
          </div>
          <fieldset className="space-y-1.5">
            <label className="text-tagline-3 font-inter-tight text-primary-50/60 font-normal">API Key</label>
            <input
              type="password"
              value={newKey}
              onChange={(e) => setNewKey(e.target.value)}
              placeholder="sk-..."
              className={inputClassName}
            />
          </fieldset>
          <button
            onClick={handleSave}
            disabled={saving || !newKey.trim()}
            className="bg-secondary text-tagline-2 font-ibm-plex-mono rounded-full px-5 py-2.5 font-normal text-white disabled:opacity-40"
          >
            {saving ? 'Saving...' : 'Add Key'}
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-heading-6 font-inter-tight text-accent">Subscription</h3>
        <div className="border-stroke-5 bg-background-7 rounded-xl border p-5">
          <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
            Manage your subscription through the billing portal.
          </p>
          <button className="text-tagline-2 font-inter-tight text-primary-300 mt-2 font-normal">
            Manage billing &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
