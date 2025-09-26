import { ReloadOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Tooltip } from "antd";
import { FormValues } from "..";

interface ChatInputProps {
  onReset: () => void;
  onSubmit: (values: FormValues) => void;
  loading: boolean;
}

export default function ChatInput({
  onReset,
  onSubmit,
  loading,
}: ChatInputProps) {
  const [form] = Form.useForm();
  const isEnabled = Form.useWatch("input", form);

  const handleSubmit = (values: FormValues) => {
    try {
      onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex gap-2 items-center">
      <Tooltip title="Clear conversation">
        <Button onClick={onReset} icon={<ReloadOutlined />} />
      </Tooltip>
      <Form form={form} onFinish={handleSubmit} className="flex gap-2 w-full">
        <Form.Item name="input" className="w-full">
          <Input placeholder="Ask to Mila..." disabled={loading} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading || !isEnabled}
            icon={<SendOutlined />}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
