import { create } from 'zustand';

interface SelectionState {
  selectedProjectId: string | null;
  selectedAgentId: string | null;
  setProject: (id: string | null) => void;
  setAgent: (id: string | null) => void;
}

export const useSelection = create<SelectionState>((set) => ({
  selectedProjectId: null,
  selectedAgentId: null,
  setProject: (id) => set({ selectedProjectId: id }),
  setAgent: (id) => set({ selectedAgentId: id }),
}));
