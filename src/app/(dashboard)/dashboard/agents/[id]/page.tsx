'use client';

import AgentStatus from '@/src/components/dashboard/agent-status';
import ChatPanel from '@/src/components/dashboard/chat/chat-panel';
import ProvisioningProgress from '@/src/components/dashboard/provisioning/provisioning-progress';
import { PACKS } from '@/src/data/mock-dashboard';
import { cn } from '@/src/utils/cn';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Agent {
  id: string;
  name: string;
  packId: string;
  state: string;
}

export default function AgentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const agentId = params.id as string;
  const [agent, setAgent] = useState<Agent | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [busy, setBusy] = useState(false);

  async function load() {
    try {
      const res = await fetch(`/api/agents/${agentId}`);
      if (res.status === 404) {
        setNotFound(true);
        return;
      }
      const data = await res.json();
      setAgent(data.agent);
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    load();
    const interval = setInterval(() => {
      setAgent((cur) => {
        if (cur && (cur.state === 'PROVISIONING' || cur.state === 'PENDING')) load();
        return cur;
      });
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentId]);

  async function action(path: string, method = 'POST') {
    setBusy(true);
    try {
      await fetch(`/api/agents/${agentId}${path}`, { method });
      if (method === 'DELETE') {
        router.push('/dashboard');
        return;
      }
      await load();
    } finally {
      setBusy(false);
    }
  }

  if (notFound) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-tagline-1 font-inter-tight text-primary-50/50 font-normal">Agent not found.</p>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-tagline-2 font-inter-tight text-primary-50/40 font-normal">Loading...</p>
      </div>
    );
  }

  const pack = PACKS.find((p) => p.id === agent.packId);
  const isReady = agent.state === 'RUNNING' || agent.state === 'SLEEPING';
  const isDeploying = agent.state === 'PROVISIONING' || agent.state === 'PENDING';

  return (
    <div className="flex h-full flex-col">
      <div className="border-stroke-5 flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="bg-secondary flex size-10 items-center justify-center rounded-xl">
            <span className={cn(pack?.iconClass ?? 'icon-cpu', 'text-[18px] text-white')} />
          </span>
          <div>
            <h2 className="text-tagline-1 font-inter-tight text-accent font-medium">{agent.name}</h2>
            <div className="flex items-center gap-2">
              <span className="text-tagline-3 font-inter-tight text-primary-50/50 font-normal">
                {pack?.name}
              </span>
              <span className="text-primary-50/20">·</span>
              <AgentStatus state={agent.state} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {agent.state === 'RUNNING' && (
            <button
              onClick={() => action('/stop')}
              disabled={busy}
              className="border-stroke-5 text-tagline-3 font-inter-tight text-primary-50/70 hover:text-accent rounded-full border px-4 py-2 font-normal disabled:opacity-40"
            >
              Stop
            </button>
          )}
          {agent.state === 'SLEEPING' && (
            <button
              onClick={() => action('/start')}
              disabled={busy}
              className="border-stroke-5 text-tagline-3 font-inter-tight text-primary-50/70 hover:text-accent rounded-full border px-4 py-2 font-normal disabled:opacity-40"
            >
              Start
            </button>
          )}
          <button
            onClick={() => action('', 'DELETE')}
            disabled={busy}
            className="text-tagline-3 font-inter-tight text-ns-red rounded-full px-4 py-2 font-normal disabled:opacity-40"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {isReady && <ChatPanel agentId={agent.id} />}
        {isDeploying && (
          <div className="flex h-full items-center justify-center p-6">
            <ProvisioningProgress />
          </div>
        )}
        {agent.state === 'ERROR' && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
            <p className="text-tagline-1 font-inter-tight text-ns-red font-normal">
              Deployment failed.
            </p>
            <button
              onClick={() => router.push('/dashboard/new')}
              className="bg-secondary text-tagline-2 font-ibm-plex-mono rounded-full px-5 py-2.5 font-normal text-white"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
