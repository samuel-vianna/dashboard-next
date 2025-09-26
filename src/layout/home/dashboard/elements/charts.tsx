import { Card, Empty } from "antd";
import LineChartComponent from "@/components/charts/lineChart";
import BarChartComponent from "@/components/charts/barChart";
import { useFiltersStore } from "@/store/filters";

interface ChartsProps {
  data?: BrandsResponse;
}

export default function Charts({ data }: ChartsProps) {
  const { selectedBrand, selectedFrequency } = useFiltersStore();
  const brands = data?.brands || [];
  const weeks = data?.dateRange || [];

  const selectedBranch = brands?.find((b: any) => b.name === selectedBrand);

  const lineChartData =
    selectedBranch?.categories.map((cat) => ({
      name: cat.name,
      data: cat.sales,
    })) || [];

  const barChartData =
    selectedBranch?.categories.map((cat) => ({
      name: cat.name,
      data: cat.sales,
    })) || [];

  if (!selectedBranch)
    return <Empty description="Select a brand to view details" />;

  return (
    <div className="grid my-4 md:grid-cols-2 gap-2 w-full">
      <Card>
        <LineChartComponent
          title={`Sales per week`}
          categories={weeks}
          type={selectedFrequency}
          series={lineChartData}
        />
      </Card>
      <Card>
        <BarChartComponent
          title={`Sales`}
          categories={weeks}
          type={selectedFrequency}
          series={barChartData}
        />
      </Card>
    </div>
  );
}
