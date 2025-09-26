import BarChartComponent from "@/components/charts/barChart";
import PieChartComponent from "@/components/charts/pieChart";
import { useFiltersStore } from "@/store/filters";
import { Card, Statistic } from "antd";

interface GeneralSalesProps {
  data?: BrandsResponse;
}

function getTotalSales(sales: (number | null)[]) {
  return sales.reduce((acc, cur) => (acc ?? 0) + (cur ?? 0), 0) ?? 0;
}

export default function GeneralSales({ data }: GeneralSalesProps) {
  const { selectedFrequency } = useFiltersStore();

  const total = data?.brands.reduce(
    (acc, brand) =>
      acc +
      brand.categories.reduce((acc, cat) => acc + getTotalSales(cat.sales), 0),
    0
  );

  const brands = data?.brands ?? [];
  const weeks = data?.dateRange ?? [];

  const barChartData =
    brands
      ?.map((brand) =>
        brand.categories.map((cat) => ({
          name: cat.name,
          data: cat.sales,
          stack: brand?.name,
        }))
      )
      .flat() || [];

  const pieChartData = brands.map((brand) => ({
    name: brand.name,
    value: brand.categories.reduce(
      (acc, cat) => acc + getTotalSales(cat.sales),
      0
    ),
  }));

  return (
    <div className="my-4 grid md:grid-cols-12 gap-2">
      <div className="md:col-span-2 flex flex-col gap-2">
        <Card>
          <Statistic title={"Total Sales"} value={total} />
        </Card>
        <Card>
          <Statistic
            title={"Total Average per week"}
            value={(total || 0) / (weeks.length || 1)}
          />
        </Card>
      </div>
      <div className="md:col-span-5">
        <Card>
          <BarChartComponent
            categories={weeks}
            type={selectedFrequency}
            series={barChartData}
          />
        </Card>
      </div>
      <div className="md:col-span-5">
        <Card>
          <PieChartComponent series={pieChartData} />
        </Card>
      </div>
    </div>
  );
}
