import type { ServiceItem } from '@/types';
import { SERVICE_SEED } from '@/lib/mock/services';
import { API_MODE, delay, jsonFetch } from './client';

export async function fetchServices(): Promise<ServiceItem[]> {
  if (API_MODE === 'mock') return delay(SERVICE_SEED);
  return jsonFetch<ServiceItem[]>('/services');
}
