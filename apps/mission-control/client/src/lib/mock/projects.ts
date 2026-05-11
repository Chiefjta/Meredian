import type { Project } from '@/types';

export const PROJECT_SEED: Project[] = [
  {
    id: 'proj-arysnel-portal',
    name: 'Arysnel Client Portal',
    client: 'Arysnel Internal',
    phase: 'build',
    healthScore: 92,
    assignedAgents: ['agent-orchestrator', 'agent-builder', 'agent-inspector'],
  },
  {
    id: 'proj-meridian-saas',
    name: 'Meridian SaaS Platform',
    client: 'Meridian Labs',
    phase: 'qa',
    healthScore: 78,
    assignedAgents: ['agent-architect', 'agent-builder', 'agent-sentinel'],
  },
  {
    id: 'proj-northwind-audit',
    name: 'Northwind Security Audit',
    client: 'Northwind Ltd.',
    phase: 'discovery',
    healthScore: 64,
    assignedAgents: ['agent-sentinel', 'agent-analyst', 'agent-scribe'],
  },
  {
    id: 'proj-helix-mobile',
    name: 'Helix Mobile App',
    client: 'Helix Health',
    phase: 'delivery',
    healthScore: 88,
    assignedAgents: ['agent-builder', 'agent-courier', 'agent-liaison'],
  },
  {
    id: 'proj-atlas-integration',
    name: 'Atlas Integration Bus',
    client: 'Atlas Logistics',
    phase: 'live',
    healthScore: 96,
    assignedAgents: ['agent-orchestrator', 'agent-analyst'],
  },
];
