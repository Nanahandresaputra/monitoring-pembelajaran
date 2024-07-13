import { Form, Input } from "antd";
import React from "react";

const FormMk = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="w-full" autoComplete="off">
      <Form.Item name="matkul" label="Mata Kuliah" rules={[{ required: true, message: "masukan mata kuliah" }]}>
        <Input placeholder="mata kuliah" />
      </Form.Item>
    </Form>
  );
};

export default FormMk;
