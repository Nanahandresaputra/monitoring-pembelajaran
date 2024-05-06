import React, { useState } from "react";
import { Button } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableJdw from "../../../components/aka/jdw/table-jdw";

const Jdw = () => {
  const [searchData, setSearchData] = useState("");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const lorem = [
    "Lorem ipsum dolor",
    "sit amet",
    "consectetur adip",
    "condimentum erat nec",
    "consectetur erat",
    "Vestibulum ante ipsum primis in faucibus",
  ];

  const test = ["Test 1A", "Test 2A", "Test 3B", "Test 4A", "Test 5A"];

  const data = new Array(12).fill().map((_, index) => ({
    key: index,
    nama: `nama samar ${index}`,
    test: test[Math.floor(Math.random(index) * test.length)],
    lorem: lorem[Math.floor(Math.random(index) * lorem.length)],
    day: days[Math.floor(Math.random(index) * days.length)],
    time: "09.00 - 10.00",
  }));

  let searchFilter = searchData
    ? data.filter(
        (datas) =>
          `${datas.nama}`
            .toUpperCase()
            .includes(`${searchData}`.toUpperCase()) ||
          `${datas.lorem}`.toUpperCase().includes(`${searchData}`.toUpperCase())
      )
    : data;

  return (
    <CardContainer>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium">
          + Tambah
        </Button>
      </div>

      <TableJdw data={searchFilter} />
    </CardContainer>
  );
};

export default Jdw;
