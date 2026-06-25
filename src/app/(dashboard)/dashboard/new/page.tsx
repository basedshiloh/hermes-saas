'use client';

import { PACKS } from '@/src/data/mock-dashboard';
import { cn } from '@/src/utils/cn';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NewAgentPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [packId, setPackId] = useState('seo');
  const [deploying, setDeploying] = useState(false);

  async function handleDeploy() {
    setDeploying(true);
    try {
      const res = await fetch('/api/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, packId }),
      });
      const data = await res.json();
      if (data.agent?.id) {
        router.push(`/dashboard/agents/${data.agent.id}`);
      } else {
        router.push('/dashboard');
      }
    } catch {
      setDeploying(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8 p-6">
      <div className="space-y-2">
        <h2 className="text-heading-5 font-inter-tight text-accent">Deploy a new agent</h2>
        <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
          Pick what your agent does. We pre-configure the tools and skills — you just name it and deploy.
        </p>
      </div>

      <fieldset className="space-y-2">
        <label className="text-tagline-2 font-inter-tight text-accent/80 block font-normal">Agent name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. My SEO Assistant"
          className="border-stroke-5/25 text-tagline-2 font-inter-tight w-full rounded-md border bg-transparent px-4.5 py-3 font-normal text-accent/90 placeholder:text-primary-50/40 focus:outline-none"
        />
      </fieldset>

      <div className="space-y-3">
        <label className="text-tagline-2 font-inter-tight text-accent/80 block font-normal">Pack</label>
        <div className="grid gap-3 md:grid-cols-2">
          {PACKS.map((pack) => (
            <button
              key={pack.id}
              onClick={() => setPackId(pack.id)}
              className={cn(
                'flex items-start gap-3 rounded-xl border p-4 text-left transition-all',
                packId === pack.id
                  ? 'border-primary-400 bg-primary-600/10'
                  : 'border-stroke-5 bg-background-7 hover:border-stroke-7',
              )}
            >
              <span className="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-xl">
                <span className={cn(pack.iconClass, 'text-[18px] text-white')} />
              </span>
              <span className="space-y-1">
                <span className="text-tagline-2 font-inter-tight text-accent block font-medium">{pack.name}</span>
                <span className="text-tagline-3 font-inter-tight text-primary-50/50 block font-normal">
                  {pack.persona}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleDeploy}
          disabled={deploying}
          className="bg-secondary text-tagline-2 font-ibm-plex-mono rounded-full px-6 py-3 font-normal text-white transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {deploying ? 'Deploying...' : 'Deploy Agent'}
        </button>
        <button
          onClick={() => router.push('/dashboard')}
          className="text-tagline-2 font-inter-tight text-primary-50/50 hover:text-primary-50/70 font-normal"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
