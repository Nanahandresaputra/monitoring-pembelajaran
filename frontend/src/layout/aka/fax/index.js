import React, { useState } from "react";
import { Button, Form, Modal } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableFax from "../../../components/aka/fax/table-fax";
import FormFax from "../../../components/aka/fax/from-fax";

const Faxu = () => {
  const [searchData, setSearchData] = useState("");

  const dataFax = [
    "Test",
    "Fake",
    "Pending",
    "Poll",
    "Hongkong",
    "Near",
    "Sein",
  ];

  const data = dataFax.map((datas, index) => ({
    key: index,
    fax: datas,
  }));

  let searchFilter = searchData
    ? data.filter((datas) =>
        `${datas.fax}`.toUpperCase().includes(`${searchData}`.toUpperCase())
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
        <FormFax form={form} />
      </Modal>
      <Modal
        title="Add data 1"
        open={isModalOpenAdd}
        onOk={handleAdd}
        onCancel={handleCancelAdd}
      >
        <FormFax form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableFax data={searchFilter} onOpenUpdate={onOpenUpdate} />
    </CardContainer>
  );
};

export default Faxu;
