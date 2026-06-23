'use client';

import { cn } from '@/src/utils/cn';
import { useState } from 'react';

const inputClassName =
  'w-full rounded-md border border-stroke-5/25 bg-transparent px-4.5 py-3 text-accent/90 placeholder:text-primary-50/40 focus:outline-none font-inter-tight text-tagline-2 font-normal';

const mockKeys = [
  { id: '1', provider: 'OpenRouter', label: 'Main key', date: 'Jun 15, 2026' },
];

export default function SettingsPage() {
  const [keys] = useState(mockKeys);

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
                    {k.provider} &middot; Added {k.date}
                  </p>
                </div>
                <button className="text-tagline-2 font-inter-tight text-ns-red font-normal">
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
              <select className={cn(inputClassName, 'bg-background-9')}>
                <option>OpenRouter</option>
                <option>OpenAI</option>
                <option>Anthropic</option>
                <option>Nous Portal</option>
              </select>
            </fieldset>
            <fieldset className="space-y-1.5">
              <label className="text-tagline-3 font-inter-tight text-primary-50/60 font-normal">Label (optional)</label>
              <input type="text" placeholder="My key" className={inputClassName} />
            </fieldset>
          </div>
          <fieldset className="space-y-1.5">
            <label className="text-tagline-3 font-inter-tight text-primary-50/60 font-normal">API Key</label>
            <input type="password" placeholder="sk-..." className={inputClassName} />
          </fieldset>
          <button className="bg-secondary text-tagline-2 font-ibm-plex-mono rounded-full px-5 py-2.5 font-normal text-white">
            Add Key
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-heading-6 font-inter-tight text-accent">Subscription</h3>
        <div className="border-stroke-5 bg-background-7 rounded-xl border p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-tagline-1 font-inter-tight text-accent font-medium">Pro Plan</p>
              <p className="text-tagline-3 font-inter-tight text-primary-50/40 font-normal">&euro;69/month &middot; Renews Jul 15, 2026</p>
            </div>
            <button className="text-tagline-2 font-inter-tight text-primary-300 font-normal">
              Manage billing &rarr;
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-heading-6 font-inter-tight text-accent">Active Packs</h3>
        <div className="border-stroke-5 bg-background-7 flex items-center justify-between rounded-xl border p-5">
          <div>
            <p className="text-tagline-1 font-inter-tight text-accent font-medium">SEO Automation</p>
            <p className="text-tagline-3 font-inter-tight text-primary-50/40 font-normal">Keyword Research, Content Writer, Competitor Analysis</p>
          </div>
          <button className="text-tagline-2 font-inter-tight text-primary-300 font-normal">
            Change packs &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
