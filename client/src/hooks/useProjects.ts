import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { fetchProjects } from '@/lib/api/projects';
import { getSocket } from '@/lib/socket/client';
import type { Project } from '@/types';

const KEY = ['projects'] as const;

export function useProjects() {
  const qc = useQueryClient();
  const query = useQuery({ queryKey: KEY, queryFn: fetchProjects, staleTime: 30_000 });

  useEffect(() => {
    const socket = getSocket();
    const onUpdate = (p: Project) => {
      qc.setQueryData<Project[] | undefined>(KEY, (prev) => {
        if (!prev) return prev;
        const idx = prev.findIndex((x) => x.id === p.id);
        if (idx === -1) return [...prev, p];
        const next = prev.slice();
        next[idx] = { ...prev[idx]!, ...p };
        return next;
      });
    };
    socket.on('project:update', onUpdate);
    return () => {
      socket.off('project:update', onUpdate);
    };
  }, [qc]);

  return query;
}
