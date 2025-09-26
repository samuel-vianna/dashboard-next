"use client";

import React, { useEffect } from "react";
import { ConfigProvider, Layout, Tabs, TabsProps, theme } from "antd";
import { useThemeStore } from "@/store/theme";
import TopBar from "@/components/ui/topbar";
import Footer from "@/components/ui/footer";
import AboutLayout from "@/layout/home/about";
import AiLayout from "@/layout/home/ai";
import DashboardLayout from "@/layout/home/dashboard";
import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services/api";
import { useDataStore } from "@/store/data";
import TableLayout from "@/layout/home/table";

export default function Home() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { isThemeDark } = useThemeStore();
  const setData = useDataStore((state) => state.setData);
  const setFetching = useDataStore((state) => state.setFetching);

  const { isFetching, data, isSuccess } = useQuery({
    queryKey: ["get-brands"],
    queryFn: apiService.getBrands,
  });

  useEffect(() => {
    if (data) {
      setData(data);
      setFetching(isFetching);
    }
  }, [isSuccess]);

  const items: TabsProps["items"] = [
    {
      key: "dashboard",
      label: "Dashboard",
      children: <DashboardLayout />,
    },
    { key: "table", label: "Table", children: <TableLayout /> },
    {
      key: "ai",
      label: "AI Assistant",
      children: <AiLayout />,
    },
    {
      key: "about",
      label: "About",
      children: <AboutLayout />,
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: isThemeDark ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Layout className="flex flex-col h-screen">
        <TopBar />
        <Layout.Content className="flex flex-1 overflow-y-hidden">
          <Tabs items={items} className="flex-1 overflow-y-auto" />
        </Layout.Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}
