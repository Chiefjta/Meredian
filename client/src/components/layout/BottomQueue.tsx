import { useServices } from '@/hooks/useServices';
import { cn } from '@/lib/cn';
import type { ServiceType } from '@/types';

const TYPES: ServiceType[] = ['website', 'saas', 'mobile', 'integration', 'audit'];

const LABELS: Record<ServiceType, string> = {
  website: 'Websites',
  saas: 'SaaS',
  mobile: 'Mobile',
  integration: 'Integrations',
  audit: 'Audits',
};

export function BottomQueue() {
  const { data: services = [] } = useServices();

  return (
    <footer
      className="glass flex shrink-0 items-center gap-3 overflow-x-auto rounded-none border-x-0 border-b-0 px-4 py-2 scrollbar-thin"
      aria-label="Service queue summary"
    >
      {TYPES.map((t) => {
        const subset = services.filter((s) => s.type === t);
        const total = subset.length;
        const avg = total
          ? Math.round(subset.reduce((acc, s) => acc + s.progress, 0) / total)
          : 0;
        return (
          <div key={t} className="flex min-w-[160px] flex-col gap-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="uppercase tracking-wider text-text-dim">{LABELS[t]}</span>
              <span className="font-mono text-text-muted">
                {total > 0 ? `${avg}%` : '—'}
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-white/5">
              <div
                className={cn('h-full rounded-full bg-accent-cyan transition-[width] duration-500')}
                style={{ width: `${avg}%` }}
                role="progressbar"
                aria-valuenow={avg}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${LABELS[t]} average progress ${avg}%`}
              />
            </div>
            <div className="text-[10px] font-mono text-text-dim">{total} items</div>
          </div>
        );
      })}
    </footer>
  );
}
