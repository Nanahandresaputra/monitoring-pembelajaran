import { Table } from "antd";
import React from "react";

const TableKelasJadwal = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const lorem = ["Lorem ipsum dolor", "sit amet", "consectetur adip", "condimentum erat nec", "consectetur erat", "Vestibulum ante ipsum primis in faucibus"];
  let dataJdwl = new Array(12).fill().map((_, index) => ({
    key: index,
    test: "TEST 1A",
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
  return <Table columns={columns} dataSource={dataJdwl} pagination={{ pageSize: 7 }} />;
};

export default TableKelasJadwal;
