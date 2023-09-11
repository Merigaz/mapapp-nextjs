import React from "react";
import { DatePicker, Form, Input } from "antd";
import ButtonCustom from "./buttonCustom";
import { ButtonsProps, FormType } from "@/types/interface";
import { PostFormData } from "@/libs/handlers";

export default function FormAddressComponent() {
  const onFinish = (values: FormType) => {
    const url = "";
    PostFormData(values, url);
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
      <Form
        layout="horizontal"
        onFinish={onFinish}
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
