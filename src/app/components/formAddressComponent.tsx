"use client";
import React, { useContext } from "react";
import { DatePicker, Form, Input, Modal } from "antd";
import ButtonCustom from "./buttonCustom";
import { ButtonsProps, FormType } from "@/types/interface";
import { PostFormData } from "@/libs/handlers";
import { ErrorContext } from "@/libs/createContext";

export default function FormAddressComponent() {
  const { error, setError } = useContext(ErrorContext);
  const [form] = Form.useForm();
  const onFinish = (values: FormType) => {
    try {
      form.resetFields();
      const url = "http://localhost:3000/api/form";
      PostFormData(values, url);
    } catch {
      setError(true)
      console.log("caca");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    setError(true);
  };
  const ButtonSubmitProps: ButtonsProps = {
    typeButton: "primary",
    textButton: "Aceptar",
    htmlTypeButton: "submit",
    sizeButton: "middle",
    styleButton: { marginTop: "16px" },
  };
  return (
    
    
    <div className="container-form">
      <Modal title="Basic Modal" open={error} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Form
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
          name="address"
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
          label="Fecha de ingreso"
          name="date"
          rules={[{ required: true, message: "Seleccione fecha!" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item>
          <ButtonCustom {...ButtonSubmitProps} />
        </Form.Item>
      </Form>
    </div>
  );
}
