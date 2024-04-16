const jwt = require("jsonwebtoken");
const db = require("../db/db_connection.js");
const config = require("../config/config.js");
const errorCode = require("./errorCode.js");

function getToken(req) {
  let token = req.query.accessToken ? req.query.accessToken : null;
  return token && token.length ? token : null;
}

function decodeToken() {
  return async function (req, res, next) {
    try {
      let token = getToken(req);

      if (`${req.url}`.includes("login") || `${req.url}`.includes("handshake")) return next();
      if (!token) {
        return res.json(errorCode(9004));
      }

      req.user = jwt.verify(token, config.secretKey);

      let user = await db.query(`select * from userAdmin where userAdmin.token = '${token}'`);

      if (!user) {
        res.json(errorCode(9007));
      }
    } catch (err) {
      let token = getToken(req);
      if ((err && err.name === "JsonWebTokenError") || (err && err.name === "TokenExpiredError")) {
        await db.query(`update userAdmin set token = null where userAdmin.token = '${token}'`);
        return res.json(errorCode(9007));
      } else {
        return res.json(errorCode(9002));
      }
    }

    return next();
  };
}

module.exports = {
  decodeToken,
};
