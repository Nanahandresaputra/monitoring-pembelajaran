import React, { useEffect, useState } from "react";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import { Button, Form, Modal } from "antd";
import TableMahasiswa from "../../../components/mahasiswa/list-mahasiswa/table-mahasiswa";
import FormMahasiswa from "../../../components/mahasiswa/list-mahasiswa/form-mahasiswa";
import { useDispatch, useSelector } from "react-redux";
import { openNotifications } from "./../../../utils/notification";
import { addMahasiswaAction, deleteMahasiswaAction, getKelasAction, getMahasiswaAction, updateMahasiswasAction } from "../../../store/action/mahasiswa";
import { getFakultasAction, getProdiAction } from "../../../store/action/akademik";

const ListMahasiswa = () => {
  const { kelasMhs, mahasiswa } = useSelector((state) => state.mahasiswa);
  const { prodi, fakultas } = useSelector((state) => state.akademik);
  const { loadingPost, loading } = useSelector((state) => state.loadingData);

  const [searchData, setSearchData] = useState("");
  const [getId, setGetId] = useState(-1);

  const data = mahasiswa?.map((datas, index) => ({
    key: datas.id,
    nim: datas.nim,
    nama: datas.nama,
    kelas: datas.kelas,
    prodi: datas.prodi,
    fakultas: datas.fakultas,
    status: datas.status,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const dispatch = useDispatch();

  const getMahasiswa = () => {
    dispatch(getMahasiswaAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getProdi = () => {
    dispatch(getProdiAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getFakultasData = () => {
    dispatch(getFakultasAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getKelas = () => {
    dispatch(getKelasAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateMahasiswasAction(res, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getMahasiswa();
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
        dispatch(addMahasiswaAction(res))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getMahasiswa();
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
    getProdi();
    getKelas();
    setIsModalOpenUpdate(true);

    let initialValue = mahasiswa?.find((data) => data.id === id);
    let initFakultas = fakultas?.find((data) => data.fakultas === initialValue.fakultas)?.id;
    let initKelas = kelasMhs?.find((data) => data.kelas === initialValue.kelas)?.id;
    let initProdi = prodi?.find((data) => data.prodi === initialValue.prodi)?.id;
    form.setFieldsValue({ ...initialValue, fakultas_id: initFakultas, kelas_id: initKelas, prodi_id: initProdi });
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
    form.resetFields();
  };

  const onOpenAdd = () => {
    getFakultasData();
    getProdi();
    getKelas();
    setIsModalOpenAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteMahasiswaAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getMahasiswa();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getMahasiswa();
  }, []);

  return (
    <CardContainer loading={loading}>
      <Modal title="Edit data Mahasiswa" open={isModalOpenUpdate} onOk={handleUpdate} onCancel={handleCancelUpdate} okButtonProps={{ loading: loadingPost }}>
        <FormMahasiswa form={form} prodi={prodi} fakultas={fakultas} kelas={kelasMhs} />
      </Modal>
      <Modal title="Tambah data Mahasiswa" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormMahasiswa form={form} prodi={prodi} fakultas={fakultas} kelas={kelasMhs} />
      </Modal>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari nama mahasiswa" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableMahasiswa data={searchFilter} onOpenUpdate={onOpenUpdate} setGetId={setGetId} handleDelete={handleDelete} />
    </CardContainer>
  );
};

export default ListMahasiswa;
