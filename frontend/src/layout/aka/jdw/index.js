import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableJdw from "../../../components/aka/jdw/table-jdw";
import FormJadwal from "../../../components/aka/jdw/form-jadwal";

const Jdw = () => {
  const [searchData, setSearchData] = useState("");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const lorem = [
    "Lorem ipsum dolor",
    "sit amet",
    "consectetur adip",
    "condimentum erat nec",
    "consectetur erat",
    "Vestibulum ante ipsum primis in faucibus",
  ];

  const test = ["Test 1A", "Test 2A", "Test 3B", "Test 4A", "Test 5A"];

  const data = new Array(12).fill().map((_, index) => ({
    key: index,
    nama: `nama samar ${index}`,
    test: test[Math.floor(Math.random(index) * test.length)],
    lorem: lorem[Math.floor(Math.random(index) * lorem.length)],
    day: days[Math.floor(Math.random(index) * days.length)],
    time: "09.00 - 10.00",
  }));

  let searchFilter = searchData
    ? data.filter(
        (datas) =>
          `${datas.nama}`
            .toUpperCase()
            .includes(`${searchData}`.toUpperCase()) ||
          `${datas.lorem}`.toUpperCase().includes(`${searchData}`.toUpperCase())
      )
    : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        isModalOpenUpdate(false);
        form.resetFields();
      })
      .catch((err) => console.log(err));
  };

  const handleAdd = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        setIsModalOpenAdd(false);
        form.resetFields();
      })
      .catch((err) => console.log(err));
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
    form.resetFields();
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
    form.resetFields();
  };

  const onOpenUpdate = () => {
    setIsModalOpenUpdate(true);
    form.setFieldsValue({ status: 0 });
  };

  const onOpenAdd = () => {
    setIsModalOpenAdd(true);
    form.setFieldsValue({ status: 0 });
  };

  return (
    <CardContainer>
      <Modal
        title="Update data 1"
        open={isModalOpenUpdate}
        onOk={handleUpdate}
        onCancel={handleCancelUpdate}
      >
        <FormJadwal data={data} days={days} form={form} />
      </Modal>
      <Modal
        title="Add data 1"
        open={isModalOpenAdd}
        onOk={handleAdd}
        onCancel={handleCancelAdd}
      >
        <FormJadwal data={data} days={days} form={form} />
      </Modal>

      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableJdw data={searchFilter} onOpenUpdate={onOpenUpdate} />
    </CardContainer>
  );
};

export default Jdw;
