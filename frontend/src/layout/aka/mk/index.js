import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableMK from "../../../components/aka/mk/table-mk";
import FormMk from "../../../components/aka/mk/form-mk";
import { useDispatch, useSelector } from "react-redux";
import { openNotifications } from "../../../utils/notification";
import { addMatkulAction, deleteMatkulAction, getMatkulAction, updateMatkulAction } from "../../../store/action/akademik";

const MK = () => {
  const [searchData, setSearchData] = useState("");
  const [getId, setGetId] = useState(-1);

  const { matkul } = useSelector((state) => state.akademik);
  const { loadingPost } = useSelector((state) => state.loadingData);

  const data = matkul.map((datas) => ({
    key: datas.id,
    matkul: datas.matkul,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.matkul}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getMatkul = () => {
    dispatch(getMatkulAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateMatkulAction(res, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getMatkul();
          })
          .catch((err) => openNotifications(err.errorCode, err.message));
      })
      .catch((err) => console.log(err));
  };

  const handleAdd = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(addMatkulAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getMatkul();
          })
          .catch((err) => openNotifications(err.errorCode, err.message));
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

  const onOpenUpdate = (id) => {
    setIsModalOpenUpdate(true);
    form.setFieldsValue(matkul.find((data) => data.id === id));
  };

  const onOpenAdd = () => {
    setIsModalOpenAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteMatkulAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getMatkul();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getMatkul();
  }, []);

  return (
    <CardContainer>
      <Modal title="Edit Mata Kuliah" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate} okButtonProps={{ loading: loadingPost }}>
        <FormMk form={form} />
      </Modal>
      <Modal title="Tambah Mata Kuliah" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormMk form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari mata kuliah" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableMK data={searchFilter} onOpenUpdate={onOpenUpdate} setGetId={setGetId} handleDelete={handleDelete} />
    </CardContainer>
  );
};

export default MK;
