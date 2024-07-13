import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableKelas = ({ data, onOpen, setGetId, handleDelete, getKelasDetail }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const columns = [
    {
      title: "Kelas",
      dataIndex: "kelas",
      key: "kelas",
    },
    {
      title: "Fakultas",
      dataIndex: "fakultas",
      key: "fakultas",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      render: (_, record) => {
        return (
          <div className="flex items-center space-x-5">
            <Button type="primary" onClick={() => onOpen(record.key)}>
              <FaEdit />
            </Button>
            {/* <Popconfirm title="Hapus data" description="Apakah yakin ingin menghapus data ini?" onConfirm={() => handleDelete(record.key)} onCancel={() => console.log("cancel")} okText="Ya" cancelText="Tidak">
              <Button>
                <FaRegTrashAlt />
              </Button>
            </Popconfirm> */}
          </div>
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
            getKelasDetail(record.key);
            setGetId(record.key);
            setSelectedRow(record.key);
          },
        };
      }}
    />
  );
};

export default TableKelas;
