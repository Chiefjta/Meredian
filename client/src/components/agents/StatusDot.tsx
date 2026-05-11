import { cn } from '@/lib/cn';
import type { AgentStatus } from '@/types';

const STATUS_CLASS: Record<AgentStatus, string> = {
  idle: 'bg-status-idle',
  thinking: 'bg-status-thinking shadow-[0_0_8px_var(--status-thinking)]',
  working: 'bg-status-working shadow-[0_0_8px_var(--status-working)]',
  blocked: 'bg-status-blocked shadow-[0_0_8px_var(--status-blocked)]',
  offline: 'bg-status-offline',
};

interface StatusDotProps {
  status: AgentStatus;
  size?: 'sm' | 'md';
  className?: string;
}

export function StatusDot({ status, size = 'md', className }: StatusDotProps) {
  return (
    <span
      role="status"
      aria-label={`Status: ${status}`}
      className={cn(
        'inline-block rounded-full',
        size === 'sm' ? 'h-2 w-2' : 'h-2.5 w-2.5',
        STATUS_CLASS[status],
        status === 'thinking' || status === 'working' ? 'animate-pulseDot' : '',
        className,
      )}
    />
  );
}
