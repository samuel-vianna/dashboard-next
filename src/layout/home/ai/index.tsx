"use client";

import TabWrapper from "@/components/ui/tabWrapper";
import useLoading from "@/hooks/useLoading";
import React, { useState } from "react";
import ChatInput from "./elements/input";
import Chat from "./elements/chat";
import { aiService } from "@/services/aiService";

export interface FormValues {
  input: string;
}

export type Message = {
  id: string;
  role: "user" | "system";
  text: string;
};

function genId() {
  return Math.random().toString(36).slice(2, 9);
}

export default function AiLayout() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { loading, toggleLoading } = useLoading();

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    const userMsg: Message = { id: genId(), role: "user", text: text.trim() };
    setMessages((m) => [...m, userMsg]);
    toggleLoading(true);

    try {
      const response = await aiService.getResponse(text);

      const botMsg: Message = {
        id: genId(),
        role: "system",
        text: response,
      };
      setMessages((m) => [...m, botMsg]);
    } catch (error) {
      console.log(error);
    } finally {
      toggleLoading(false);
    }
  }

  function handleSubmit(values: FormValues) {
    if (values.input) sendMessage(values.input);
  }

  function handleReset() {
    setMessages([]);
  }

  return (
    <TabWrapper>
      <div className="flex flex-col h-full">
        <div className="flex-1 min-h-0 overflow-hidden">
          <Chat
            messages={messages}
            sendMessage={sendMessage}
            loading={loading}
          />
        </div>

        <ChatInput
          onReset={handleReset}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </TabWrapper>
  );
}
