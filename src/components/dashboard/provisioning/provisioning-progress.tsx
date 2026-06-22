"use client";

import { useEffect, useState } from "react";

interface Stage {
  id: string;
  label: string;
  description: string;
}

const STAGES: Stage[] = [
  {
    id: "QUEUED",
    label: "Queued",
    description: "Your agent is in the deployment queue...",
  },
  {
    id: "ALLOCATING_HOST",
    label: "Allocating resources",
    description: "Selecting the best server for your agent...",
  },
  {
    id: "PULLING_IMAGE",
    label: "Downloading agent",
    description: "Pulling the latest Hermes agent image...",
  },
  {
    id: "STARTING_CONTAINER",
    label: "Starting environment",
    description: "Spinning up your private agent environment...",
  },
  {
    id: "INSTALLING_HERMES",
    label: "Installing Hermes",
    description: "Setting up the Hermes agent in your environment...",
  },
  {
    id: "CONFIGURING_GATEWAY",
    label: "Configuring gateway",
    description: "Setting up the communication channel to your agent...",
  },
  {
    id: "HEALTH_CHECK",
    label: "Health check",
    description: "Verifying everything is working correctly...",
  },
  {
    id: "READY",
    label: "Ready!",
    description: "Your Hermes agent is live and ready to chat.",
  },
];

export default function ProvisioningProgress() {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);

  // Phase 0: simulate progress for UI testing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStageIndex((prev) => {
        if (prev >= STAGES.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const progress = ((currentStageIndex + 1) / STAGES.length) * 100;

  return (
    <div className="w-full max-w-lg space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Deploying your agent
        </h2>
        <p className="text-sm text-white/50">
          This usually takes about 2 minutes. You can leave this page and come
          back.
        </p>
      </div>

      <div className="space-y-3">
        <div className="bg-background-7 h-2 overflow-hidden rounded-full">
          <div
            className="bg-primary-600 h-full rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs text-white/40">
          {Math.round(progress)}% complete
        </p>
      </div>

      <div className="space-y-2">
        {STAGES.map((stage, i) => {
          const isComplete = i < currentStageIndex;
          const isCurrent = i === currentStageIndex;
          const isPending = i > currentStageIndex;

          return (
            <div
              key={stage.id}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-300 ${
                isCurrent
                  ? "bg-primary-600/10 border-primary-600/30 border"
                  : isComplete
                    ? "opacity-60"
                    : "opacity-30"
              }`}
            >
              <div className="flex size-6 shrink-0 items-center justify-center">
                {isComplete ? (
                  <svg
                    className="text-green-400"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                ) : isCurrent ? (
                  <div className="bg-primary-500 size-3 animate-pulse rounded-full" />
                ) : (
                  <div className="bg-background-9 size-3 rounded-full" />
                )}
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${isPending ? "text-white/40" : "text-white"}`}
                >
                  {stage.label}
                </p>
                {isCurrent && (
                  <p className="text-xs text-white/50">{stage.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
