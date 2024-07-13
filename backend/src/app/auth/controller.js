const db = require("../../db/db_connection.js");
const jwt = require("jsonwebtoken");
const config = require("../../config/config.js");
const { maskingPwd } = require("../../utils/encrypt.js");
const errorCode = require("../../middleware/errorCode.js");

const login = async (req, res, next) => {
  let payload = req.body;

  try {
    let user = await db.query(`SELECT * FROM userAdmin WHERE userAdmin.username = '${payload.username}'`);

    if (!user.rows.length || maskingPwd(payload.password) !== user.rows[0].password) {
      throw new Error("9005"); // Invalid username or password
    }

    if (user.rows[0].token !== null) {
      throw new Error("9006"); // User already has a token
    }

    let signed = jwt.sign(
      { id: user.rows[0].id, admin: user.rows[0].nama },
      config.secretKey
      // Optionally, you can set expiresIn for the token here
      // { expiresIn: '1h' }
    );

    await db.query(`UPDATE userAdmin SET token = '${signed}' WHERE userAdmin.username = '${payload.username}'`);

    return res.json(errorCode(1000, "token", signed)); // Successful login with token
  } catch (err) {
    if (err.message === "9005") {
      return res.json(errorCode(9005)); // Invalid username or password
    }

    if (err.message === "9006") {
      return res.json(errorCode(9006)); // User already has a token
    }

    // Handle other errors
    console.error("Error during login:", err);
    return res.json(errorCode(9002)); // General server error
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
