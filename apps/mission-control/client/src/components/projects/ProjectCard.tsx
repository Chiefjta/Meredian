import { HealthRing } from './HealthRing';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/common/GlassCard';
import { useAgents } from '@/hooks/useAgents';
import type { Project, ProjectPhase } from '@/types';

const PHASE_TONE: Record<ProjectPhase, 'neutral' | 'cyan' | 'purple' | 'ok' | 'warn'> = {
  discovery: 'neutral',
  build: 'cyan',
  qa: 'purple',
  delivery: 'warn',
  live: 'ok',
};

export function ProjectCard({ project }: { project: Project }) {
  const { data: agents = [] } = useAgents();
  const assigned = agents.filter((a) => project.assignedAgents.includes(a.id));

  return (
    <GlassCard className="p-4 flex flex-col gap-3 hover:border-accent-cyan/40 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-text-primary">{project.name}</h3>
          <p className="truncate text-xs text-text-dim">{project.client}</p>
        </div>
        <HealthRing value={project.healthScore} />
      </div>
      <div className="flex items-center justify-between">
        <Badge tone={PHASE_TONE[project.phase]}>{project.phase}</Badge>
        <div className="flex -space-x-1.5">
          {assigned.slice(0, 4).map((a) => (
            <div
              key={a.id}
              className="grid h-6 w-6 place-items-center rounded-full border border-border-subtle bg-bg-raised text-[10px] font-mono text-text-muted"
              title={a.name}
            >
              {a.name.slice(0, 1)}
            </div>
          ))}
          {assigned.length > 4 ? (
            <div className="grid h-6 w-6 place-items-center rounded-full border border-border-subtle bg-bg-raised text-[10px] text-text-dim">
              +{assigned.length - 4}
            </div>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}
