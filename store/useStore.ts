import { create } from 'zustand';

export const useStore = create((set) => ({
  // Track which section the user is currently looking at
  currentSection: 'hero',
  setCurrentSection: (section: any) => set({ currentSection: section }),

  // Track if the user is hovering over something interactive (so Mystic can react)
  isHovering: false,
  setIsHovering: (status: any) => set({ isHovering: status }),

  // Performance/Accessibility toggle
  lowPowerMode: false,
  toggleLowPowerMode: () => set((state: { lowPowerMode: any; }) => ({ lowPowerMode: !state.lowPowerMode })),
}));