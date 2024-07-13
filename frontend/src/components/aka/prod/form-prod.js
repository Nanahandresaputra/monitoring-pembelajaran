import { Form, Input, Select } from "antd";
import React from "react";

const FormProd = ({ form, data }) => {
  const optionTest = data.map((datas) => ({
    value: datas.id,
    label: datas.fakultas,
  }));

  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5" autoComplete="off">
      <Form.Item name="prodi" label="Program Studi" rules={[{ required: true, message: "masukan prod" }]}>
        <Input placeholder="program studi" />
      </Form.Item>
      <Form.Item name="fakultas_id" label="Fakultas" rules={[{ required: true, message: "fakultas belum dipilih" }]}>
        <Select options={optionTest} placeholder="--- pilih fakultas ---" />
      </Form.Item>
    </Form>
  );
};

export default FormProd;
