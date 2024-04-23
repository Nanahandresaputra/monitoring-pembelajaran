const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET PRODI ===============================

const getProdi = async (req, res, next) => {
  try {
    let prodi = await db.query(`select p.id, p.prodi, fk.fakultas from prodi p inner join fakultas fk on ( p.fakultas_id = fk.id)`);
    if (prodi.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "data", prodi.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD PRODI ===============================

const addProdi = async (req, res, next) => {
  const { prodi, fakultas_id } = req.body;
  try {
    await db.query(`insert into prodi (prodi, fakultas_id) values ('${prodi}', '${fakultas_id}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE PRODI ===============================

const updateProdi = async (req, res, next) => {
  let { prodi, fakultas_id } = req.body;
  const { id } = req.params;
  try {
    let prodiData = await db.query(`select * from prodi where prodi.id = ${id}`);
    if (prodiData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update prodi set prodi = '${prodi}', fakultas_id = ${fakultas_id} where prodi.id = ${id}`);
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

//=================================== DELETE PRODI ===============================

const deleteProdi = async (req, res, next) => {
  const { id } = req.params;
  try {
    let prodi = await db.query(`select * from prodi where prodi.id = ${id}`);
    if (prodi.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from prodi where prodi.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { getProdi, addProdi, updateProdi, deleteProdi };
