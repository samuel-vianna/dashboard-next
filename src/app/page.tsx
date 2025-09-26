"use client";

import React from "react";
import { ConfigProvider, Layout, Tabs, TabsProps, theme } from "antd";
import { useThemeStore } from "@/store/theme";
import TopBar from "@/components/ui/topbar";
import Footer from "@/components/ui/footer";
import AboutLayout from "@/layout/home/about";
import AiLayout from "@/layout/home/ai";
import DashboardLayout from "@/layout/home/dashboard";

export default function Home() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const { isThemeDark } = useThemeStore();

  const items: TabsProps["items"] = [
    {
      key: "dashboard",
      label: "Dashboard",
      children: <DashboardLayout />,
    },
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
