import React, { useState } from "react";
import { Button } from "antd";
import TableAdmin from "../../components/admin/table-admin";
import CardContainer from "../../components/card-container";
import InputSearch from "../../components/input-search";

const DataAdmin = () => {
  const [searchData, setSearchData] = useState("");

  const data = new Array(25).fill().map((_, index) => ({
    nama: `nama ${index}`,
    username: `username${Math.floor(Math.random(index) * 23459876)}`,
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase()) || `${datas.username}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  return (
    <CardContainer>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium">
          + Tambah
        </Button>
      </div>

      <TableAdmin data={searchFilter} />
    </CardContainer>
  );
};

export default DataAdmin;
