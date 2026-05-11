import { KanbanColumn } from '@/components/pipeline/KanbanColumn';
import { useServices } from '@/hooks/useServices';
import { useSelection } from '@/store/selection';
import type { ServiceStatus } from '@/types';

const COLUMNS: ServiceStatus[] = ['queued', 'in_progress', 'review', 'done'];

export function ServicePipeline() {
  const { data, isLoading, isError } = useServices();
  const selectedProjectId = useSelection((s) => s.selectedProjectId);

  if (isLoading) {
    return (
      <div className="grid h-[60vh] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {COLUMNS.map((c) => (
          <div key={c} className="glass rounded-xl animate-pulse" aria-hidden />
        ))}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="glass rounded-xl p-6 text-center text-sm text-status-blocked">
        Failed to load services.
      </div>
    );
  }

  const filtered = selectedProjectId ? data.filter((s) => s.projectId === selectedProjectId) : data;

  return (
    <div className="grid h-[60vh] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {COLUMNS.map((status) => (
        <KanbanColumn
          key={status}
          status={status}
          items={filtered.filter((s) => s.status === status)}
        />
      ))}
    </div>
  );
}
