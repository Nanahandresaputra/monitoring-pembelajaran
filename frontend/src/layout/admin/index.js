import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import TableAdmin from "../../components/admin/table-admin";
import CardContainer from "../../components/card-container";
import InputSearch from "../../components/input-search";
import FormAdmin from "../../components/admin/form-admin";

const DataAdmin = () => {
  const [searchData, setSearchData] = useState("");

  const data = new Array(25).fill().map((_, index) => ({
    nama: `nama ${index}`,
    username: `username${Math.floor(Math.random(index) * 23459876)}`,
  }));

  let searchFilter = searchData
    ? data.filter(
        (datas) =>
          `${datas.nama}`
            .toUpperCase()
            .includes(`${searchData}`.toUpperCase()) ||
          `${datas.username}`
            .toUpperCase()
            .includes(`${searchData}`.toUpperCase())
      )
    : data;

  const [form] = Form.useForm();

  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

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
        title="Add data 1"
        open={isModalOpenAdd}
        onOk={handleAdd}
        onCancel={handleCancelAdd}
      >
        <FormAdmin form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableAdmin data={searchFilter} />
    </CardContainer>
  );
};

export default DataAdmin;
