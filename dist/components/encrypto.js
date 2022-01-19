"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.json.stringify.js");

var CryptoJS = require("crypto-js");

const encrypto = arg => {
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(arg), "my-secret-key@123").toString();
  return ciphertext;
};

var _default = encrypto;
exports.default = _default;