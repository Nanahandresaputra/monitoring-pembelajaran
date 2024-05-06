import React, { useState } from "react";
import { Button } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableProd from "../../../components/aka/prod";

const Prod = () => {
  const [searchData, setSearchData] = useState("");

  const dataFax = [
    "Test",
    "Fake",
    "Pending",
    "Poll",
    "Hongkong",
    "Near",
    "Sein",
  ];

  const data = new Array(12).fill().map((_, index) => ({
    key: index,
    prod: `Production data ${index}`,
    fax: dataFax[Math.floor(Math.random(index) * dataFax.length)],
  }));

  let searchFilter = searchData
    ? data.filter((datas) =>
        `${datas.prod}`.toUpperCase().includes(`${searchData}`.toUpperCase())
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

      <TableProd data={searchFilter} />
    </CardContainer>
  );
};

export default Prod;
