"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import { FormType, VotingPlace } from "@/types/interface";
import { AddressDataContext, ErrorContext } from "@/libs/createContext";
import { HandlerFormData } from "@/libs/handlers";
import "dayjs/locale/es";
import locale from "antd/es/date-picker/locale/es_ES";
import dayjs from "dayjs";

export default function FormAddressComponent() {
  const { setError } = useContext(ErrorContext);
  const { setAddressData } = useContext(AddressDataContext);
  const [form] = Form.useForm();
  const [responseData, setResponseData] = useState<VotingPlace[]>([]);
  const [formValues, setFormValues] = useState({
    inputaddress1: "",
    inputaddress2: "",
    inputaddress3: "",
  });
  
  useEffect(() => {
    const pollingPlace = async () => {
      try {
        const url = "/vote";
        const method = "GET";
        const responseData = await HandlerFormData(url, method);
        setResponseData(responseData.votingPlace);
      } catch {
        setError(true);
      }
    };
    pollingPlace();
  }, []);
  const onFinish = async (values: FormType) => {
    const address = `${formValues.inputaddress1}\u00A0${formValues.inputaddress2}\u00A0${formValues.inputaddress3}, Barranquilla, Colombia`;
    const formattedDate= dayjs(values.date).format("YYYY/MM/DD")
    const date = new Date(formattedDate)
    
    let payload = {
      ...values,
      addressname: address,
      date: date,
    };

    try {
      const url = "/address";
      const method = "POST";
      HandlerFormData(url, method, payload);
      console.log(payload);
    } catch {
      setError(true);
    } finally {
      form.resetFields();
    }
    try {
      const url = "/address";
      const method = "GET";
      const addressRequest = await HandlerFormData(url, method);
      setAddressData(addressRequest.addressData);
    } catch {
      setError(true);
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
          label="Lugar de votación"
          name="idvotingplace"
          rules={[{ required: true, message: "Digite la mesa de votación!" }]}
        >
          <Select>
            {responseData
              ? responseData.map((place: VotingPlace) => (
                  <Select.Option key={place.id} value={place.id}>
                    {place.votingplace}
                  </Select.Option>
                ))
              : null}
          </Select>
        </Form.Item>
        <Form.Item<FormType>
          label="Fecha de ingreso"
          name="date"
          rules={[{ required: true, message: "Seleccione fecha!" }]}
        >
          <DatePicker
            format="YYYY/MM/DD"
            locale={locale}
          />
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
