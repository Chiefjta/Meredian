import { useEffect, useRef, useState } from 'react';
import { Virtuoso, type VirtuosoHandle } from 'react-virtuoso';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/common/GlassCard';
import { useEventStream } from '@/hooks/useEventStream';
import { useUI } from '@/store/ui';
import type { OrchestrationEvent, OrchestrationEventType } from '@/types';

const TYPE_TONE: Record<OrchestrationEventType, 'cyan' | 'purple' | 'neutral' | 'ok'> = {
  message: 'neutral',
  handoff: 'cyan',
  tool_call: 'purple',
  completion: 'ok',
};

export function LiveFeed() {
  const auto = useUI((s) => s.autoScrollFeed);
  const setAuto = useUI((s) => s.setAutoScroll);
  const [hovering, setHovering] = useState(false);
  const paused = !auto || hovering;
  const events = useEventStream(paused);
  const ref = useRef<VirtuosoHandle | null>(null);

  // Auto-scroll-to-top (newest first) when not paused.
  useEffect(() => {
    if (paused) return;
    ref.current?.scrollToIndex({ index: 0, behavior: 'auto' });
  }, [events.length, paused]);

  return (
    <GlassCard
      className="flex h-[60vh] flex-col"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="flex items-center justify-between border-b border-border-subtle px-3 py-2">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span className="font-mono">{events.length}</span>
          <span>events</span>
          {paused ? <Badge tone="warn">paused</Badge> : <Badge tone="cyan">live</Badge>}
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setAuto(!auto)}
          aria-label={auto ? 'Pause auto-scroll' : 'Resume auto-scroll'}
        >
          {auto ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          <span className="ml-1">{auto ? 'Pause' : 'Resume'}</span>
        </Button>
      </div>
      <Virtuoso
        ref={ref}
        data={events}
        className="flex-1 scrollbar-thin"
        itemContent={(_idx, e) => <EventRow event={e} />}
      />
    </GlassCard>
  );
}

function EventRow({ event }: { event: OrchestrationEvent }) {
  const time = new Date(event.ts).toLocaleTimeString();
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border-subtle/60 px-3 py-1.5 font-mono text-[12px] hover:bg-white/5">
      <span className="text-text-dim">{time}</span>
      <span className="truncate">
        <span className="text-accent-cyan">{event.from}</span>
        {event.to ? (
          <>
            <span className="text-text-dim"> → </span>
            <span className="text-accent-purple">{event.to}</span>
          </>
        ) : null}
        <span className="text-text-muted"> {(event.payload.note as string) ?? ''}</span>
      </span>
      <Badge tone={TYPE_TONE[event.type]}>{event.type}</Badge>
    </div>
  );
}
