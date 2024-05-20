import { Form, Input } from "antd";
import React from "react";

const FormMk = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="w-full">
      <Form.Item
        name="mk"
        label="Mk"
        rules={[{ required: true, message: "masukan mk" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormMk;
