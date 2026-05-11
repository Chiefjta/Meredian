import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide border',
  {
    variants: {
      tone: {
        neutral: 'bg-bg-raised/60 text-text-muted border-border-subtle',
        cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
        purple: 'bg-accent-purple/10 text-accent-purple border-accent-purple/30',
        warn: 'bg-status-blocked/10 text-status-blocked border-status-blocked/30',
        ok: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
