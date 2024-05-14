import React, { useState } from "react";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import { Button, Form, Modal } from "antd";
import TableMahasiswa from "../../../components/mahasiswa/list-mahasiswa/table-mahasiswa";
import FormMahasiswa from "../../../components/mahasiswa/list-mahasiswa/form-mahasiswa";

const ListMahasiswa = () => {
  const [searchData, setSearchData] = useState("");

  const data = new Array(25).fill().map((_, index) => ({
    code: Math.floor(Math.random(index) * 98765),
    nama: `nama ${index}`,
    class: `TEST ${Math.floor(Math.random(index) * 4)}`,
    prod: "Prod Test Information",
    fax: "Test",
    status: Math.floor(Math.random(index) * 2),
  }));

  let searchFilter = searchData
    ? data.filter((datas) =>
        `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())
      )
    : data;

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        setIsModalOpen(false);
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
        setIsModalOpen(false);
        form.resetFields();
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onOpen = () => {
    setIsModalOpen(true);
    form.setFieldsValue({ status: 0 });
  };

  return (
    <CardContainer>
      <Modal
        title="Update List data"
        open={isModalOpen}
        onOk={handleUpdate}
        onCancel={handleCancel}
      >
        <FormMahasiswa form={form} />
      </Modal>
      <Modal
        title="Add List data"
        open={isModalOpen}
        onOk={handleAdd}
        onCancel={handleCancel}
      >
        <FormMahasiswa form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpen}>
          + Tambah
        </Button>
      </div>

      <TableMahasiswa data={searchFilter} onOpen={onOpen} />
    </CardContainer>
  );
};

export default ListMahasiswa;
