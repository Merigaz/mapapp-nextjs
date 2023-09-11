import React from "react";
import { Form, Input } from "antd";
import ButtonCustom from "./buttonCustom";
import { ButtonsProps, FormType } from "@/types/interface";

export default function FormVotingPlaceComponent() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
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
          <ButtonCustom {...ButtonSubmitProps} />
        </Form.Item>
      </Form>
    </div>
  );
}
