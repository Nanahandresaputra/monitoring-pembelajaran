import { Form, Input } from "antd";
import React from "react";

const FormAdmin = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="w-full">
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: "masukan username" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nama"
        label="Nama"
        rules={[{ required: true, message: "masukan nama" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "masukan password" }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
};

export default FormAdmin;
