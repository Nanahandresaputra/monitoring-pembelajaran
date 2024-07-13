import { Form, Input, Select } from "antd";
import React from "react";

const FormKelas = ({ form, data }) => {
  const optionTest = data.map((datas) => ({
    value: datas.id,
    label: datas.fakultas,
  }));
  return (
    <Form layout="vertical" form={form} autoComplete="off">
      <Form.Item name="kelas" label="Kelas" rules={[{ required: true, message: "masukan kelas" }]}>
        <Input placeholder="kelas" />
      </Form.Item>
      <Form.Item name="fakultas_id" label="Fakultas" rules={[{ required: true, message: "fakultas belum dipilih" }]}>
        <Select options={optionTest} placeholder="--- pilih fakultas ---" />
      </Form.Item>
    </Form>
  );
};

export default FormKelas;
