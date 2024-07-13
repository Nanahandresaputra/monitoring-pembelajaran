import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import TableAdmin from "../../components/admin/table-admin";
import CardContainer from "../../components/card-container";
import InputSearch from "../../components/input-search";
import FormAdmin from "../../components/admin/form-admin";
import { useDispatch, useSelector } from "react-redux";
import { addAdminAction, deleteAdminAction, getAdminAction } from "../../store/action/user-admin";
import { openNotifications } from "./../../utils/notification";

const DataAdmin = () => {
  const [searchData, setSearchData] = useState("");
  const { users } = useSelector((state) => state.admin);
  const { loadingPost } = useSelector((state) => state.loadingData);

  const data = users.map((data) => ({
    key: data.id,
    nama: data.nama,
    username: data.username,
    status: data.status,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase()) || `${datas.username}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getAdmin = () => {
    dispatch(getAdminAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleAdd = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(addAdminAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getAdmin();
          })
          .catch((err) => openNotifications(err.errorCode, err.message));
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

  const handleDelete = (id) => {
    dispatch(deleteAdminAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getAdmin();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <CardContainer>
      <Modal title="Add data 1" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormAdmin form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableAdmin data={searchFilter} handleDelete={handleDelete} />
    </CardContainer>
  );
};

export default DataAdmin;
