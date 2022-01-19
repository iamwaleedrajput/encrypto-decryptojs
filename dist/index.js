"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "decrypto", {
  enumerable: true,
  get: function get() {
    return _decrypto.default;
  }
});
Object.defineProperty(exports, "encrypto", {
  enumerable: true,
  get: function get() {
    return _encrypto.default;
  }
});

var _encrypto = _interopRequireDefault(require("./components/encrypto"));

var _decrypto = _interopRequireDefault(require("./components/decrypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }