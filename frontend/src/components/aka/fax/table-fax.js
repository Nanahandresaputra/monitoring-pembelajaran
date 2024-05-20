import { Button, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableFax = ({ data, onOpenUpdate }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const columns = [
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
            <Button type="primary" onClick={onOpenUpdate}>
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
      dataSource={data}
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

export default TableFax;
