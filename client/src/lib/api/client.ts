// Single switch for mock vs live. Flip via VITE_API_MODE in .env.local.
export const API_MODE: 'mock' | 'live' = (import.meta.env.VITE_API_MODE ?? 'mock') as
  | 'mock'
  | 'live';

export const API_URL = import.meta.env.VITE_API_URL ?? '/api';

export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL ?? '';

export async function jsonFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'content-type': 'application/json' },
    ...init,
  });
  if (!res.ok) {
    throw new Error(`API ${path} → ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

// Simulated latency for mock paths so loading states are visible.
export function delay<T>(value: T, ms = 250): Promise<T> {
  return new Promise((r) => setTimeout(() => r(value), ms));
}
