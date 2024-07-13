import { Table, Tag } from "antd";
import React, { useState } from "react";

const TablekelasMahasiswa = ({ mahasiswa }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const dataSource = mahasiswa?.map((datas, index) => ({
    key: index,
    nim: datas.nim,
    nama: datas.nama,
    status: datas.status,
    // action: datas.action,
  }));

  const columns = [
    {
      title: "Nim",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Aktif", value: 1 },
        { text: "Tidak Aktif", value: 0 },
      ],
      onFilter: (value, record) => record.status === value,
      render: (_, record) => {
        if (record.status === 1) {
          return (
            <Tag color="green" className="w-[5rem] text-center">
              Aktif
            </Tag>
          );
        } else {
          return (
            <Tag color="red" className="w-[5rem] text-center">
              Tidak Aktif
            </Tag>
          );
        }
      },
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowClassName={(record, index) => record.key === selectedRow && "bg-[#fafafa]"}
      onRow={(record) => {
        return {
          onClick: () => {
            setSelectedRow(record.key);
          },
        };
      }}
      pagination={{ pageSize: 8 }}
    />
  );
};

export default TablekelasMahasiswa;
