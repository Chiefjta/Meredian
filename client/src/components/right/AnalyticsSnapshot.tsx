import { useAgents } from '@/hooks/useAgents';
import { useProjects } from '@/hooks/useProjects';
import { useServices } from '@/hooks/useServices';
import { GlassCard } from '@/components/common/GlassCard';

export function AnalyticsSnapshot() {
  const { data: agents = [] } = useAgents();
  const { data: projects = [] } = useProjects();
  const { data: services = [] } = useServices();

  const stats = [
    { label: 'Agents', value: agents.length, hint: 'total' },
    {
      label: 'Online',
      value: agents.filter((a) => a.status !== 'offline').length,
      hint: 'non-offline',
    },
    { label: 'Projects', value: projects.length, hint: 'tracked' },
    {
      label: 'In flight',
      value: services.filter((s) => s.status === 'in_progress').length,
      hint: 'services',
    },
    {
      label: 'Avg health',
      value: projects.length
        ? Math.round(projects.reduce((s, p) => s + p.healthScore, 0) / projects.length)
        : 0,
      hint: '0–100',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      {stats.map((s) => (
        <GlassCard key={s.label} className="p-3">
          <div className="text-[10px] uppercase tracking-wider text-text-dim">{s.label}</div>
          <div className="mt-1 font-mono text-2xl text-accent-cyan">{s.value}</div>
          <div className="text-[10px] text-text-dim">{s.hint}</div>
        </GlassCard>
      ))}
    </div>
  );
}
