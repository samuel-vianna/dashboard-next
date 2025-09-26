import { create } from "zustand";

type LineChartType = "weekly" | "cumulative";

interface FilterState {
  selectedBrand?: string | null;
  toggleBrand: (brand: string | null) => void;
  selectedFrequency?: LineChartType;
  toggleFrequency: (frequency: LineChartType) => void;
}

export const useFiltersStore = create<FilterState>((set) => ({
  selectedBrand: undefined,
  toggleBrand: (brand: string | null) =>
    set((state) => ({ selectedBrand: brand })),
  selectedFrequency: "weekly",
  toggleFrequency: (frequency: LineChartType) =>
    set((state) => ({ selectedFrequency: frequency })),
}));
