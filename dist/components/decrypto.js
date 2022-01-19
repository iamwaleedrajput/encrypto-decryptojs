"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.to-string.js");

var CryptoJS = require("crypto-js");

const decrypto = arg => {
  var bytes = CryptoJS.AES.decrypt(arg, "my-secret-key@123");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

var _default = decrypto;
exports.default = _default;