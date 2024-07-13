import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableJdw from "../../../components/aka/jdw/table-jdw";
import FormJadwal from "../../../components/aka/jdw/form-jadwal";
import { useDispatch, useSelector } from "react-redux";
import { addJadwalsAction, deleteJadwalsAction, getFakultasAction, getJadwalsAction, getMatkulAction, updateJadwalsAction } from "../../../store/action/akademik";
import { openNotifications } from "../../../utils/notification";
import { getKelasAction } from "./../../../store/action/mahasiswa";
import { getDosenAction } from "./../../../store/action/dosen";
import dayjs from "dayjs";

const Jdw = () => {
  const [searchData, setSearchData] = useState("");
  const { jadwal, matkul } = useSelector((state) => state.akademik);
  const { kelasMhs } = useSelector((state) => state.mahasiswa);
  const { dosen } = useSelector((state) => state.dosen);
  const { loadingPost } = useSelector((state) => state.loadingData);

  const [getId, setGetId] = useState(-1);

  const dispatch = useDispatch();

  const getJadwalData = () => {
    dispatch(getJadwalsAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  const getMatkulData = () => {
    dispatch(getMatkulAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };
  const getKelasData = () => {
    dispatch(getKelasAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };
  const getDosenData = () => {
    dispatch(getDosenAction()).catch((err) => openNotifications(err.errorCode, err.message));
  };

  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const data = jadwal?.map((datas) => ({
    key: datas.id,
    pengampu: datas.nama,
    kelas: datas.kelas,
    matkul: datas.matkul,
    hari: datas.hari,
    jam: datas.jam,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.pengampu}`.toUpperCase().includes(`${searchData}`.toUpperCase()) || `${datas.matkul}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  const [form] = Form.useForm();

  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const handleUpdate = () => {
    form.submit();
    form
      .validateFields()
      .then((res) => {
        dispatch(updateJadwalsAction({ ...res, jam: `${dayjs(res.jam[0].$d).format("HH:mm")} - ${dayjs(res.jam[1].$d).format("HH:mm")}` }, getId))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenUpdate(false);
            form.resetFields();
            getJadwalData();
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
        dispatch(addJadwalsAction({ ...res, jam: `${dayjs(res.jam[0].$d).format("HH:mm")} - ${dayjs(res.jam[1].$d).format("HH:mm")}` }))
          .then((result) => {
            openNotifications(result.errorCode, result.message);
            setIsModalOpenAdd(false);
            form.resetFields();
            getJadwalData();
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
    getKelasData();
    getMatkulData();
    getDosenData();
    let initialValue = jadwal?.find((data) => data.id === id);

    let jam = initialValue.jam;
    let [start, end] = jam.split("-");
    let jamValue = [dayjs(start, "hh:mm"), dayjs(end, "hh:mm")];

    let formIntitial = {
      ...initialValue,
      dosen_id: dosen?.find((data) => data.nama === initialValue.nama)?.id,
      kelas_id: kelasMhs?.find((data) => data.kelas === initialValue.kelas)?.id,
      matkul_id: matkul?.find((data) => data.matkul === initialValue.matkul)?.id,
      jam: jamValue,
    };

    form.setFieldsValue(formIntitial);
    setIsModalOpenUpdate(true);
  };

  const onOpenAdd = () => {
    getMatkulData();
    getKelasData();
    getDosenData();
    setIsModalOpenAdd(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteJadwalsAction(id))
      .then((result) => {
        openNotifications(result.errorCode, result.message);
        getJadwalData();
      })
      .catch((err) => openNotifications(err.errorCode, err.message));
  };

  useEffect(() => {
    getJadwalData();
  }, []);

  return (
    <CardContainer>
      <Modal title="Edit jadwal" open={isModalOpenUpdate} onOk={handleUpdate} okButtonProps={{ loading: loadingPost }} onCancel={handleCancelUpdate}>
        <FormJadwal data={data} days={days} form={form} kelas={kelasMhs} dosen={dosen} matkul={matkul} />
      </Modal>
      <Modal title="Tambah jadwal" open={isModalOpenAdd} onOk={handleAdd} onCancel={handleCancelAdd} okButtonProps={{ loading: loadingPost }}>
        <FormJadwal data={data} days={days} form={form} kelas={kelasMhs} dosen={dosen} matkul={matkul} />
      </Modal>

      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari berdasar pengampu atau matkul" setState={setSearchData} />
        <Button type="primary" className="font-medium" onClick={onOpenAdd}>
          + Tambah
        </Button>
      </div>

      <TableJdw data={searchFilter} days={days} kelas={kelasMhs} onOpenUpdate={onOpenUpdate} setGetId={setGetId} handleDelete={handleDelete} />
    </CardContainer>
  );
};

export default Jdw;
