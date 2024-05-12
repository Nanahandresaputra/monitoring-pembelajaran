const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET JADWAL DOSEN ===============================

const getJadwalDosen = async (req, res, next) => {
  try {
    let jadwalDosen = await db.query(`select jd.id, d.nama as dosen, mt.matkul, jd.jam, jd.hari from jadwal_dosen jd 
    inner join dosen d on (jd.dosen_id = d.id) inner join matkul mt on (jd.matkul_id = mt.id)`);
    if (jadwalDosen.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "data", jadwalDosen.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD JADWAL DOSEN ===============================

const addjadwalDosen = async (req, res, next) => {
  const { dosen_id, matkul_id, jam, hari } = req.body;
  try {
    await db.query(`insert into jadwal_dosen (dosen_id, matkul_id, jam, hari) values ('${dosen_id}', '${matkul_id}', '${jam}', '${hari}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE JADWAL DOSEN ===============================

const updatejadwalDosen = async (req, res, next) => {
  let { dosen_id, matkul_id, jam, hari } = req.body;
  const { id } = req.params;
  try {
    let jadwalDosenData = await db.query(`select * from jadwal_dosen where jadwal_dosen.id = ${id}`);
    if (jadwalDosenData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update jadwalDosen set dosen_id = '${dosen_id}', matkul_id = '${matkul_id}', jam = '${jam}', hari = '${hari}' where jadwal_dosen.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== DELETE JADWAL DOSEN ===============================

const deletejadwalDosen = async (req, res, next) => {
  const { id } = req.params;
  try {
    let jadwalDosen = await db.query(`select * from jadwal_dosen where jadwal_dosen.id = ${id}`);
    if (jadwalDosen.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from jadwal_dosen where jadwal_dosen.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { getJadwalDosen, addjadwalDosen, updatejadwalDosen, deletejadwalDosen };
