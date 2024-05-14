import { Button, Popconfirm, Table } from "antd";
import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableKelas = ({ data, onOpen }) => {
  const dataSource = data.map((datas, index) => ({
    key: index,
    class: datas.class,
    fax: datas.fax,
  }));

  const columns = [
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Fax",
      dataIndex: "fax",
      key: "fax",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      render: (_, record) => {
        return (
          <div className="flex items-center space-x-5">
            <Button type="primary" onClick={onOpen}>
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
  return <Table columns={columns} dataSource={dataSource} />;
};

export default TableKelas;
