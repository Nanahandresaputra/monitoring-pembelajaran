import React, { useEffect, useState } from "react";
import CardContainer from "./../../components/card-container/index";
import InputSearch from "../../components/input-search";
import { Button, Form, Modal, Tag } from "antd";
import TableDataDsn from "../../components/dosen/table-data";
import TableDetail from "../../components/dosen/table-detail";
import FormDosen from "../../components/dosen/form-data-ds";
import { useDispatch, useSelector } from "react-redux";
import { addDosenAction, deleteDosenAction, getDosenAction, getDosenDetailAction, updateDosenAction } from "./../../store/action/dosen";
import { openNotifications } from "../../utils/notification";

const Dosen = () => {
  const { dosen, dosenDetail } = useSelector((state) => state.dosen);
  const { loadingPost } = useSelector((state) => state.loadingData);
  const [searchData, setSearchData] = useState("");
  const [getId, setGetId] = useState(-1);

  const data = dosen?.map((data) => ({
    key: data.id,
    nidn: data.nidn,
    nama: data.nama,
    status: data.status,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getDosen = () => {
    dispatch(getDosenAction())
      .then((res) => {
        if (res.data[0].id) {
          setGetId(res.data[0].id);
          getDosenDetail(res.data[0].id);
        }
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getDosenDetail = (id) => {
    dispatch(getDosenDetailAction(id)).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateDosenAction(res, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getDosen();
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
        dispatch(addDosenAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getDosen();
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
    let initialValue = dosen?.find((data) => data.id === id);
    form.setFieldsValue(initialValue);

    setIsModalOpenUpdate(true);
  };

  const onOpenAdd = () => {
    setIsModalOpenAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteDosenAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getDosen();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getDosen();
  }, []);

  return (
    <section className="grid grid-cols-9 gap-x-4">
      <Modal title="Update data 1" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate} okButtonProps={{ loading: loadingPost }}>
        <FormDosen form={form} />
      </Modal>
      <Modal title="Add data 1" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormDosen form={form} />
      </Modal>
      <div className="col-span-5">
        <CardContainer>
          <div className="flex justify-between items-center">
            <InputSearch placeholder="cari nama dosen" setState={setSearchData} />
            <Button type="primary" className="font-medium" onClick={onOpenAdd}>
              + Tambah
            </Button>
          </div>

          <TableDataDsn data={searchFilter} handleDelete={handleDelete} onOpen={onOpenUpdate} getDosenDetail={getDosenDetail} setGetId={setGetId} />
        </CardContainer>
      </div>
      <div className="col-span-4">
        <CardContainer>
          <h3 className="font-medium text-lg">Detail Dosen</h3>

          <div className="grid grid-cols-12 gap-y-2">
            <p className="col-span-3">Nama</p>
            <p className="col-span-1">:</p>
            <p className="col-span-8">{dosenDetail?.nama}</p>
            <p className="col-span-3">NIDN</p>
            <p className="col-span-1">:</p>
            <p className="col-span-8">{dosenDetail?.nidn}</p>
            <p className="col-span-3">Status</p>
            <p className="col-span-1">:</p>
            <div className="col-span-8">
              <Tag color={dosenDetail?.status === 1 ? "green" : "red"}>{dosenDetail?.status === 1 ? "Aktif" : "Tidak Aktif"}</Tag>
            </div>
          </div>

          <TableDetail data={dosenDetail?.jadwal} />
        </CardContainer>
      </div>
    </section>
  );
};

export default Dosen;
