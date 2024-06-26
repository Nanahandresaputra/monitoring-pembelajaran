import React, { useState } from "react";
import CardContainer from "./../../components/card-container/index";
import InputSearch from "../../components/input-search";
import { Button, Form, Modal, Tag } from "antd";
import TableDataDsn from "../../components/dosen/table-data";
import TableDetail from "../../components/dosen/table-detail";
import FormDosen from "../../components/dosen/form-data-ds";

const Dosen = () => {
  const [searchData, setSearchData] = useState("");
  const data = new Array(25).fill().map((_, index) => ({
    code: Math.floor(Math.random(index) * 98765),
    nama: `nama ${index}`,
    status: Math.floor(Math.random(index) * 2),
  }));

  let searchFilter = searchData
    ? data.filter((datas) =>
        `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())
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
    <section className="grid grid-cols-9 gap-x-4">
      <Modal
        title="Update data 1"
        open={isModalOpenUpdate}
        onOk={handleUpdate}
        onCancel={handleCancelUpdate}
      >
        <FormDosen form={form} />
      </Modal>
      <Modal
        title="Add data 1"
        open={isModalOpenAdd}
        onOk={handleAdd}
        onCancel={handleCancelAdd}
      >
        <FormDosen form={form} />
      </Modal>
      <div className="col-span-5">
        <CardContainer>
          <div className="flex justify-between items-center">
            <InputSearch placeholder="cari data" setState={setSearchData} />
            <Button type="primary" className="font-medium" onClick={onOpenAdd}>
              + Tambah
            </Button>
          </div>

          <TableDataDsn data={searchFilter} onOpen={onOpenUpdate} />
        </CardContainer>
      </div>
      <div className="col-span-4">
        <CardContainer>
          <h3 className="font-medium text-lg">Detail Data</h3>

          <div className="grid grid-cols-12 gap-y-2">
            <p className="col-span-3">Nama</p>
            <p className="col-span-1">:</p>
            <p className="col-span-8">Nama 0</p>
            <p className="col-span-3">Code</p>
            <p className="col-span-1">:</p>
            <p className="col-span-8">989898</p>
            <p className="col-span-3">Status</p>
            <p className="col-span-1">:</p>
            <div className="col-span-8">
              <Tag color="green">Aktif</Tag>
            </div>
          </div>

          <TableDetail />
        </CardContainer>
      </div>
    </section>
  );
};

export default Dosen;
