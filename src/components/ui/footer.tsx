import { theme, Typography } from "antd";

const { Text } = Typography;

export default function Footer() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <footer>
      <div
        className="text-center py-1"
        style={{ backgroundColor: colorBgContainer }}
      >
        <Text>Made by Samuel Vianna.</Text>
      </div>
    </footer>
  );
}
