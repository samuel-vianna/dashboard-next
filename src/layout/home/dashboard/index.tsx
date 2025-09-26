"use client";

import { apiService } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { Select, Skeleton, Space, Switch } from "antd";
import { useFiltersStore } from "@/store/filters";
import AverageSales from "./elements/averageSales";
import Charts from "./elements/charts";
import GeneralSales from "./elements/general";
import { useEffect } from "react";

export default function DashboardLayout() {
  const { selectedBrand, toggleBrand, selectedFrequency, toggleFrequency } =
    useFiltersStore();

  const { isFetching, data, isSuccess } = useQuery({
    queryKey: ["get-brands"],
    queryFn: apiService.get_brands,
  });

  const brands = data?.brands ?? [];

  useEffect(() => {
    if (data) {
      toggleBrand(data.brands[0].name);
    }
  }, [isSuccess]);

  return (
    <div className="px-2 py-1 md:px-8 md:py-4 overflow-y-auto h-full">
      <Skeleton active loading={isFetching}>
        <GeneralSales data={data} />

        {/* Filters */}
        <Space>
          <Select
            options={brands.map((b: any) => ({ label: b.name, value: b.name }))}
            value={selectedBrand}
            className="w-[200px]"
            onChange={toggleBrand}
          />
          <Switch
            unCheckedChildren="Weekly"
            checkedChildren="Cumulative"
            checked={selectedFrequency === "cumulative"}
            onChange={(checked: boolean) =>
              toggleFrequency(checked ? "cumulative" : "weekly")
            }
          />
        </Space>

        <Charts data={data} />
        <AverageSales data={data} />
      </Skeleton>
    </div>
  );
}
