import React, { useCallback, useEffect, useState } from "react";
import { Button, Collapse, Divider, Form, Modal } from "antd";
import TableKelas from "../../../components/mahasiswa/kelas/table-kelas";
import TableKelasJadwal from "./../../../components/mahasiswa/kelas/table-kelas-jadwal";
import TablekelasMahasiswa from "./../../../components/mahasiswa/kelas/table-kelas-mahasiswa";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import FormKelas from "../../../components/mahasiswa/kelas/form-kelas";
import { useDispatch, useSelector } from "react-redux";
import { openNotifications } from "../../../utils/notification";
import { addKelasAction, deleteKelasAction, getKelasAction, getKelasDetailAction, updateKelasAction } from "../../../store/action/mahasiswa";
import { getFakultasAction } from "../../../store/action/akademik";

const Kelas = () => {
  const { kelasMhs, kelasDetail } = useSelector((state) => state.mahasiswa);
  const { fakultas } = useSelector((state) => state.akademik);
  const { loadingPost, loading, loadingDetail } = useSelector((state) => state.loadingData);

  const [searchData, setSearchData] = useState("");
  const [getId, setGetId] = useState(-1);

  const dataClass = kelasMhs?.map((datas) => ({
    key: datas.id,
    kelas: datas.kelas,
    fakultas: datas.fakultas,
  }));

  let searchFilter = searchData ? dataClass.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : dataClass;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getKelas = () => {
    dispatch(getKelasAction())
      .then((res) => {
        if (res.data[0]?.id) {
          setGetId(res.data[0].id);
          getKelasDetail(res.data[0].id);
        }
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getKelasDetail = (id) => {
    dispatch(getKelasDetailAction(id)).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getFakultasData = () => {
    dispatch(getFakultasAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateKelasAction(res, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getKelas();
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
        dispatch(addKelasAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getKelas();
          })
          .catch((err) => openNotifications(err.errorCode, err.message));
      })
      .catch((err) => console.log(err));
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
    form.resetFields();
  };

  const onOpenUpdate = (id) => {
    getFakultasData();
    let initialValue = kelasMhs?.find((data) => data.id === id);
    form.setFieldsValue({ ...initialValue, fakultas_id: fakultas?.find((data) => data.fakultas === initialValue.fakultas)?.id });
    setIsModalOpenUpdate(true);
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
    form.resetFields();
  };

  const onOpenAdd = () => {
    getFakultasData();
    setIsModalOpenAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteKelasAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getKelas();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  const collapseItems = [
    {
      key: "1",
      label: (
        <Divider>
          <p className="font-normal">Daftar Mahasiswa</p>
        </Divider>
      ),
      children: <TablekelasMahasiswa mahasiswa={kelasDetail?.mahasiswa} />,
    },
    {
      key: "2",
      label: (
        <Divider>
          <p className="font-normal">Jadwal Kelas</p>
        </Divider>
      ),
      children: <TableKelasJadwal jadwal={kelasDetail?.jadwal} />,
    },
  ];

  useEffect(() => {
    getKelas();
  }, []);

  return (
    <section className="grid grid-cols-9 gap-x-4">
      <Modal title="Update List data" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate} okButtonProps={{ loading: loadingPost }}>
        <FormKelas data={fakultas} form={form} />
      </Modal>
      <Modal title="Add List data" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormKelas data={fakultas} form={form} />
      </Modal>
      <div className="col-span-5">
        <CardContainer loading={loading}>
          <div className="flex justify-between items-center">
            <InputSearch placeholder="cari kelas" setState={setSearchData} />
            <Button type="primary" className="font-medium" onClick={onOpenAdd}>
              + Tambah
            </Button>
          </div>

          <TableKelas data={searchFilter} onOpen={onOpenUpdate} setGetId={setGetId} handleDelete={handleDelete} getKelasDetail={getKelasDetail} />
        </CardContainer>
      </div>
      <div className="col-span-4">
        <CardContainer loading={loadingDetail}>
          <h3 className="font-medium text-lg">Detail Data Kelas {kelasMhs?.find((data) => data.id === getId)?.kelas}</h3>

          <Collapse defaultActiveKey="1" accordion ghost items={collapseItems} size="small" />
        </CardContainer>
      </div>
    </section>
  );
};

export default Kelas;
