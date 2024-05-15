import { Form, Input, Select, TimePicker } from "antd";
import React from "react";

const FormJadwal = ({ form, data, days }) => {
  const optionTest = data.map((data) => ({
    value: data.test,
    label: data.test,
  }));

  const optionDay = data.map((data) => ({
    value: data,
    label: data,
  }));

  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5">
      <Form.Item
        name="nama"
        label="Nama"
        rules={[{ required: true, message: "masukan nama" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="loerm"
        label="Loerm"
        rules={[{ required: true, message: "masukan loerm" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="test"
        label="Test"
        rules={[{ required: true, message: "test belum dipilih" }]}
      >
        <Select options={optionTest} />
      </Form.Item>
      <Form.Item
        name="day"
        label="Day"
        rules={[{ required: true, message: "day belum dipilih" }]}
      >
        <Select options={optionDay} />
      </Form.Item>
      {/* <Form.Item
        name="time"
        label="Time"
        rules={[{ required: true, message: "time belum dipilih" }]}
      >
        <TimePicker.RangePicker format={'HH:mm'} disabledTime={(range) => range. } />
      </Form.Item> */}
    </Form>
  );
};

export default FormJadwal;
