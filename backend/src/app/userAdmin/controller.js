const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode.js");
const { maskingPwd } = require("../../utils/encrypt.js");

//=================================== GET USER ===============================
const getUsers = async (req, res, next) => {
  try {
    let users = await db.query(`select * from useradmin`);
    if (users.rows.length < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000, "users", users.rows));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

//=================================== ADD USER ===============================
const addUser = async (req, res, next) => {
  const { nama, username, password } = req.body;
  try {
    await db.query(`insert into useradmin (nama, username, password) values ('${nama}', '${username}', '${maskingPwd(password)}')`);
    return res.json(errorCode(1000));
  } catch (err) {
    if (err && err.name === "error") {
      return res.json(errorCode(9003));
    } else {
      return res.json(errorCode(9002));
    }
  }
};

//=================================== UPDATE USER ===============================
const updateUser = async (req, res, next) => {
  let { nama, username, password } = req.body;
  const { id } = req.params;
  try {
    let users = await db.query(`update useradmin set nama = '${nama}', username = '${username}', password = '${maskingPwd(password)}' where useradmin.id = ${id}`);
    if (users.rows.length < 1) {
      return res.json(errorCode(9001));
    } else {
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

//=================================== DELETE USER ===============================
const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    let users = await db.query(`delete from useradmin where useradmin.id = ${id}`);

    if (users.rows.length < 1) {
      return res.json(errorCode(9001));
    } else {
      return res.json(errorCode(1000));
    }
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { addUser, getUsers, deleteUser, updateUser };
