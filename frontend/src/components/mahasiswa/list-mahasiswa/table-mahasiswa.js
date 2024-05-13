import { Button, Popconfirm, Table, Tag } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableMahasiswa = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const dataSource = data.map((datas, index) => ({
    key: index,
    code: datas.code,
    nama: datas.nama,
    class: datas.class,
    prod: datas.prod,
    fax: datas.fax,
    status: datas.status,
    // action: datas.action,
  }));

  const filterClass = [...new Set(data.map((datas) => datas.class))].map(
    (dataClass) => ({ text: dataClass, value: dataClass })
  );
  const filterProd = [...new Set(data.map((datas) => datas.prod))].map(
    (prod) => ({ text: prod, value: prod })
  );
  const filterFax = [...new Set(data.map((datas) => datas.fax))].map((fax) => ({
    text: fax,
    value: fax,
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
      title: "Class",
      dataIndex: "class",
      key: "class",
      filters: filterClass,
      onFilter: (value, record) => record.class === value,
    },
    {
      title: "Prod",
      dataIndex: "prod",
      key: "prod",
      filters: filterProd,
      onFilter: (value, record) => record.prod === value,
    },
    {
      title: "Fax",
      dataIndex: "fax",
      key: "fax",
      filters: filterFax,
      onFilter: (value, record) => record.prod === value,
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
            <Button type="primary">
              <FaEdit />
            </Button>
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
          </div>
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

export default TableMahasiswa;
