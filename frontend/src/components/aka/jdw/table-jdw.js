import { Button, Table, Tag } from "antd";
import React, { useState } from "react";

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
      render: (_, record) => {
        return (
          <Button type="primary" size="small">
            Edit
          </Button>
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
