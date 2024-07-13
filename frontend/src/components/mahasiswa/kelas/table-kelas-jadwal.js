import { Table } from "antd";
import React from "react";

const TableKelasJadwal = ({ jadwal }) => {
  let dataJdwl = jadwal?.map((datas, index) => ({
    key: index,
    pengampu: datas.pengampu,
    matkul: datas.matkul,
    hari: datas.hari,
    jam: datas.jam,
  }));

  const columns = [
    {
      title: "Pengampu",
      dataIndex: "pengampu",
      key: "pengampu",
    },
    {
      title: "Mata Kuliah",
      dataIndex: "matkul",
      key: "matkul",
    },
    {
      title: "Hari",
      dataIndex: "hari",
      key: "hari",
    },
    {
      title: "Jam",
      dataIndex: "jam",
      key: "jam",
    },
  ];
  return <Table columns={columns} dataSource={dataJdwl} pagination={{ pageSize: 8 }} />;
};

export default TableKelasJadwal;
