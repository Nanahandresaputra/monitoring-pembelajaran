const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET KELAS ===============================

const getKelas = async (req, res, next) => {
  try {
    let kelas = await db.query(`select k.id, k.kelas, f.fakultas from kelas k join fakultas f on k.fakultas_id = f.id `);
    if (kelas.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "data", kelas.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD KELAS ===============================

const addKelas = async (req, res, next) => {
  const { kelas, fakultas_id } = req.body;
  try {
    await db.query(`insert into kelas (kelas, fakultas_id) values ('${kelas}', '${fakultas_id}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE KELAS ===============================

const updateKelas = async (req, res, next) => {
  let { kelas, fakultas_id } = req.body;
  const { id } = req.params;
  try {
    let kelasData = await db.query(`select * from kelas where kelas.id = ${id}`);
    if (kelasData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update kelas set kelas = '${kelas}',  fakultas_id='${fakultas_id}' where kelas.id = ${id}`);
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

//=================================== DELETE KELAS ===============================

const deleteKelas = async (req, res, next) => {
  const { id } = req.params;
  try {
    let kelas = await db.query(`select * from kelas where kelas.id = ${id}`);
    if (kelas.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from kelas where kelas.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { getKelas, addKelas, updateKelas, deleteKelas };
