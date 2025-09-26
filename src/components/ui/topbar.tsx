import { useThemeStore } from "@/store/theme";
import { CalendarOutlined, MoonFilled, SunFilled } from "@ant-design/icons";
import { Button, Space, theme, Typography } from "antd";

const { Title } = Typography;

export default function TopBar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { isThemeDark, toggleTheme } = useThemeStore();

  return (
    <div
      className="flex items-center justify-between gap-2 w-full p-2 md:px-8 md:py-4"
      style={{ backgroundColor: colorBgContainer }}
    >
      <Space>
        <CalendarOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        <Title level={2} style={{ margin: 0 }}>
          Escala Fácil
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
