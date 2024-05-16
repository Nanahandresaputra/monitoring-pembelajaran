import { Form, Input, Select, TimePicker } from "antd";
import moment from "moment";
import React from "react";

const FormJadwal = ({ form, data, days }) => {
  const optionTest = [...new Set(data.map((datas) => datas.test))].map(
    (test) => ({
      value: test,
      label: test,
    })
  );

  const optionDay = days.map((datas) => ({
    value: datas,
    label: datas,
  }));

  const format = "DD.MM.YYYY HH:mm";
  const disabledDates = [
    {
      start: "23.02.2020 13:00",
      end: "25.02.2020 15:00",
    },
    {
      start: "15.03.2020 08:00",
      end: "20.03.2020 17:00",
    },
  ];

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
      <Form.Item
        name="time"
        label="Time"
        rules={[{ required: true, message: "time belum dipilih" }]}
        className="col-span-2"
      >
        <TimePicker.RangePicker
          showSecond={false}
          className="w-full"
          // disabledTime={(number, type) => {
          //   return {
          //     disabledHours: () => {
          //       let hours = [];
          //       for (let i = 0; i <= 24; i++) {
          //         if (i < 6 || i > 22) {
          //           hours.push(i);
          //         }
          //       }
          //       return hours;
          //     },
          //   };
          // }}
        />
      </Form.Item>
    </Form>
  );
};

export default FormJadwal;
