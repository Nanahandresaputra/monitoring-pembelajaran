import { Form, Input, Select } from "antd";
import React from "react";

const FormMahasiswa = ({ form, prodi, kelas, fakultas }) => {
  const optionKelas = kelas.map((datas) => ({
    value: datas.id,
    label: datas.kelas,
  }));

  const optionProdi = prodi.map((datas) => ({
    value: datas.id,
    label: datas.prodi,
  }));

  const optionFakultas = fakultas.map((datas) => ({
    value: datas.id,
    label: datas.fakultas,
  }));

  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5" autoComplete="off">
      <Form.Item name="nim" label="Nim" rules={[{ required: true, message: "masukan nim" }]}>
        <Input placeholder="masukan nim" />
      </Form.Item>
      <Form.Item name="nama" label="Nama" rules={[{ required: true, message: "masukan nama" }]}>
        <Input placeholder="masukan nama" />
      </Form.Item>
      <Form.Item name="kelas_id" label="Kelas" rules={[{ required: true, message: "kelas belum dipilih" }]}>
        <Select options={optionKelas} placeholder="--- pilih kelas ---" />
      </Form.Item>
      <Form.Item name="prodi_id" label="Program Studi" rules={[{ required: true, message: "prodi belum dipilih" }]}>
        <Select options={optionProdi} placeholder="--- pilih prodi ---" />
      </Form.Item>
      <Form.Item name="fakultas_id" label="Fakultas" rules={[{ required: true, message: "fakultas belum dipilih" }]}>
        <Select options={optionFakultas} placeholder="--- pilih fakultas ---" />
      </Form.Item>
      <Form.Item name="status" label="Status" rules={[{ required: true, message: "status belum dipilih" }]}>
        <Select
          placeholder="--- pilih status ---"
          options={[
            { value: 1, label: "Aktif" },
            { value: 0, label: "Tidak aktif" },
          ]}
        />
      </Form.Item>
    </Form>
  );
};

export default FormMahasiswa;
