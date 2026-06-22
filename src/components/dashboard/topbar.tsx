"use client";

import { UserButton } from "@clerk/nextjs";

// Clerk components only mount when its key is configured (inlined at build
// time). Until then the dashboard still renders with a placeholder avatar.
const clerkEnabled = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
);

export default function Topbar({
  instanceState,
}: {
  instanceState?: string | null;
}) {
  const stateLabels: Record<string, { label: string; color: string }> = {
    RUNNING: { label: "Online", color: "bg-green-500" },
    SLEEPING: { label: "Sleeping", color: "bg-yellow-500" },
    PROVISIONING: { label: "Deploying...", color: "bg-blue-500" },
    PENDING: { label: "Setting up...", color: "bg-blue-500" },
    ERROR: { label: "Error", color: "bg-red-500" },
    DESTROYED: { label: "Offline", color: "bg-neutral-500" },
  };

  const state = instanceState
    ? stateLabels[instanceState] || { label: instanceState, color: "bg-neutral-500" }
    : null;

  return (
    <header className="bg-background-8 border-stroke-5 flex h-16 shrink-0 items-center justify-between border-b px-6">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-medium text-white">Dashboard</h1>
        {state && (
          <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className={cn(state.color, "inline-block size-2 rounded-full")} />
            {state.label}
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        {clerkEnabled ? (
          <UserButton
            appearance={{
              elements: {
                avatarBox: "size-8",
              },
            }}
          />
        ) : (
          <div className="bg-background-7 size-8 rounded-full" />
        )}
      </div>
    </header>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
