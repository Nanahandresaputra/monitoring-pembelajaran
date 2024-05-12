const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET DOSEN ===============================

const getDosen = async (req, res, next) => {
  try {
    let dosen = await db.query(`select * from dosen`);
    if (dosen.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "data", dosen.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== GET DOSEN DETAIL ===============================

const getDosenDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    let dosenData = await db.query(`select nama, nidn, status from dosen d where d.id = ${id}`);
    let dosenJadwal = await db.query(`select k.kelas, mk.matkul, jd.jam, jd.hari 
    from jadwal_dosen jd join dosen d on jd.dosen_id = d.id join matkul mk on jd.matkul_id = mk.id
    join kelas k on jd.kelas_id = k.id where d.id = ${id}`);
    if (dosenData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      let detailDosen = {
        nama: dosenData.rows[0].nama,
        nidn: dosenData.rows[0].nidn,
        status: dosenData.rows[0].status,
        jadwal: dosenJadwal.rows,
      };

      return res.json(errorCode(1000, "data", detailDosen));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD DOSEN ===============================

const addDosen = async (req, res, next) => {
  const { nama, nidn, status } = req.body;
  try {
    await db.query(`insert into dosen (nama, nidn, status) values ('${nama}', '${nidn}', '${status}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE DOSEN ===============================

const updateDosen = async (req, res, next) => {
  let { nama, nidn, status } = req.body;
  const { id } = req.params;
  try {
    let dosen = await db.query(`select * from dosen where dosen.id = ${id}`);
    console.log(dosen.rows);
    if (dosen.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update dosen set nama = '${nama}', nidn = '${nidn}', status = '${status}' where dosen.id = ${id}`);
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

//=================================== DELETE DOSEN ===============================

const deleteDosen = async (req, res, next) => {
  const { id } = req.params;
  try {
    let dosen = await db.query(`select * from dosen where dosen.id = ${id}`);
    if (dosen.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from dosen where dosen.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { getDosen, addDosen, updateDosen, deleteDosen, getDosenDetail };
