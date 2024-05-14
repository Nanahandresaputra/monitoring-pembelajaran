import { Form, Input, Select } from "antd";
import React from "react";

const FormDosen = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5">
      <Form.Item
        name="code"
        label="Code"
        rules={[{ required: true, message: "masukan code" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "masukan nama" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: "status belum dipilih" }]}
        className="col-span-2"
      >
        <Select
          options={[
            { value: 1, label: "Aktif" },
            { value: 0, label: "Tidak aktif" },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default FormDosen;
