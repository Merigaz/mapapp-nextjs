import React from "react";
import { ConfigProvider, DatePicker, Form, Input } from "antd";
import theme from "../theme/themeConfig";
import ButtonCustom from "./buttonCustom";
import {
  ButtonsProps,
  FormAdressesType,
  FormVotingPlaceType,
} from "@/types/interface";

export default function FormVotingPlaceComponent() {
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
      
        <Form
          layout="horizontal"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item<FormVotingPlaceType>
            label="Lugar de votación"
            name="votingplace"
            rules={[{ required: true, message: "Digite lugar de votación!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FormVotingPlaceType>
            label="Dirección lugar de votación"
            name="addressvotingplace"
            rules={[{ required: true, message: "Digite dirección del lugar de votación!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <ButtonCustom {...ButtonSubmitProps} />
          </Form.Item>
        </Form>
    </div>
  );
}
