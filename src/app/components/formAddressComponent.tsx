"use client";
import React, { useContext} from "react";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import { FormType } from "@/types/interface";
import { ErrorContext } from "@/libs/createContext";
import { PostFormData } from "@/libs/handlers";

export default function FormAddressComponent() {
  const { error, setError } = useContext(ErrorContext);
  const [form] = Form.useForm();

  const onFinish = (values: FormType) => {
    try {
      const url = "/address";
      console.log(values);
      PostFormData(values, url);
    } catch {
      setError(true);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
    setError(true);
  };

  return (
    <div className="container-form">
      <Form
        form={form}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FormType>
          label="Nombre"
          name="name"
          rules={[{ required: true, message: "Digite su nombre!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormType>
          label="Cedula"
          name="id"
          rules={[{ required: true, message: "Digite su cedula!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FormType>
          label="Celular"
          name="phone"
          rules={[{ required: true, message: "Digite su celular!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          label="Dirección"
          name="addressname"
          rules={[{ required: true, message: "Digite su dirección!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          label="Barrio"
          name="neighborhood"
          rules={[{ required: true, message: "Digite su barrio!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          label="Mesa"
          name="table"
          rules={[{ required: true, message: "Digite la mesa de votación!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          label="idvotingplace"
          name="idvotingplace"
          rules={[{ required: true, message: "Digite la mesa de votación!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          label="Fecha de ingreso"
          name="date"
          rules={[{ required: true, message: "Seleccione fecha!" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
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
