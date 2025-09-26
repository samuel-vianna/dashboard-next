"use client";

import TabWrapper from "@/components/ui/tabWrapper";
import { useDataStore } from "@/store/data";
import sum from "@/utils/sum";
import { Table, TableProps, Typography } from "antd";
import DateFilter from "./filter";
import { useState } from "react";

export type DateRangeType = { start: number; end: number };

function formatDataToTable(brands: Brand[], dateRange: DateRangeType) {
  return brands
    .map((b) =>
      b.categories.map((c) => ({
        key: "key-" + b.name + "-" + c.name,
        sales: c.sales.slice(dateRange.start, (dateRange?.end || 0) + 1),
        category: c.name,
        brand: b.name,
        total: sum(c.sales.slice(dateRange.start, (dateRange?.end || 0) + 1)),
      }))
    )
    .flat();
}

const getColumns = (
  data?: BrandsResponse,
  dateRange?: DateRangeType
): TableProps["columns"] => {
  const weekColumns: TableProps["columns"] =
    data?.dateRange
      ?.slice(dateRange?.start, (dateRange?.end || 0) + 1)
      ?.map((d, index) => ({
        title: d,
        dataIndex: d,
        key: "week-" + index,
        sorter: (a, b) => a.sales[index] - b.sales[index],
        render: (cell, row) => row.sales[index] ?? index,
      })) || [];

  const brandFilterOptions =
    data?.brands?.map((b) => ({
      text: b.name,
      value: b.name,
    })) || [];

  const categoryFilterOptions =
    data?.brands
      ?.flatMap((b) => b.categories)
      .map((c) => ({
        text: c.name,
        value: c.name,
      })) || [];

  return [
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => a?.brand.length - b?.brand.length,
      filters: brandFilterOptions,
      onFilter: (value, record) => record.brand.includes(value),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a?.category.length - b?.category.length,
      filters: categoryFilterOptions,
      onFilter: (value, record) => record.category.includes(value),
    },
    ...weekColumns,
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      sorter: (a, b) => a.total - b.total,
    },
  ];
};

export default function TableLayout() {
  const { data, isFetching } = useDataStore();
  const [dateRange, setDateRange] = useState({
    start: 0,
    end: (data?.dateRange?.length || 1) - 1,
  });

  const columns = getColumns(data, dateRange);
  const formattedData = formatDataToTable(data?.brands ?? [], dateRange);

  return (
    <TabWrapper>
      <div className="overflow-hidden">
        <DateFilter
          data={data}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <Table
          footer={(data) => (
            <Typography.Text>
              Total Sales: {sum(data.map((d) => d.total)) || 0}
            </Typography.Text>
          )}
          loading={isFetching}
          columns={columns}
          dataSource={formattedData}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </div>
    </TabWrapper>
  );
}
