import { Form, Input, Select } from "antd";
import React from "react";

const FormDosen = ({ form }) => {
  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5" autoComplete="off">
      <Form.Item name="nidn" label="Nidn" rules={[{ required: true, message: "masukan nidn" }]}>
        <Input placeholder="masukan nidn" />
      </Form.Item>
      <Form.Item name="nama" label="Nama" rules={[{ required: true, message: "masukan nama" }]}>
        <Input placeholder="masukan nama" />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true, message: "status belum dipilih" }]} className="col-span-2">
        <Select
          placeholder="pilih status"
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
