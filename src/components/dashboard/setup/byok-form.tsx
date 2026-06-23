'use client';

import { cn } from '@/src/utils/cn';
import { ButtonPrimary } from '@/src/components/shared/ui/button';
import { useState } from 'react';

const inputClassName =
  'w-full rounded-md border border-stroke-5/25 bg-transparent px-4.5 py-3 text-accent/90 placeholder:text-primary-50/40 focus:outline-none font-inter-tight text-tagline-2 font-normal';

const PROVIDERS = [
  { id: 'openrouter', name: 'OpenRouter', hint: '200+ models, one key. Recommended.', placeholder: 'sk-or-v1-...' },
  { id: 'openai', name: 'OpenAI', hint: 'GPT-4o and more.', placeholder: 'sk-...' },
  { id: 'anthropic', name: 'Anthropic', hint: 'Claude models.', placeholder: 'sk-ant-...' },
  { id: 'nous', name: 'Nous Portal', hint: 'Nous Research models.', placeholder: 'nk-...' },
];

export default function ByokForm({ onComplete }: { onComplete: () => void }) {
  const [provider, setProvider] = useState('openrouter');
  const [saved, setSaved] = useState(false);

  const selected = PROVIDERS.find((p) => p.id === provider)!;

  return (
    <div className="space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="text-heading-4 font-inter-tight text-accent">Connect your model key</h2>
        <p className="text-tagline-1 font-inter-tight text-primary-50/50 mx-auto max-w-[480px] font-normal">
          Hermes uses your own API key for AI inference. We encrypt it at rest and never log it. We recommend <span className="text-primary-300">OpenRouter</span> for 200+ models with one key.
        </p>
      </div>

      <div className="mx-auto max-w-md space-y-5">
        <fieldset className="space-y-2">
          <label className="text-tagline-2 font-inter-tight text-accent/80 block font-normal">Provider</label>
          <div className="grid grid-cols-2 gap-2">
            {PROVIDERS.map((p) => (
              <button
                key={p.id}
                onClick={() => setProvider(p.id)}
                className={cn(
                  'text-tagline-2 font-inter-tight rounded-lg border px-3 py-2.5 text-left font-normal transition-all',
                  provider === p.id
                    ? 'border-primary-400 bg-primary-600/10 text-accent'
                    : 'border-stroke-5 text-primary-50/60 hover:border-stroke-7',
                )}
              >
                {p.name}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-2">
          <label className="text-tagline-2 font-inter-tight text-accent/80 block font-normal">API Key</label>
          <input type="password" placeholder={selected.placeholder} className={inputClassName} />
          <p className="text-tagline-3 font-inter-tight text-primary-50/40 font-normal">{selected.hint}</p>
        </fieldset>

        <fieldset className="space-y-2">
          <label className="text-tagline-2 font-inter-tight text-accent/80 block font-normal">
            Label <span className="text-primary-50/30 font-normal">(optional)</span>
          </label>
          <input type="text" placeholder="e.g. My main key" className={inputClassName} />
        </fieldset>

        <div className="flex gap-3">
          <ButtonPrimary onClick={() => setSaved(true)} className="flex-1">
            {saved ? 'Saved!' : 'Save Key'}
          </ButtonPrimary>
          <button
            onClick={onComplete}
            className="text-tagline-2 font-inter-tight text-primary-50/50 hover:text-primary-50/70 rounded-lg px-4 py-2.5 font-normal transition-colors"
          >
            {saved ? 'Continue' : 'Skip for now'}
          </button>
        </div>
      </div>
    </div>
  );
}
