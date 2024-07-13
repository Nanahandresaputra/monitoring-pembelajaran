import { Button, Popconfirm, Table, Tag } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableAdmin = ({ data, handleDelete }) => {
  const [selectedRow, setSelectedRow] = useState("");

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
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      render: (_, record) => {
        return (
          <Popconfirm title="Hapus data" description="Apakah yakin ingin menghapus data ini?" onConfirm={() => handleDelete(record.key)} onCancel={() => console.log("cancel")} okText="Ya" cancelText="Tidak">
            <Button>
              <FaRegTrashAlt />
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
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
