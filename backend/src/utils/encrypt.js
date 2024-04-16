const CryptoJS = require("crypto-js");
const config = require("../config/config.js");

function toHex(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

function maskingPwd(password) {
  if (password !== "") {
    let key = config.secretKey;
    key = toHex(key);
    key = CryptoJS.enc.Hex.parse(key);

    let encrypted = CryptoJS.TripleDES.encrypt(password, key, {
      mode: CryptoJS.mode.ECB,
    });
    return encrypted.toString();
  }
}

module.exports = { maskingPwd };
