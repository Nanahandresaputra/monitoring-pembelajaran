import { Table, Tag } from "antd";
import React, { useState } from "react";

const TableDataDsn = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const dataSource = data.map((datas, index) => ({
    key: index,
    code: datas.code,
    nama: datas.nama,
    status: datas.status,
    address: datas.address,
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
    {
      title: "Adress",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowClassName={(record, index) =>
        record.key === selectedRow && "bg-[#fafafa]"
      }
      onRow={(record) => {
        return {
          onClick: () => {
            setSelectedRow(record.key);
          },
        };
      }}
    />
  );
};

export default TableDataDsn;
