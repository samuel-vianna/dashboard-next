import { apiService } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export default function DashboardLayout() {
  const { isFetching, data } = useQuery({
    queryKey: ["get-brands"],
    queryFn: apiService.get_brands,
  });

  console.log(data);

  if (isFetching) return <div>Loading...</div>;

  return <div>Dashboard</div>;
}
