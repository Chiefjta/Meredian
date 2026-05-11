import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchAgents, summonAgent } from '@/lib/api/agents';
import { getSocket } from '@/lib/socket/client';
import type { Agent } from '@/types';

const KEY = ['agents'] as const;

export function useAgents() {
  const qc = useQueryClient();
  const query = useQuery({ queryKey: KEY, queryFn: fetchAgents, staleTime: 30_000 });

  useEffect(() => {
    const socket = getSocket();
    const onStatus = (a: Agent) => {
      qc.setQueryData<Agent[] | undefined>(KEY, (prev) => {
        if (!prev) return prev;
        const idx = prev.findIndex((x) => x.id === a.id);
        if (idx === -1) return [...prev, a];
        const next = prev.slice();
        next[idx] = { ...prev[idx]!, ...a };
        return next;
      });
    };
    socket.on('agent:status', onStatus);
    return () => {
      socket.off('agent:status', onStatus);
    };
  }, [qc]);

  return query;
}

export function useSummon() {
  return useMutation({ mutationFn: summonAgent });
}
