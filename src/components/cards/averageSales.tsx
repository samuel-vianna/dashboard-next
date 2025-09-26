import { Card, Statistic } from "antd";

interface AverageSalesComponentProps {
  category?: Category;
}

export default function AverageSalesComponent({
  category,
}: AverageSalesComponentProps) {
  const validSales =
    category?.sales.filter((s: number | null) => s !== null) ?? [];

  const avg =
    validSales.length > 0
      ? (
          validSales.reduce((a: number, b: number) => a + b, 0) /
          validSales.length
        ).toFixed(2)
      : "N/A";

  return (
    <Card>
      <Statistic title={category?.name} value={avg} />
    </Card>
  );
}
