import React, { useState } from "react";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";
import { Button } from "antd";
import TableMahasiswa from "../../../components/mahasiswa/list-mahasiswa/table-mahasiswa";

const ListMahasiswa = () => {
  const [searchData, setSearchData] = useState("");

  const data = new Array(25).fill().map((_, index) => ({
    code: Math.floor(Math.random(index) * 98765),
    nama: `nama ${index}`,
    class: `TEST ${Math.floor(Math.random(index) * 4)}`,
    prod: "Prod Test Information",
    fax: "Test",
    status: Math.floor(Math.random(index) * 2),
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  return (
    <CardContainer>
      <div className="flex justify-between items-center">
        <InputSearch placeholder="cari data" setState={setSearchData} />
        <Button type="primary" className="font-medium">
          + Tambah
        </Button>
      </div>

      <TableMahasiswa data={searchFilter} />
    </CardContainer>
  );
};

export default ListMahasiswa;
