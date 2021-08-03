import create from "zustand";

export const useStore = create((set) => ({
  sidebarState: false,
  previewState: false,
  toggleSidebar: () => set((state) => ({ sidebarState: !state.sidebarState })),
  togglePreview: () => set((state) => ({ previewState: !state.previewState })),
  previewObj: {},
  setPreviewObj: (data) => set((state) => ({ previewObj: data })),
}));
