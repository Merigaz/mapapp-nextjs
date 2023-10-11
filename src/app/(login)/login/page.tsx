"use client";
import { Button, Card, Form, Input } from "antd";
import { signIn } from "next-auth/react";
import { useRef } from "react";

export default function LoginPage() {
  const email = useRef("");
  const password = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: false,
      callbackUrl: "/"
    });
  };
  return (
    <div className="flex justify-center align-middle m-auto">
      <Card bordered={false}>
        <Form
          onSubmitCapture={onSubmit}
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="on"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su correo electrónico",
              },
            ]}
          >
            <Input placeholder="Correo electrónico" onChange={(e) => (email.current = e.target.value)} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor ingrese su contraseña" },
            ]}
          >
            <Input.Password placeholder="Contraseña"  onChange={(e) => (password.current = e.target.value)} />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
