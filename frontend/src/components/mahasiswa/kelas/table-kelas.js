import { Button, Table } from "antd";
import React from "react";

const TableKelas = ({ data }) => {
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
      render: (_, record) => {
        return (
          <Button type="primary" size="small">
            Edit
          </Button>
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export default TableKelas;
