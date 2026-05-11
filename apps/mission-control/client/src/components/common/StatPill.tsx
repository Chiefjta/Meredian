import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface StatPillProps {
  label: string;
  value: ReactNode;
  tone?: 'cyan' | 'purple' | 'neutral';
  className?: string;
}

const TONE_MAP = {
  cyan: 'border-accent-cyan/40 text-accent-cyan',
  purple: 'border-accent-purple/40 text-accent-purple',
  neutral: 'border-border-subtle text-text-muted',
} as const;

export function StatPill({ label, value, tone = 'neutral', className }: StatPillProps) {
  return (
    <div
      className={cn(
        'glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium',
        TONE_MAP[tone],
        className,
      )}
    >
      <span className="text-text-dim uppercase tracking-wider text-[10px]">{label}</span>
      <span className="font-mono text-sm">{value}</span>
    </div>
  );
}
