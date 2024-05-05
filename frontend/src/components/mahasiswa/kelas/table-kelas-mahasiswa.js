import { Table, Tag } from "antd";
import React, { useState } from "react";

const TablekelasMahasiswa = () => {
  const [selectedRow, setSelectedRow] = useState("");

  const data = new Array(25).fill().map((_, index) => ({
    code: Math.floor(Math.random(index) * 98765),
    nama: `nama ${index}`,
    class: `TEST ${Math.floor(Math.random(index) * 4)}`,
    prod: "Prod Test Information",
    fax: "Test",
    status: Math.floor(Math.random(index) * 2),
  }));

  const dataSource = data.map((datas, index) => ({
    key: index,
    code: datas.code,
    nama: datas.nama,
    status: datas.status,
    // action: datas.action,
  }));

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
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
      pagination={{ pageSize: 7 }}
    />
  );
};

export default TablekelasMahasiswa;
