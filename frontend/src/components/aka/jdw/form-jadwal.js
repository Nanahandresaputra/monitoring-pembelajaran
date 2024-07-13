import { Form, Select, TimePicker } from "antd";
import React from "react";

const FormJadwal = ({ form, days, kelas, dosen, matkul }) => {
  let optionsKelas = kelas?.map((datas) => ({ value: datas.id, label: datas.kelas }));
  let optionsMatkul = matkul?.map((datas) => ({ value: datas.id, label: datas.matkul }));
  let optionsDosen = dosen?.filter((datas) => datas.status === 1)?.map((datas) => ({ value: datas.id, label: datas.nama }));

  const optionDay = days.map((datas) => ({
    value: datas,
    label: datas,
  }));

  return (
    <Form layout="vertical" form={form} className="grid grid-cols-2 gap-x-5" autoComplete="off">
      <Form.Item name="dosen_id" label="Pengampu" rules={[{ required: true, message: "masukan nama dosen pengampu" }]}>
        <Select placeholder="--- pilih pengampu ---" options={optionsDosen} />
      </Form.Item>
      <Form.Item name="matkul_id" label="Mata Kuliah" rules={[{ required: true, message: "masukan mata kuliah" }]}>
        <Select placeholder="--- pilih matkul ---" options={optionsMatkul} />
      </Form.Item>
      <Form.Item name="kelas_id" label="Kelas" rules={[{ required: true, message: "kelas belum dipilih" }]}>
        <Select placeholder="--- pilih kelas ---" options={optionsKelas} />
      </Form.Item>
      <Form.Item name="hari" label="Hari" rules={[{ required: true, message: "hari belum dipilih" }]}>
        <Select placeholder="--- pilih hari ---" options={optionDay} />
      </Form.Item>
      <Form.Item
        name="jam"
        label="Jam"
        rules={[{ required: true, message: "jam belum dipilih" }]}
        className="col-span-2"
        // initialValue={[dayjs("13:00", "hh:mm"), dayjs("14:00", "hh:mm")]}
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
