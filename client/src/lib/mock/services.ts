import type { ServiceItem } from '@/types';

export const SERVICE_SEED: ServiceItem[] = [
  { id: 'svc-001', type: 'website',     projectId: 'proj-arysnel-portal',    progress: 65, status: 'in_progress', title: 'Marketing site' },
  { id: 'svc-002', type: 'saas',        projectId: 'proj-arysnel-portal',    progress: 40, status: 'in_progress', title: 'Billing module' },
  { id: 'svc-003', type: 'integration', projectId: 'proj-arysnel-portal',    progress: 100, status: 'done',       title: 'Stripe webhooks' },
  { id: 'svc-004', type: 'saas',        projectId: 'proj-meridian-saas',     progress: 85, status: 'review',      title: 'Dashboard v2' },
  { id: 'svc-005', type: 'mobile',      projectId: 'proj-meridian-saas',     progress: 30, status: 'in_progress', title: 'iOS companion' },
  { id: 'svc-006', type: 'audit',       projectId: 'proj-northwind-audit',   progress: 15, status: 'in_progress', title: 'OWASP top 10 review' },
  { id: 'svc-007', type: 'audit',       projectId: 'proj-northwind-audit',   progress: 0,  status: 'queued',      title: 'Dependency scan' },
  { id: 'svc-008', type: 'mobile',      projectId: 'proj-helix-mobile',      progress: 95, status: 'review',      title: 'App Store submission' },
  { id: 'svc-009', type: 'integration', projectId: 'proj-helix-mobile',      progress: 100, status: 'done',       title: 'HealthKit sync' },
  { id: 'svc-010', type: 'integration', projectId: 'proj-atlas-integration', progress: 100, status: 'done',       title: 'EDI gateway' },
  { id: 'svc-011', type: 'website',     projectId: 'proj-atlas-integration', progress: 50, status: 'in_progress', title: 'Partner docs portal' },
  { id: 'svc-012', type: 'saas',        projectId: 'proj-meridian-saas',     progress: 0,  status: 'queued',      title: 'Multi-tenant migration' },
];
