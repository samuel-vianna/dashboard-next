"use client";

import ReactECharts from "echarts-for-react";

type LineChartProps = {
  title?: string;
  categories: string[];
  series: { name: string; data: (number | null)[] }[];
  type?: LineChartType;
};

function getFormattedData(data: (number | null)[], type: LineChartType) {
  if (type === "cumulative") {
    const result: number[] = [];
    data.forEach((d, index) => {
      let current = d ?? 0;
      let sum = result.reduce((a, b) => a + b, 0);
      result.push(current + sum);
    });
    return result;
  }

  return data.map((d) => d ?? 0);
}

export default function LineChartComponent({
  title,
  categories,
  series,
  type = "weekly",
}: LineChartProps) {
  const option = {
    title: { text: title },
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: categories },
    yAxis: { type: "value" },
    legend: {},
    series: series.map((s) => ({
      name: s.name,
      type: "line",
      data: getFormattedData(s.data, type),
      connectNulls: false,
    })),
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
}
