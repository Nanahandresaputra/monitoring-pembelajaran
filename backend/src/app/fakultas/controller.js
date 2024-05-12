const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET FAKULTAS ===============================

const getFakultas = async (req, res, next) => {
  try {
    let fakultas = await db.query(`select * from fakultas`);
    if (fakultas.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "data", fakultas.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD FAKULTAS ===============================

const addFakultas = async (req, res, next) => {
  const { fakultas } = req.body;
  try {
    await db.query(`insert into fakultas (fakultas) values ('${fakultas}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE FAKULTAS ===============================

const updateFakultas = async (req, res, next) => {
  let { fakultas } = req.body;
  const { id } = req.params;
  try {
    let fakultasData = await db.query(`select * from fakultas where fakultas.id = ${id}`);
    if (fakultasData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update fakultas set fakultas = '${fakultas}' where fakultas.id = ${id}`);
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

//=================================== DELETE FAKULTAS ===============================

const deleteFakultas = async (req, res, next) => {
  const { id } = req.params;
  try {
    let fakultas = await db.query(`select * from fakultas where fakultas.id = ${id}`);
    if (fakultas.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from fakultas where fakultas.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { getFakultas, addFakultas, updateFakultas, deleteFakultas };
