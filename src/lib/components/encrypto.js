var CryptoJS = require("crypto-js");

const encrypto = (arg) => {
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(arg),
    "my-secret-key@123"
  ).toString();
  return ciphertext;
};

export default encrypto;
