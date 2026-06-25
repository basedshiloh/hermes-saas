import { cn } from '@/src/utils/cn';

const STATE: Record<string, { label: string; dot: string; text: string }> = {
  RUNNING: { label: 'Running', dot: 'bg-ns-green', text: 'text-ns-green' },
  SLEEPING: { label: 'Sleeping', dot: 'bg-ns-yellow', text: 'text-ns-yellow' },
  PROVISIONING: { label: 'Deploying', dot: 'bg-primary-400 animate-pulse', text: 'text-primary-300' },
  PENDING: { label: 'Pending', dot: 'bg-primary-400 animate-pulse', text: 'text-primary-300' },
  ERROR: { label: 'Error', dot: 'bg-ns-red', text: 'text-ns-red' },
  DESTROYED: { label: 'Destroyed', dot: 'bg-primary-50/30', text: 'text-primary-50/40' },
};

export default function AgentStatus({ state }: { state: string }) {
  const s = STATE[state] ?? STATE.PENDING;
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn('inline-block size-2 rounded-full', s.dot)} />
      <span className={cn('text-tagline-3 font-inter-tight font-normal', s.text)}>{s.label}</span>
    </span>
  );
}
