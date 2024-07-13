import { Button, Popconfirm, Table, Tag } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableMahasiswa = ({ data, onOpenUpdate, setGetId, handleDelete }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const filterKelas = [...new Set(data.map((datas) => datas.kelas))].map((dataClass) => ({ text: dataClass, value: dataClass }));
  const filterProdi = [...new Set(data.map((datas) => datas.prodi))].map((prod) => ({ text: prod, value: prod }));
  const filterFakultas = [...new Set(data.map((datas) => datas.fakultas))].map((fax) => ({
    text: fax,
    value: fax,
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
      title: "Kelas",
      dataIndex: "kelas",
      key: "kelas",
      filters: filterKelas,
      onFilter: (value, record) => record.kelas === value,
    },
    {
      title: "Program Studi",
      dataIndex: "prodi",
      key: "prodi",
      filters: filterProdi,
      onFilter: (value, record) => record.prodi === value,
    },
    {
      title: "Fakultas",
      dataIndex: "fakultas",
      key: "fakultas",
      filters: filterFakultas,
      onFilter: (value, record) => record.fakultas === value,
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

export default TableMahasiswa;
