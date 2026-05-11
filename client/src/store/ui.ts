import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  leftCollapsed: boolean;
  autoScrollFeed: boolean;
  rightTab: 'knowledge' | 'chat' | 'analytics';
  toggleLeft: () => void;
  setAutoScroll: (v: boolean) => void;
  setRightTab: (tab: UIState['rightTab']) => void;
}

export const useUI = create<UIState>()(
  persist(
    (set) => ({
      leftCollapsed: false,
      autoScrollFeed: true,
      rightTab: 'knowledge',
      toggleLeft: () => set((s) => ({ leftCollapsed: !s.leftCollapsed })),
      setAutoScroll: (v) => set({ autoScrollFeed: v }),
      setRightTab: (tab) => set({ rightTab: tab }),
    }),
    { name: 'openclaw.ui' },
  ),
);
