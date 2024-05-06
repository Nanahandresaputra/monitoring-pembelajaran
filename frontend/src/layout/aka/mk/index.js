import React, { useState } from "react";
import { Button } from "antd";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import TableFax from "../../../components/aka/fax/table-fax";
import TableMK from "../../../components/aka/mk/table-mk";

const MK = () => {
  const [searchData, setSearchData] = useState("");

  const lorem = [
    "Lorem ipsum dolor",
    "sit amet",
    "consectetur adip",
    "condimentum erat nec",
    "consectetur erat",
    "Vestibulum ante ipsum primis in faucibus",
    "Fusce sit amet rutrum augue",
    "interdum",
  ];

  const data = lorem.map((datas, index) => ({
    key: index,
    lorem: datas,
  }));

  let searchFilter = searchData
    ? data.filter((datas) =>
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

      <TableMK data={searchFilter} />
    </CardContainer>
  );
};

export default MK;
