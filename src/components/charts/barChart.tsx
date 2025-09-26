"use client";

import ReactECharts from "echarts-for-react";

type BarChartProps = {
  title?: string;
  categories: string[];
  series: { name: string; data: (number | null)[]; stack?: string }[];
  type?: LineChartType;
  stack?: boolean;
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

export default function BarChartComponent({
  title,
  categories,
  series,
  type = "weekly",
  stack = false,
}: BarChartProps) {
  const option = {
    title: { text: title },
    tooltip: { trigger: "axis" },
    xAxis: { type: "category", data: categories },
    yAxis: { type: "value" },
    legend: {},
    series: series.map((s) => ({
      name: s.name,
      type: "bar",
      stack: stack ? "total" : s.stack,
      data: getFormattedData(s.data, type),
      emphasis: { focus: "series" },
    })),
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
}
