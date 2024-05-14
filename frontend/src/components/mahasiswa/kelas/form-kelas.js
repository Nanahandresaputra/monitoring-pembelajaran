import { Form, Input } from "antd";
import React from "react";

const FormKelas = ({ form }) => {
  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        name="class"
        label="Class"
        rules={[{ required: true, message: "masukan class" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fax"
        label="Fax"
        rules={[{ required: true, message: "masukan fax " }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormKelas;
