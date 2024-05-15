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

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        console.log(res);
        setIsModalOpenUpdate(false);
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

  const onOpenUpdate = () => {
    setIsModalOpenUpdate(true);
    form.setFieldsValue({ status: 0 });
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
    form.resetFields();
  };

  const onOpenAdd = () => {
    setIsModalOpenAdd(true);
    form.setFieldsValue({ status: 0 });
  };

  return (
    <CardContainer>
      <Modal
        title="Update List data"
        open={isModalOpenUpdate}
        onOk={handleUpdate}
        onCancel={handleCancelUpdate}
      >
        <FormMahasiswa form={form} />
      </Modal>
      <Modal
        title="Add List data"
        open={isModalOpenAdd}
        onOk={handleAdd}
        onCancel={handleCancelAdd}
      >
        <FormMahasiswa form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableMahasiswa data={searchFilter} onOpen={onOpenUpdate} />
    </CardContainer>
  );
};

export default ListMahasiswa;
