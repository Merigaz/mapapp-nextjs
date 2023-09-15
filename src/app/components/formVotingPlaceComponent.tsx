
import React, { useContext } from "react";
import { Button, Form, Input } from "antd";
import { FormType } from "@/types/interface";
import { HandlerFormData } from "@/libs/handlers";
import { ErrorContext } from "@/libs/createContext";

export default function FormVotingPlaceComponent() {
  const { error, setError } = useContext(ErrorContext);
  const [form] = Form.useForm();

  const onFinish = (values: FormType) => {
    try {
      const url = "/vote";
      const method = "POST";
      HandlerFormData(url, method, values);
    } catch {
      setError(true);
    } finally {
      form.resetFields();
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    setError(true);
  };

  return (
    <div className="container-form">
      <Form
        form={form}
        layout="horizontal"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FormType>
          label="Lugar de votación"
          name="votingplace"
          rules={[{ required: true, message: "Digite lugar de votación!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormType>
          label="Dirección lugar de votación"
          name="addressvotingplace"
          rules={[
            {
              required: true,
              message: "Digite dirección del lugar de votación!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
