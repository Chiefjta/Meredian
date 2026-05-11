import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Combobox, type ComboboxItem } from '@/components/ui/combobox';
import { BrandMark } from '@/components/common/BrandMark';
import { StatPill } from '@/components/common/StatPill';
import { useAgents } from '@/hooks/useAgents';
import { useProjects } from '@/hooks/useProjects';
import { useServices } from '@/hooks/useServices';
import { useSelection } from '@/store/selection';

export function Header() {
  const { data: agents = [] } = useAgents();
  const { data: projects = [] } = useProjects();
  const { data: services = [] } = useServices();
  const selected = useSelection((s) => s.selectedProjectId);
  const setProject = useSelection((s) => s.setProject);

  const items: ComboboxItem[] = [
    { value: '__all', label: 'All projects', hint: `${projects.length} total` },
    ...projects.map((p) => ({ value: p.id, label: p.name, hint: p.client })),
  ];

  const online = agents.filter((a) => a.status !== 'offline').length;

  const securityScore = projects.length
    ? Math.round(projects.reduce((s, p) => s + p.healthScore, 0) / projects.length)
    : 100;

  const doneCount = services.filter((s) => s.status === 'done').length;
  const qualityScore = services.length ? Math.round((doneCount / services.length) * 100) : 0;

  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border-subtle bg-bg-base/80 px-4 backdrop-blur-glass">
      <div className="flex items-center gap-4">
        <BrandMark />
        <div className="hidden md:block">
          <Combobox
            items={items}
            value={selected ?? '__all'}
            onChange={(v) => setProject(v === '__all' || v == null ? null : v)}
            placeholder="All projects"
            ariaLabel="Select project"
          />
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <StatPill label="Agents online" value={`${online}/${agents.length}`} tone="cyan" />
        <StatPill label="Security" value={`${securityScore}%`} tone="purple" />
        <StatPill label="Quality" value={`${qualityScore}%`} tone="cyan" />
      </div>
      <Button variant="primary" size="md">
        <Plus className="h-4 w-4" aria-hidden /> New Project
      </Button>
    </header>
  );
}
