import React from "react";
import { ConfigProvider, DatePicker, Form, Input } from "antd";
import theme from "../theme/themeConfig";
import ButtonCustom from "./buttonCustom";

export default function FormComponent() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
      <ConfigProvider theme={theme}>
        <Form
          layout="horizontal"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<FormAdressesType>
            label="Nombre"
            name="name"
            rules={[{ required: true, message: "Digite su nombre!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FormAdressesType>
            label="Cedula"
            name="id"
            rules={[{ required: true, message: "Digite su cedula!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FormAdressesType>
            label="Celular"
            name="phone"
            rules={[{ required: true, message: "Digite su celular!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FormAdressesType>
            label="Dirección"
            name="address"
            rules={[{ required: true, message: "Digite su dirección!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FormAdressesType>
            label="Barrio"
            name="neighborhood"
            rules={[{ required: true, message: "Digite su barrio!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FormAdressesType>
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
      </ConfigProvider>
    </div>
  );
}
