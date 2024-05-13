import { Button, Popconfirm, Table, Tag } from "antd";
import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TableJdw = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const filterTest = [...new Set(data.map((datas) => datas.test))].map(
    (test) => ({ text: test, value: test })
  );
  const filterDay = [...new Set(data.map((datas) => datas.day))].map((day) => ({
    text: day,
    value: day,
  }));

  const columns = [
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Lorem",
      dataIndex: "lorem",
      key: "lorem",
    },
    {
      title: "Test",
      dataIndex: "test",
      key: "test",
      filters: filterTest,
      onFilter: (value, record) => record.test === value,
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
      filters: filterDay,
      onFilter: (value, record) => record.day === value,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
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

export default TableJdw;
