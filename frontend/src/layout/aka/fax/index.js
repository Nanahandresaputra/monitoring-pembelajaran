import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableFax from "../../../components/aka/fax/table-fax";
import FormFax from "../../../components/aka/fax/from-fax";
import { useDispatch, useSelector } from "react-redux";
import { addFakultasAction, deleteFakultasAction, getFakultasAction, updateFakultasAction } from "../../../store/action/akademik";
import { openNotifications } from "../../../utils/notification";

const Faxu = () => {
  const [searchData, setSearchData] = useState("");
  const { fakultas } = useSelector((state) => state.akademik);
  const { loadingPost } = useSelector((state) => state.loadingData);

  const [getId, setGetId] = useState(-1);

  const data = fakultas.map((datas) => ({
    key: datas.id,
    fakultas: datas.fakultas,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.fakultas}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getFakultasData = () => {
    dispatch(getFakultasAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateFakultasAction(res, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getFakultasData();
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
        dispatch(addFakultasAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getFakultasData();
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
    form.setFieldsValue(fakultas?.find((data) => data.id === id));
  };

  const onOpenAdd = () => {
    setIsModalOpenAdd(true);
    form.setFieldsValue({ status: 0 });
  };

  const handleDelete = (id) => {
    dispatch(deleteFakultasAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getFakultasData();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getFakultasData();
  }, []);

  return (
    <CardContainer>
      <Modal title="Edit Fakultas" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate} okButtonProps={{ loading: loadingPost }}>
        <FormFax form={form} />
      </Modal>
      <Modal title="Tambah Fakultas" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormFax form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari fakultas" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableFax data={searchFilter} onOpenUpdate={onOpenUpdate} setGetId={setGetId} handleDelete={handleDelete} />
    </CardContainer>
  );
};

export default Faxu;
