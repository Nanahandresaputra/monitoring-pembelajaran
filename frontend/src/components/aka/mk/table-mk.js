import { Button, Table } from "antd";
import React, { useState } from "react";

const TableMK = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const columns = [
    {
      title: "Lorem Mk",
      dataIndex: "lorem",
      key: "lorem",
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

export default TableMK;
