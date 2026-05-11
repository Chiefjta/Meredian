import * as React from 'react';
import { cn } from '@/lib/cn';

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('glass rounded-xl', className)}
      {...props}
    />
  ),
);
GlassCard.displayName = 'GlassCard';
