import { Form, Input } from "antd";
import React from "react";

const FormFax = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="w-full" autoComplete="off">
      <Form.Item name="fakultas" label="Fakultas" rules={[{ required: true, message: "masukan data fakultas" }]}>
        <Input placeholder="input fakultas" />
      </Form.Item>
    </Form>
  );
};

export default FormFax;
