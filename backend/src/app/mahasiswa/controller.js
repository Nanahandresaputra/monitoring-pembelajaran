const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET MAHASISWA ===============================

const getMahasiswa = async (req, res, next) => {
  try {
    let mahasiswa = await db.query(`select m.id, m.nama, m.nim, p.prodi, f.fakultas, k.kelas, m.status from mahasiswa 
    m join fakultas f on m.fakultas_id = f.id join prodi p on m.prodi_id = p.id join kelas k on m.kelas_id = k.id `);
    // if (mahasiswa.rowCount < 1) {
    //   return res.json(errorCode(9001));
    // } else {
    return res.json(errorCode(1000, "data", mahasiswa.rows));
    // }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD MAHASISWA ===============================

const addMahasiswa = async (req, res, next) => {
  const { nama, nim, prodi_id, fakultas_id, kelas_id, status } = req.body;
  try {
    await db.query(`insert into mahasiswa (nama, nim, prodi_id, fakultas_id, kelas_id, status) values ('${nama}', '${nim}', '${prodi_id}', '${fakultas_id}', '${kelas_id}', '${status}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE MAHASISWA ===============================

const updateMahasiswa = async (req, res, next) => {
  let { nama, nim, prodi_id, fakultas_id, kelas_id, status } = req.body;
  const { id } = req.params;
  try {
    let mahasiswaData = await db.query(`select * from mahasiswa where mahasiswa.id = ${id}`);
    if (mahasiswaData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update mahasiswa set nama = '${nama}',  nim = '${nim}',  prodi_id = '${prodi_id}', fakultas_id='${fakultas_id}',  kelas_id = '${kelas_id}',  status = '${status}' where mahasiswa.id = ${id}`);
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

//=================================== DELETE MAHASISWA ===============================

const deleteMahasiswa = async (req, res, next) => {
  const { id } = req.params;
  try {
    let mahasiswa = await db.query(`select * from mahasiswa where mahasiswa.id = ${id}`);
    if (mahasiswa.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from mahasiswa where mahasiswa.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    if (`${err.message}`.includes("violates foreign key constraint")) {
      return res.json(errorCode(9008));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

module.exports = { getMahasiswa, addMahasiswa, updateMahasiswa, deleteMahasiswa };
