import { mockup } from "@/data/mockup";

function formatResponse(response: BrandsResponse): BrandsResponse {
  return {
    brands: response.brands.map((b) => ({
      name: b.name,
      categories: b.categories.map((c) => ({
        name: c.name,
        sales: c.sales.map((s) => (s === null ? 0 : s)),
      })),
    })),
    dateRange: response.dateRange,
  };
}
class ApiService {
  async getBrands(): Promise<BrandsResponse> {
    const response: BrandsResponse = mockup;

    await new Promise((resolve) => setTimeout(resolve, 300)); // simulate API call delay

    return formatResponse(response);
  }
}

export const apiService = new ApiService();
