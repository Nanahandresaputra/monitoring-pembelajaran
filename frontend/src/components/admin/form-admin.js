import { Form, Input, Select } from "antd";
import React from "react";

const FormAdmin = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="w-full" autoComplete="off">
      <Form.Item name="username" label="Username" rules={[{ required: true, message: "masukan username" }]}>
        <Input placeholder="masukan username" />
      </Form.Item>
      <Form.Item name="nama" label="Nama" rules={[{ required: true, message: "masukan nama" }]}>
        <Input placeholder="masukan nama" />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, message: "masukan password" }]}>
        <Input.Password placeholder="masukan password" />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true, message: "status belum dipilih" }]} className="col-span-2">
        <Select
          options={[
            { value: 1, label: "Aktif" },
            { value: 0, label: "Tidak aktif" },
          ]}
          placeholder="--- pilih status ---"
        />
      </Form.Item>
    </Form>
  );
};

export default FormAdmin;
