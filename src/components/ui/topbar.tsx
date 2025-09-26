'use client'

import { useThemeStore } from "@/store/theme";
import { LineChartOutlined, MoonFilled, SunFilled } from "@ant-design/icons";
import { Button, Space, theme, Typography } from "antd";

const { Title } = Typography;

export default function TopBar() {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  const { isThemeDark, toggleTheme } = useThemeStore();

  return (
    <div
      className="flex items-center justify-between gap-2 w-full p-2 md:px-8 md:py-4"
      style={{ backgroundColor: colorBgContainer }}
    >
      <Space>
        <LineChartOutlined style={{ fontSize: "24px", color: colorPrimary }} />
        <Title level={2} style={{ margin: 0 }}>
          Sales Dashboard
        </Title>
      </Space>
      <div>
        <Button
          onClick={toggleTheme}
          icon={isThemeDark ? <MoonFilled /> : <SunFilled />}
        />
      </div>
    </div>
  );
}
