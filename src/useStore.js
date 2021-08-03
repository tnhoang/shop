import create from "zustand";

export const useStore = create((set) => ({
  bear: 0,
  cards: [],
  incBear: () => set((state) => ({ bear: state.bear + 1 })),
  setCards: (data) => set((state) => ({ cards: data })),
  sidebarState: false,
  previewState: false,
  toggleSidebar: () => set((state) => ({ sidebarState: !state.sidebarState })),
  togglePreview: () => set((state) => ({ previewState: !state.previewState })),
  previewObj: {},
  setPreviewObj: (data) => set((state) => ({ previewObj: data })),
}));
