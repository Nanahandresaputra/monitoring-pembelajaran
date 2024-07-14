import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableProd from "../../../components/aka/prod";
import FormProd from "../../../components/aka/prod/form-prod";
import { useDispatch, useSelector } from "react-redux";
import { addProdiAction, deleteProdiAction, getFakultasAction, getProdiAction, updateProdiAction } from "../../../store/action/akademik";
import { openNotifications } from "../../../utils/notification";

const Prod = () => {
  const { prodi, fakultas } = useSelector((state) => state.akademik);
  const { loadingPost, loading } = useSelector((state) => state.loadingData);
  const [getId, setGetId] = useState(-1);

  const [searchData, setSearchData] = useState("");

  const data = prodi.map((datas) => ({
    key: datas.id,
    prodi: datas.prodi,
    fakultas: datas.fakultas,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.prodi}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getProdi = () => {
    dispatch(getProdiAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getFakultasData = () => {
    dispatch(getFakultasAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateProdiAction(res, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getProdi();
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
        dispatch(addProdiAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getProdi();
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
    let initialValue = prodi?.find((data) => data.id === id);
    form.setFieldsValue({ ...initialValue, fakultas_id: fakultas?.find((data) => data.fakultas === initialValue.fakultas).id });
    getFakultasData();
    setIsModalOpenUpdate(true);
  };

  const onOpenAdd = () => {
    getFakultasData();
    setIsModalOpenAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProdiAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getProdi();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getProdi();
  }, []);

  return (
    <CardContainer loading={loading}>
      <Modal title="Edit Program studi" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate} okButtonProps={{ loading: loadingPost }}>
        <FormProd data={fakultas} form={form} />
      </Modal>
      <Modal title="Tambah Program studi" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormProd data={fakultas} form={form} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari program studi" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableProd data={searchFilter} onOpenUpdate={onOpenUpdate} handleDelete={handleDelete} setGetId={setGetId} />
    </CardContainer>
  );
};

export default Prod;
