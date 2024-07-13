import { Divider, Table } from "antd";
const TableDetail = ({ data }) => {
  const dataSource = data?.map((datas, index) => ({
    key: index,
    kelas: datas.kelas,
    matkul: datas.matkul,
    hari: datas.hari,
    jam: datas.jam,
  }));

  const columns = [
    {
      title: "Kelas",
      dataIndex: "kelas",
      key: "kelas",
    },
    {
      title: "Mata Kuliah",
      dataIndex: "matkul",
      key: "matkul",
    },
    {
      title: "Hari",
      dataIndex: "hari",
      key: "hari",
    },
    {
      title: "Jam",
      dataIndex: "jam",
      key: "jam",
    },
  ];
  return (
    <>
      <Divider>
        <p className="font-normal">Jadwal</p>
      </Divider>
      <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 8 }} />
    </>
  );
};

export default TableDetail;
