import { Button, Table } from "antd";
import React, { useState } from "react";

const TableFax = ({ data }) => {
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

export default TableFax;
