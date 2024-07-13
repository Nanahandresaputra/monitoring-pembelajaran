import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableJdw = ({ data, onOpenUpdate, setGetId, kelas, days, handleDelete }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const filterKelas = [...new Set(kelas.map((datas) => datas.kelas))].map((datas) => ({ text: datas, value: datas }));

  const filterDay = [...new Set(days.map((datas) => datas))].map((day) => ({
    text: day,
    value: day,
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
      title: "Kelas",
      dataIndex: "kelas",
      key: "kelas",
      filters: filterKelas,
      onFilter: (value, record) => record.kelas === value,
    },
    {
      title: "Hari",
      dataIndex: "hari",
      key: "hari",
      filters: filterDay,
      onFilter: (value, record) => record.hari === value,
    },
    {
      title: "Jam",
      dataIndex: "jam",
      key: "jam",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      render: (_, record) => {
        return (
          <div className="flex items-center space-x-5">
            <Button type="primary" onClick={() => onOpenUpdate(record.key)}>
              <FaEdit />
            </Button>
            <Popconfirm title="Hapus data" description="Apakah yakin ingin menghapus data ini?" onConfirm={() => handleDelete(record.key)} onCancel={() => console.log("cancel")} okText="Ya" cancelText="Tidak">
              <Button>
                <FaRegTrashAlt />
              </Button>
            </Popconfirm>
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
            setGetId(record.key);
            setSelectedRow(record.key);
          },
        };
      }}
    />
  );
};

export default TableJdw;
