import { Button, Table } from "antd";
import React, { useState } from "react";

const TableProd = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState("");

  const filterFax = [...new Set(data.map((datas) => datas.fax))].map((fax) => ({
    text: fax,
    value: fax,
  }));

  const columns = [
    {
      title: "Prod",
      dataIndex: "prod",
      key: "prod",
    },
    {
      title: "Fax",
      dataIndex: "fax",
      key: "fax",
      filters: filterFax,
      onFilter: (value, record) => record.fax === value,
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

export default TableProd;
