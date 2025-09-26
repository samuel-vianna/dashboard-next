import MessageComponent from "@/components/chat/message";
import { Message } from "..";
import { useEffect, useRef } from "react";
import { Card, Space, Spin, Typography } from "antd";

interface ChatProps {
  messages: Message[];
  sendMessage: (message: string) => void;
  loading?: boolean;
}

const SUGGESTIONS = [
  "Show me Brand A Trends",
  "What's the best product for my business goals?",
  "Suggest a campaign for my fitness brand",
];

export default function Chat({ messages, sendMessage, loading }: ChatProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll to bottom on messages change
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  if (messages?.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center">
        <Typography.Title level={4} className="mb-4">
          Ask to Mila:
        </Typography.Title>
        <div className="flex flex-col gap-2">
          {SUGGESTIONS.map((s) => (
            <Card
              key={s}
              onClick={() => sendMessage(s)}
              className="cursor-pointer"
              hoverable
            >
              {s}
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto pr-2 pb-2">
      <div className="flex flex-col gap-3">
        {messages.map((m) => (
          <MessageComponent key={m.id} message={m.text} type={m.role} />
        ))}
        {loading && (
          <Space>
            <Spin />
            <Typography>Thinking...</Typography>
          </Space>
        )}
        <div ref={scrollRef} />
      </div>
    </div>
  );
}
