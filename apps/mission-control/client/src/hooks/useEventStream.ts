import { useEffect, useRef, useState } from 'react';
import { getSocket } from '@/lib/socket/client';
import { EVENT_SEED } from '@/lib/mock/events';
import type { OrchestrationEvent } from '@/types';

const MAX_EVENTS = 500;

export function useEventStream(paused: boolean) {
  const [events, setEvents] = useState<OrchestrationEvent[]>(() => EVENT_SEED.slice());
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  useEffect(() => {
    const socket = getSocket();
    const onEvent = (e: OrchestrationEvent) => {
      if (pausedRef.current) return;
      setEvents((prev) => {
        const next = [e, ...prev];
        if (next.length > MAX_EVENTS) next.length = MAX_EVENTS;
        return next;
      });
    };
    socket.on('orchestration:event', onEvent);
    return () => {
      socket.off('orchestration:event', onEvent);
    };
  }, []);

  return events;
}
