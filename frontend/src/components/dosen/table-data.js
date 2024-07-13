import { Button, Popconfirm, Table, Tag } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableDataDsn = ({ data, onOpen, getDosenDetail, setGetId, handleDelete }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const columns = [
    {
      title: "Nidn",
      dataIndex: "nidn",
      key: "nidn",
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
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    //   width: 200,
    //   render: (_, record) => {
    //     return (
    //       <div className="flex items-center space-x-5">
    //         <Button type="primary" onClick={() => onOpen(record.key)}>
    //           <FaEdit />
    //         </Button>
    //         <Popconfirm title="Hapus data" description="Apakah yakin ingin menghapus data ini?" onConfirm={() => handleDelete(record.key)} onCancel={() => console.log("cancel")} okText="Ya" cancelText="Tidak">
    //           <Button>
    //             <FaRegTrashAlt />
    //           </Button>
    //         </Popconfirm>
    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowClassName={(record, index) => record.key === selectedRow && "bg-[#fafafa]"}
      onRow={(record) => {
        return {
          onClick: () => {
            getDosenDetail(record.key);
            setGetId(record.key);
            setSelectedRow(record.key);
          },
        };
      }}
    />
  );
};

export default TableDataDsn;
