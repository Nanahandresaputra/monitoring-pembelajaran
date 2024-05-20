import { Form, Input } from "antd";
import React from "react";

const FormFax = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="w-full">
      <Form.Item
        name="fax"
        label="Fax"
        rules={[{ required: true, message: "masukan fax" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormFax;
