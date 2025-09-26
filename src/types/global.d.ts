export {};

declare global {
  export interface Category {
    name: string;
    sales: (number | null)[];
  }

  export interface Brand {
    name: string;
    categories: Category[];
  }

  export interface BrandsResponse {
    brands: Brand[];
    dateRange: string[];
  }

  type LineChartType = "weekly" | "cumulative";
}
