"use client";

import ReactECharts from "echarts-for-react";

type PieChartProps = {
  title?: string;
  series: { name: string; value: number }[];
};

export default function PieChartComponent({ title, series }: PieChartProps) {
  const option = {
    title: { text: title },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    legend: {},
    color: ["#0d0db8", "#cc0e57"], // Your custom colors
    series: [
      {
        name: "Total por Brand",
        type: "pie",
        radius: ["40%", "70%"], // donut
        avoidLabelOverlap: false,
        data: series.map((s) => ({
          name: s.name,
          value: s.value,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
}
