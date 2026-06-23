'use client';

import { cn } from '@/src/utils/cn';
import { PACKS } from '@/src/data/mock-dashboard';
import { useState } from 'react';
import { ButtonPrimary } from '@/src/components/shared/ui/button';

export default function PackPicker({ onSubmit }: { onSubmit: (packs: string[]) => void }) {
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
    <div className="space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="text-heading-4 font-inter-tight text-accent">What do you do?</h2>
        <p className="text-tagline-1 font-inter-tight text-primary-50/50 mx-auto max-w-[520px] font-normal">
          Pick your role and we&apos;ll pre-configure your agent with the right tools, skills, and dashboard tabs. You can change this later.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {PACKS.map((pack) => {
          const isSelected = selected.has(pack.id);
          return (
            <button
              key={pack.id}
              onClick={() => toggle(pack.id)}
              className={cn(
                'border-stroke-5 space-y-4 rounded-xl border p-6 text-left transition-all',
                isSelected
                  ? 'border-primary-400 bg-primary-600/10'
                  : 'bg-background-7 hover:border-stroke-7 hover:bg-background-9',
              )}
            >
              <div className="bg-secondary flex size-12 items-center justify-center rounded-2xl">
                <span className={cn(pack.iconClass, 'text-[22px] text-white')} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-tagline-1 font-inter-tight text-accent font-medium">{pack.name}</h3>
                <p className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">{pack.persona}</p>
              </div>
              <p className="text-tagline-3 font-inter-tight text-primary-50/40 font-normal">{pack.description}</p>
              {isSelected && (
                <span className="text-tagline-3 font-inter-tight text-primary-300 inline-flex items-center gap-1 font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                  Selected
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center">
        <ButtonPrimary
          onClick={() => onSubmit(Array.from(selected))}
          disabled={selected.size === 0}
          className={cn(selected.size === 0 && 'opacity-40')}
        >
          Continue
        </ButtonPrimary>
      </div>
    </div>
  );
}
