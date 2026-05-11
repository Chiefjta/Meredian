import { Sparkles } from 'lucide-react';
import { StatusDot } from './StatusDot';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/cn';
import { useSummon } from '@/hooks/useAgents';
import { useSelection } from '@/store/selection';
import type { Agent } from '@/types';

interface AgentRowProps {
  agent: Agent;
  collapsed: boolean;
}

export function AgentRow({ agent, collapsed }: AgentRowProps) {
  const summon = useSummon();
  const setAgent = useSelection((s) => s.setAgent);
  const selectedAgent = useSelection((s) => s.selectedAgentId);
  const isSelected = selectedAgent === agent.id;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setAgent(isSelected ? null : agent.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setAgent(isSelected ? null : agent.id);
        }
      }}
      className={cn(
        'group flex items-center gap-3 rounded-md border border-transparent px-2.5 py-2 transition-colors',
        'hover:border-border-subtle hover:bg-white/5 cursor-pointer',
        isSelected && 'border-accent-cyan/40 bg-accent-cyan/5',
      )}
      aria-pressed={isSelected}
    >
      <StatusDot status={agent.status} />
      {!collapsed && (
        <div className="flex-1 min-w-0">
          <div className="truncate text-sm font-medium text-text-primary">{agent.name}</div>
          <div className="truncate text-[11px] text-text-dim">{agent.role}</div>
        </div>
      )}
      {!collapsed && (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label={`Summon ${agent.name}`}
              onClick={(e) => {
                e.stopPropagation();
                summon.mutate(agent.id);
              }}
              disabled={summon.isPending}
              className="opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Summon agent</TooltipContent>
        </Tooltip>
      )}
    </div>
  );
}
