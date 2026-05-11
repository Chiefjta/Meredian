import { useAgents } from '@/hooks/useAgents';
import { useSelection } from '@/store/selection';
import { StatusDot } from '@/components/agents/StatusDot';
import { GlassCard } from '@/components/common/GlassCard';

export function AgentChatPreview() {
  const { data: agents = [] } = useAgents();
  const selectedId = useSelection((s) => s.selectedAgentId);
  const agent = agents.find((a) => a.id === selectedId) ?? agents[0];

  if (!agent) {
    return (
      <div className="text-sm text-text-dim italic">No agent online yet.</div>
    );
  }

  const sample = [
    { who: agent.name, text: `Picked up task ${agent.currentTaskId ?? '—'}.` },
    { who: 'Orchestrator', text: 'Acknowledged. Continue.' },
    { who: agent.name, text: 'Drafting plan…' },
  ];

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center gap-2">
        <StatusDot status={agent.status} />
        <div>
          <div className="text-sm font-medium text-text-primary">{agent.name}</div>
          <div className="text-[11px] text-text-dim">{agent.role}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 overflow-auto scrollbar-thin">
        {sample.map((m, i) => (
          <GlassCard key={i} className="p-2.5 text-xs">
            <div className="text-accent-cyan font-mono text-[10px]">{m.who}</div>
            <div className="mt-1 text-text-primary">{m.text}</div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
