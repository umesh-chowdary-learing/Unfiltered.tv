import create from 'zustand';

const useNewsStore = create((set) => ({
  articles: [],
  setArticles: (newArticles) => set({ articles: newArticles }),
}));

export default useNewsStore;
