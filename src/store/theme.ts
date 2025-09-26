import { create } from "zustand";

interface ThemeState {
  isThemeDark: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isThemeDark: false,
  toggleTheme: () => set((state) => ({ isThemeDark: !state.isThemeDark })),
}));
