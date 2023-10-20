import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { FormType } from "@/types/interface";
import { HandlerFormData } from "@/libs/handlers";
import { ErrorContext } from "@/libs/createContext";

export default function FormVotingPlaceComponent() {
  const { setError } = useContext(ErrorContext);
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState({
    inputaddress1: "",
    inputaddress2: "",
    inputaddress3: "",
  });

  const onFinish = (values: FormType) => {
    const address = `${formValues.inputaddress1}\u00A0${formValues.inputaddress2}\u00A0${formValues.inputaddress3}, Barranquilla, Colombia`;
    let payload = {
      ...values,
      addressvotingplace: address,
    };
    try {
      console.log(payload)
      const url = "/vote";
      const method = "POST";
      HandlerFormData(url, method, payload);
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
          label="Dirección"
          name="addressvotingplace"
          rules={[{ required: true, message: "Digite su dirección!" }]}
        >
        <div className="flex flex-row">
          <Input
            placeholder="Carrera 68"
            style={{ width: "120px" }}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFormValues({
                ...formValues,
                inputaddress1: e.currentTarget.value,
              })
            }
          />
          <Input
            disabled
            value="#"
            bordered={false}
            style={{ color: "#C3B984", width: "36px" }}
          />
          <Input
            placeholder="44"
            style={{ width: "58px" }}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFormValues({
                ...formValues,
                inputaddress2: e.currentTarget.value,
              })
            }
          />
          <Input
            disabled
            value="-"
            bordered={false}
            style={{ color: "#C3B984", width: "32px" }}
          />
          <Input
            placeholder="44"
            style={{ width: "58px" }}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setFormValues({
                ...formValues,
                inputaddress3: e.currentTarget.value,
              })
            }
          />
        </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-[#C3B984]">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
