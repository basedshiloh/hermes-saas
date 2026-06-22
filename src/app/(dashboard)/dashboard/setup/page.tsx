"use client";

import PackPicker from "@/src/components/dashboard/setup/pack-picker";
import ByokForm from "@/src/components/dashboard/setup/byok-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Step = "packs" | "keys" | "mode";

export default function SetupPage() {
  const [step, setStep] = useState<Step>("packs");
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);
  const router = useRouter();

  function handlePacksSubmit(packs: string[]) {
    setSelectedPacks(packs);
    setStep("keys");
  }

  function handleKeysComplete() {
    setStep("mode");
  }

  function handleModeSelect(mode: "wizard" | "blank") {
    selectedPacks.forEach(async (packId) => {
      await fetch("/api/packs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packId }),
      });
    });

    if (mode === "wizard") {
      router.push("/dashboard/provisioning");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="flex h-full items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {step === "packs" && <PackPicker onSubmit={handlePacksSubmit} />}
        {step === "keys" && <ByokForm onComplete={handleKeysComplete} />}
        {step === "mode" && (
          <div className="space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-white">
                How do you want to start?
              </h2>
              <p className="text-sm text-white/50">
                Choose your preferred way to get started with Hermes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleModeSelect("wizard")}
                className="border-stroke-5 hover:border-primary-500 group space-y-3 rounded-xl border bg-white/5 p-6 text-left transition-all hover:bg-white/10"
              >
                <div className="bg-primary-600/20 flex size-12 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Setup Wizard
                </h3>
                <p className="text-sm text-white/50">
                  Guided configuration for your selected packs. Best for getting
                  started quickly.
                </p>
              </button>

              <button
                onClick={() => handleModeSelect("blank")}
                className="border-stroke-5 hover:border-primary-500 group space-y-3 rounded-xl border bg-white/5 p-6 text-left transition-all hover:bg-white/10"
              >
                <div className="bg-primary-600/20 flex size-12 items-center justify-center rounded-lg">
                  <svg
                    className="text-primary-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Start Blank</h3>
                <p className="text-sm text-white/50">
                  Just the chat. Configure everything through natural language
                  with your agent.
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
