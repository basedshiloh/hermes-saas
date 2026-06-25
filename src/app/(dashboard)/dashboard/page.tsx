'use client';

import AgentStatus from '@/src/components/dashboard/agent-status';
import { PACKS } from '@/src/data/mock-dashboard';
import { cn } from '@/src/utils/cn';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Agent {
  id: string;
  name: string;
  packId: string;
  state: string;
  createdAt: string;
}

function packName(id: string) {
  return PACKS.find((p) => p.id === id)?.name ?? id;
}
function packIcon(id: string) {
  return PACKS.find((p) => p.id === id)?.iconClass ?? 'icon-cpu';
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[] | null>(null);

  async function load() {
    try {
      const res = await fetch('/api/agents');
      const data = await res.json();
      setAgents(data.agents ?? []);
    } catch {
      setAgents([]);
    }
  }

  useEffect(() => {
    load();
    // Poll while any agent is provisioning
    const interval = setInterval(load, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-heading-5 font-inter-tight text-accent">My Agents</h2>
          <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
            Deploy and manage your Hermes AI agents.
          </p>
        </div>
        <Link
          href="/dashboard/new"
          className="bg-secondary text-tagline-2 font-ibm-plex-mono rounded-full px-5 py-2.5 font-normal text-white transition-opacity hover:opacity-90"
        >
          + Deploy Agent
        </Link>
      </div>

      {agents === null ? (
        <p className="text-tagline-2 font-inter-tight text-primary-50/40 font-normal">Loading...</p>
      ) : agents.length === 0 ? (
        <div className="border-stroke-5 bg-background-7 flex flex-col items-center gap-4 rounded-xl border border-dashed p-12 text-center">
          <span className="icon-cpu text-primary-50/30 text-4xl" />
          <div>
            <p className="text-tagline-1 font-inter-tight text-accent font-medium">No agents yet</p>
            <p className="text-tagline-2 font-inter-tight text-primary-50/50 font-normal">
              Deploy your first AI agent in one click.
            </p>
          </div>
          <Link
            href="/dashboard/new"
            className="bg-secondary text-tagline-2 font-ibm-plex-mono rounded-full px-5 py-2.5 font-normal text-white"
          >
            + Deploy Agent
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {agents.map((agent) => {
            const clickable = agent.state === 'RUNNING' || agent.state === 'SLEEPING';
            const card = (
              <div
                className={cn(
                  'border-stroke-5 bg-background-7 space-y-4 rounded-xl border p-5 transition-all',
                  clickable ? 'hover:border-stroke-7 cursor-pointer' : 'opacity-80',
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="bg-secondary flex size-11 items-center justify-center rounded-2xl">
                    <span className={cn(packIcon(agent.packId), 'text-[20px] text-white')} />
                  </div>
                  <AgentStatus state={agent.state} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-tagline-1 font-inter-tight text-accent font-medium">{agent.name}</h3>
                  <p className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">
                    {packName(agent.packId)}
                  </p>
                </div>
              </div>
            );
            return clickable ? (
              <Link key={agent.id} href={`/dashboard/agents/${agent.id}`}>
                {card}
              </Link>
            ) : (
              <div key={agent.id}>{card}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}
