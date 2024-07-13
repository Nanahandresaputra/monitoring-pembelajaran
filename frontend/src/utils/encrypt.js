import { config } from "../config";
import CryptoJS from "crypto-js";

function toHex(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

export function maskingPwd(password) {
  if (password !== "") {
    let key = config.secretKey;
    key = toHex(key);
    key = CryptoJS.enc.Hex.parse(key);

    let encrypted = CryptoJS.TripleDES.decrypt(password, key, {
      mode: CryptoJS.mode.ECB,
    });
    return encrypted.toString();
  }
}

export function unmaskPwd(password) {
  if (password !== "") {
    let key = config.secretKey; // Ensure config.secretKey is available
    key = toHex(key); // Convert key to hexadecimal if necessary
    key = CryptoJS.enc.Hex.parse(key); // Parse key into WordArray

    // Convert base64-encoded maskedPassword to WordArray
    let ciphertext = CryptoJS.enc.Base64.parse(password);

    // Decrypt ciphertext
    let decrypted = CryptoJS.TripleDES.decrypt(
      {
        ciphertext: ciphertext,
      },
      key,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7, // Ensure padding matches the one used during encryption
      }
    );

    // Convert decrypted WordArray to plaintext (password)
    let plaintext = decrypted.toString(CryptoJS.enc.Utf8);

    return plaintext; // Return the decrypted plaintext (password)
  } else {
    return ""; // Return empty string if maskedPassword is empty
  }
}
