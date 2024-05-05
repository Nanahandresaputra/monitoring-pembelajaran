import React, { useState } from "react";
import { Button, Collapse, Divider } from "antd";
import TableKelas from "../../../components/mahasiswa/kelas/table-kelas";
import TableKelasJadwal from "./../../../components/mahasiswa/kelas/table-kelas-jadwal";
import TablekelasMahasiswa from "./../../../components/mahasiswa/kelas/table-kelas-mahasiswa";
import CardContainer from "../../../components/card-container";
import InputSearch from "../../../components/input-search";

const Kelas = () => {
  const [searchData, setSearchData] = useState("");

  const dataClass = new Array(25).fill().map((_, index) => ({
    class: `Test ${index}`,
    fax: "Test",
  }));

  let searchFilter = searchData ? dataClass.filter((datas) => `${datas.nama}`.toUpperCase().includes(`${searchData}`.toUpperCase())) : dataClass;

  const collapseItems = [
    {
      key: "1",
      label: (
        <Divider>
          <p className="font-normal">Datas Data1</p>
        </Divider>
      ),
      children: <TablekelasMahasiswa />,
    },
    {
      key: "2",
      label: (
        <Divider>
          <p className="font-normal">Datas Data 2</p>
        </Divider>
      ),
      children: <TableKelasJadwal />,
    },
  ];

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

          <TableKelas data={searchFilter} />
        </CardContainer>
      </div>
      <div className="col-span-3">
        <CardContainer>
          <h3 className="font-medium text-lg">Detail Data Class TEST 1A</h3>

          <Collapse defaultActiveKey="1" accordion ghost items={collapseItems} size="small" />
        </CardContainer>
      </div>
    </section>
  );
};

export default Kelas;
