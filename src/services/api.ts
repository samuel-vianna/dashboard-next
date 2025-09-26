import { mockup } from "@/data/mockup";

class ApiService {
  async getBrands(): Promise<BrandsResponse> {
    const response: BrandsResponse = mockup;

    await new Promise((resolve) => setTimeout(resolve, 300)); // simulate API call delay
    return response;
  }
}

export const apiService = new ApiService();
