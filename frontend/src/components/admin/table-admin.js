import { Button, Table } from "antd";
import React, { useState } from "react";

const TableAdmin = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const dataSource = data.map((datas, index) => ({
    key: index,
    nama: datas.nama,
    username: datas.username,
    // action: datas.action,
  }));

  const columns = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Button type="primary" size="small">
            Edit
          </Button>
        );
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
    />
  );
};

export default TableAdmin;
