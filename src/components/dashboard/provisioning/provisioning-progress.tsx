'use client';

import { cn } from '@/src/utils/cn';
import { PROVISIONING_STAGES } from '@/src/data/mock-dashboard';
import { useEffect, useState } from 'react';

export default function ProvisioningProgress() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= PROVISIONING_STAGES.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const progress = ((currentIndex + 1) / PROVISIONING_STAGES.length) * 100;

  return (
    <div className="w-full max-w-lg space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="text-heading-4 font-inter-tight text-accent">Deploying your agent</h2>
        <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
          This usually takes about 2 minutes. You can leave this page and come back.
        </p>
      </div>

      <div className="space-y-3">
        <div className="bg-background-7 h-2 overflow-hidden rounded-full">
          <div
            className="bg-(image:--color-gradient-4) h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-tagline-3 font-inter-tight text-primary-50/40 text-center font-normal">
          {Math.round(progress)}% complete
        </p>
      </div>

      <div className="space-y-2">
        {PROVISIONING_STAGES.map((stage, i) => {
          const isComplete = i < currentIndex;
          const isCurrent = i === currentIndex;
          const isPending = i > currentIndex;

          return (
            <div
              key={stage.id}
              className={cn(
                'flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300',
                isCurrent
                  ? 'bg-primary-600/10 border-primary-600/30 border'
                  : isComplete
                    ? 'opacity-60'
                    : 'opacity-30',
              )}
            >
              <div className="flex size-6 shrink-0 items-center justify-center">
                {isComplete ? (
                  <svg className="text-ns-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                ) : isCurrent ? (
                  <span className="bg-primary-400 size-3 animate-pulse rounded-full" />
                ) : (
                  <span className="bg-background-9 size-3 rounded-full" />
                )}
              </div>
              <div>
                <p className={cn('text-tagline-2 font-inter-tight font-normal', isPending ? 'text-primary-50/40' : 'text-accent')}>
                  {stage.label}
                </p>
                {isCurrent && (
                  <p className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">{stage.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
