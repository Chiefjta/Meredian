import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AgentRow } from '@/components/agents/AgentRow';
import { useUI } from '@/store/ui';
import { useAgents } from '@/hooks/useAgents';
import { cn } from '@/lib/cn';

export function LeftSidebar() {
  const collapsed = useUI((s) => s.leftCollapsed);
  const toggle = useUI((s) => s.toggleLeft);
  const { data: agents = [], isLoading } = useAgents();

  return (
    <aside
      className={cn(
        'glass flex h-full shrink-0 flex-col rounded-none border-y-0 border-l-0 transition-[width] duration-200',
        collapsed ? 'w-14' : 'w-64',
      )}
      aria-label="Agents"
    >
      <div className="flex items-center justify-between px-2.5 py-2 border-b border-border-subtle">
        {!collapsed && (
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-text-dim">
            <Users className="h-3.5 w-3.5" aria-hidden /> Agents
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggle}
          aria-label={collapsed ? 'Expand agent panel' : 'Collapse agent panel'}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <Separator />
      <div className="flex-1 overflow-auto scrollbar-thin p-1.5">
        {isLoading
          ? Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-10 my-1 rounded-md bg-white/5 animate-pulse" aria-hidden />
            ))
          : agents.map((a) => <AgentRow key={a.id} agent={a} collapsed={collapsed} />)}
      </div>
    </aside>
  );
}
