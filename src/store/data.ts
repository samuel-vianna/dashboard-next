// store/data.ts
import { create } from "zustand";

interface DataState {
  data?: BrandsResponse;
  isFetching: boolean;
  setData: (data: BrandsResponse) => void;
  setFetching: (isFetching: boolean) => void;
}

export const useDataStore = create<DataState>((set) => ({
  data: undefined,
  isFetching: true,
  setData: (data) => set({ data }),
  setFetching: (isFetching) => set({ isFetching }),
}));
