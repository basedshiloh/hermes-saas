'use client';

import { cn } from '@/src/utils/cn';
import { UserButton } from '@clerk/nextjs';

const stateConfig: Record<string, { label: string; dotClass: string }> = {
  running: { label: 'Online', dotClass: 'bg-ns-green' },
  sleeping: { label: 'Sleeping', dotClass: 'bg-ns-yellow' },
  provisioning: { label: 'Deploying...', dotClass: 'bg-primary-400' },
  pending: { label: 'Setting up...', dotClass: 'bg-primary-400' },
  error: { label: 'Error', dotClass: 'bg-ns-red' },
};

export default function Topbar({ instanceState }: { instanceState?: string }) {
  const state = instanceState ? stateConfig[instanceState] : null;

  return (
    <header className="bg-background-5 border-stroke-5 flex h-16 shrink-0 items-center justify-between border-b px-6">
      <div className="flex items-center gap-3">
        <h1 className="text-heading-6 font-inter-tight text-accent font-medium">Dashboard</h1>
        {state && (
          <span className="border-stroke-5 text-tagline-3 font-inter-tight text-primary-50/70 flex items-center gap-1.5 rounded-full border px-3 py-1 font-normal">
            <span className={cn(state.dotClass, 'inline-block size-2 rounded-full')} />
            {state.label}
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        <UserButton
          appearance={{
            elements: { avatarBox: 'size-9' },
          }}
        />
      </div>
    </header>
  );
}
