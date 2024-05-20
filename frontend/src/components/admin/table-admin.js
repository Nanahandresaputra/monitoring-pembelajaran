import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

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
      width: 200,
      render: (_, record) => {
        return (
          <Popconfirm
            title="Hapus data"
            description="Apakah yakin ingin menghapus data ini?"
            onConfirm={() => console.log("confirm")}
            onCancel={() => console.log("cancel")}
            okText="Ya"
            cancelText="Tidak"
          >
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

export default TableAdmin;
