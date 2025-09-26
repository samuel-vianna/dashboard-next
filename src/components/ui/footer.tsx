import { theme, Typography } from "antd";
import Link from "next/link";

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
        <Text>© 2024 Escala Fácil. Todos os direitos reservados.</Text>
      </div>
    </footer>
  );
}
