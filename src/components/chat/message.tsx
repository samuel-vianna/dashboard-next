import { theme } from "antd";

interface MessageComponentProps {
  message: string;
  type: "user" | "system";
}

export default function MessageComponent({
  message,
  type,
}: MessageComponentProps) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (type === "system") {
    return <div className="whitespace-pre-line">{message}</div>;
  }

  return (
    <div className="flex justify-end">
      <div
        className="flex px-4 py-2 rounded-lg whitespace-pre-line"
        style={{ backgroundColor: colorBgContainer }}
      >
        {message}
      </div>
    </div>
  );
}
