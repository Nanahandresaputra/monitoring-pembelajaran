const db = require("../../db/db_connection.js");
const jwt = require("jsonwebtoken");
const config = require("../../config/config.js");
const { maskingPwd } = require("../../utils/encrypt.js");
const errorCode = require("../../middleware/errorCode.js");

const login = async (req, res, next) => {
  let payload = req.body;
  try {
    let user = await db.query(`select * from userAdmin where userAdmin.username ='${payload.username}'`);
    if (!user.rows.length || maskingPwd(payload.password) != user.rows[0].password) {
      throw new Error(9005);
    }
    if (user.rows[0].token != null) {
      throw new Error(9006);
    } else {
      let signed = jwt.sign({ user: user.rows[0].id }, config.secretKey, {
        expiresIn: 900,
      });
      await db.query(`update userAdmin set token = '${signed}' where userAdmin.username = '${payload.username}'`);

      return res.json(errorCode(1000, "token", signed));
    }
  } catch (err) {
    if (err && err.name === "error") {
      res.json(errorCode(9003));
    }
    if (err.message === "9006") {
      return res.json(errorCode(9006));
    }
    if (err.message === "9005") {
      return res.json(errorCode(9005));
    } else {
      res.json(errorCode(9002));
    }

    next(err);
  }
};

const logout = async (req, res, next) => {
  let { accessToken } = req.query;
  try {
    await db.query(`update userAdmin set token = null where userAdmin.token = '${accessToken}'`);
    return res.json(errorCode(1000));
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { login, logout };
