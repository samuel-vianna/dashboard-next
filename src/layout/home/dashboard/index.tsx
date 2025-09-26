"use client";

import { Select, Skeleton, Space, Switch } from "antd";
import { useFiltersStore } from "@/store/filters";
import AverageSales from "./elements/averageSales";
import Charts from "./elements/charts";
import GeneralSales from "./elements/general";
import { useEffect } from "react";
import { useDataStore } from "@/store/data";
import TabWrapper from "@/components/ui/tabWrapper";

export default function DashboardLayout() {
  const { selectedBrand, toggleBrand, selectedFrequency, toggleFrequency } =
    useFiltersStore();
  const { data, isFetching } = useDataStore();
  const brands = data?.brands ?? [];

  useEffect(() => {
    if (data) {
      toggleBrand(data.brands[0].name);
    }
  }, [data]);

  return (
    <TabWrapper>
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
    </TabWrapper>
  );
}
