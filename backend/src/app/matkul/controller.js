const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

//=================================== GET MATKUL ===============================

const getMatkul = async (req, res, next) => {
  try {
    let matkul = await db.query(`select * from matkul`);
    if (matkul.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "data", matkul.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD MATKUL ===============================

const addMatkul = async (req, res, next) => {
  const { matkul } = req.body;
  try {
    await db.query(`insert into matkul (matkul) values ('${matkul}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    console.log(err);
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE MATKUL ===============================

const updateMatkul = async (req, res, next) => {
  let { matkul } = req.body;
  const { id } = req.params;
  try {
    let matkulData = await db.query(`select * from matkul where matkul.id = ${id}`);
    if (matkulData.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`update matkul set matkul = '${matkul}' where matkul.id = ${id}`);
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

//=================================== DELETE MATKUL ===============================

const deleteMatkul = async (req, res, next) => {
  const { id } = req.params;
  try {
    let matkul = await db.query(`select * from matkul where matkul.id = ${id}`);
    if (matkul.rowCount < 1) {
      return res.json(errorCode(9001));
    } else {
      await db.query(`delete from matkul where matkul.id = ${id}`);
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { getMatkul, addMatkul, updateMatkul, deleteMatkul };
