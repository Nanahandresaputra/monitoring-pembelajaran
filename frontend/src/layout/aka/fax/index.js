import React, { useState } from "react";
import { Button } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableFax from "../../../components/aka/fax/table-fax";

const Faxu = () => {
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

  const data = dataFax.map((datas, index) => ({
    key: index,
    fax: datas,
  }));

  let searchFilter = searchData
    ? data.filter((datas) =>
        `${datas.fax}`.toUpperCase().includes(`${searchData}`.toUpperCase())
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

      <TableFax data={searchFilter} />
    </CardContainer>
  );
};

export default Faxu;
