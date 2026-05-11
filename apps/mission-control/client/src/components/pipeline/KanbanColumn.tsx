import { GlassCard } from '@/components/common/GlassCard';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/cn';
import type { ServiceItem, ServiceStatus } from '@/types';

const COLUMN_TITLE: Record<ServiceStatus, string> = {
  queued: 'Queued',
  in_progress: 'In Progress',
  review: 'Review',
  done: 'Done',
};

const ACCENT: Record<ServiceStatus, string> = {
  queued: 'var(--col-queued)',
  in_progress: 'var(--col-in-progress)',
  review: 'var(--col-review)',
  done: 'var(--col-done)',
};

interface KanbanColumnProps {
  status: ServiceStatus;
  items: ServiceItem[];
}

export function KanbanColumn({ status, items }: KanbanColumnProps) {
  return (
    <div className="flex h-full min-w-[240px] flex-1 flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: ACCENT[status] }}
            aria-hidden
          />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {COLUMN_TITLE[status]}
          </h3>
        </div>
        <span className="font-mono text-[11px] text-text-dim">{items.length}</span>
      </div>
      <div className="flex flex-col gap-2 overflow-auto scrollbar-thin pr-1">
        {items.length === 0 ? (
          <div className="text-xs text-text-dim px-2 py-4 italic">Empty.</div>
        ) : (
          items.map((s) => (
            <GlassCard key={s.id} className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm text-text-primary">
                  {s.title ?? `${s.type} · ${s.id}`}
                </div>
                <Badge tone="neutral">{s.type}</Badge>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                <div
                  className={cn('h-full rounded-full transition-[width] duration-500')}
                  style={{ width: `${s.progress}%`, background: ACCENT[status] }}
                  role="progressbar"
                  aria-valuenow={s.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="mt-1 text-[11px] font-mono text-text-dim">{s.progress}%</div>
            </GlassCard>
          ))
        )}
      </div>
    </div>
  );
}
