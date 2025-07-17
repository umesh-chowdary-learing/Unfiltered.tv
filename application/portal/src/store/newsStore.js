import { create } from "zustand";

const useNewsStore = create((set) => ({
  news: [],
  setNews: (news) => set({ news }),
}));

export default useNewsStore;
