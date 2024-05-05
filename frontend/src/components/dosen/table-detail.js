import { Divider, Table } from "antd";
import React from "react";

const TableDetail = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const lorem = ["Lorem ipsum dolor", "sit amet", "consectetur adip", "condimentum erat nec", "consectetur erat", "Vestibulum ante ipsum primis in faucibus"];

  const test = ["Test 1A", "Test 2A", "Test 3B", "Test 4A", "Test 5A"];

  const data = new Array(12).fill().map((_, index) => ({
    key: index,
    test: test[Math.floor(Math.random(index) * test.length)],
    lorem: lorem[Math.floor(Math.random(index) * lorem.length)],
    day: days[Math.floor(Math.random(index) * days.length)],
    time: "09.00 - 10.00",
  }));

  const columns = [
    {
      title: "Test",
      dataIndex: "test",
      key: "test",
    },
    {
      title: "Lorem",
      dataIndex: "lorem",
      key: "lorem",
    },
    {
      title: "Day",
      dataIndex: "day",
      key: "day",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];
  return (
    <>
      <Divider>
        <p className="font-normal">Datas Data1</p>
      </Divider>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </>
  );
};

export default TableDetail;
