import React, { useState } from "react";
import CardContainer from "./../../components/card-container/index";
import InputSearch from "../../components/input-search";
import { Button, Tag } from "antd";
import TableDataDsn from "../../components/dosen/table-data";
import TableDetail from "../../components/dosen/table-detail";

const Dosen = () => {
  const [searchData, setSearchData] = useState("");
  const data = new Array(25).fill().map((_, index) => ({
    code: Math.floor(Math.random(index) * 98765),
    nama: `nama ${index}`,
    status: Math.floor(Math.random(index) * 2),
  }));

  let searchFilter = searchData ? data.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : data;

  return (
    <section className="grid grid-cols-7 gap-x-4">
      <div className="col-span-4">
        <CardContainer>
          <div className="flex justify-between items-center">
            <InputSearch placeholder="cari data" setState={setSearchData} />
            <Button type="primary" className="font-medium">
              + Tambah
            </Button>
          </div>

          <TableDataDsn data={searchFilter} />
        </CardContainer>
      </div>
      <div className="col-span-3">
        <CardContainer>
          <h3 className="font-medium text-lg">Detail Data</h3>

          <div className="grid grid-cols-12 gap-y-2">
            <p className="col-span-3">Nama</p>
            <p className="col-span-1">:</p>
            <p className="col-span-8">Nama 0</p>
            <p className="col-span-3">Code</p>
            <p className="col-span-1">:</p>
            <p className="col-span-8">989898</p>
            <p className="col-span-3">Status</p>
            <p className="col-span-1">:</p>
            <div className="col-span-8">
              <Tag color="green">Aktif</Tag>
            </div>
          </div>

          <TableDetail />
        </CardContainer>
      </div>
    </section>
  );
};

export default Dosen;
