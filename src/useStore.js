import create from "zustand";

export const useStoreTest = create((set) => ({
  bear: 0,
  cards: [],
  incBear: () => set((state) => ({ bear: state.bear + 1 })),
  setCards: (data) => set((state) => ({ cards: data })),
}));
