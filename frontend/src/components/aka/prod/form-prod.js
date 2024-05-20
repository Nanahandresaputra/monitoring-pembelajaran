import { Form, Input, Select } from "antd";
import React from "react";

const FormProd = ({ form, data }) => {
  const optionTest = data.map((test) => ({
    value: test,
    label: test,
  }));

  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5">
      <Form.Item
        name="prod"
        label="Prod"
        rules={[{ required: true, message: "masukan prod" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fax"
        label="Fax"
        rules={[{ required: true, message: "fax belum dipilih" }]}
      >
        <Select options={optionTest} />
      </Form.Item>
    </Form>
  );
};

export default FormProd;
