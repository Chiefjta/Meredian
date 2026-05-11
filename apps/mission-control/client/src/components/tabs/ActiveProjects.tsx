import { ProjectCard } from '@/components/projects/ProjectCard';
import { useProjects } from '@/hooks/useProjects';
import { useSelection } from '@/store/selection';

export function ActiveProjects() {
  const { data, isLoading, isError } = useProjects();
  const selectedProjectId = useSelection((s) => s.selectedProjectId);

  if (isLoading) {
    return (
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass h-32 rounded-xl animate-pulse" aria-hidden />
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="glass rounded-xl p-6 text-center text-sm text-status-blocked">
        Failed to load projects.
      </div>
    );
  }

  const filtered = selectedProjectId ? data.filter((p) => p.id === selectedProjectId) : data;

  if (filtered.length === 0) {
    return (
      <div className="glass rounded-xl p-6 text-center text-sm text-text-dim">
        No projects match the current selection.
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filtered.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
}
