import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/lib/api/services';

export function useServices() {
  return useQuery({ queryKey: ['services'] as const, queryFn: fetchServices, staleTime: 30_000 });
}
