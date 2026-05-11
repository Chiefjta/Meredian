import type { Project } from '@/types';
import { PROJECT_SEED } from '@/lib/mock/projects';
import { API_MODE, delay, jsonFetch } from './client';

export async function fetchProjects(): Promise<Project[]> {
  if (API_MODE === 'mock') return delay(PROJECT_SEED);
  return jsonFetch<Project[]>('/projects');
}
