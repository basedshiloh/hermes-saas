'use client';

import PackPicker from '@/src/components/dashboard/setup/pack-picker';
import ByokForm from '@/src/components/dashboard/setup/byok-form';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Step = 'packs' | 'keys' | 'mode';

export default function SetupPage() {
  const [step, setStep] = useState<Step>('packs');
  const router = useRouter();

  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {step === 'packs' && <PackPicker onSubmit={() => setStep('keys')} />}
        {step === 'keys' && <ByokForm onComplete={() => setStep('mode')} />}
        {step === 'mode' && (
          <div className="space-y-10 text-center">
            <div className="space-y-3">
              <h2 className="text-heading-4 font-inter-tight text-accent">How do you want to start?</h2>
              <p className="text-tagline-1 font-inter-tight text-primary-50/50 font-normal">
                Choose your preferred way to get started with Hermes.
              </p>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6">
              <button
                onClick={() => router.push('/dashboard/provisioning')}
                className="border-stroke-5 bg-background-7 hover:border-primary-400 space-y-4 rounded-xl border p-8 text-left transition-all hover:bg-background-9"
              >
                <div className="bg-secondary flex size-14 items-center justify-center rounded-2xl">
                  <span className="icon-settings text-[24px] text-white" />
                </div>
                <h3 className="text-heading-6 font-inter-tight text-accent">Setup Wizard</h3>
                <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
                  Guided configuration for your selected packs. Best for getting started quickly.
                </p>
              </button>

              <button
                onClick={() => router.push('/dashboard')}
                className="border-stroke-5 bg-background-7 hover:border-primary-400 space-y-4 rounded-xl border p-8 text-left transition-all hover:bg-background-9"
              >
                <div className="bg-secondary flex size-14 items-center justify-center rounded-2xl">
                  <span className="icon-message-square text-[24px] text-white" />
                </div>
                <h3 className="text-heading-6 font-inter-tight text-accent">Start Blank</h3>
                <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
                  Just the chat. Configure everything through natural language with your agent.
                </p>
              </button>
            </div>

            <div className="flex justify-center gap-4">
              <ButtonPrimary onClick={() => router.push('/dashboard/provisioning')}>
                Setup Wizard
              </ButtonPrimary>
              <ButtonWhite onClick={() => router.push('/dashboard')}>
                Start Blank
              </ButtonWhite>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
