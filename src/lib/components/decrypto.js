var CryptoJS = require("crypto-js");

const decrypto = (arg) => {
  var bytes = CryptoJS.AES.decrypt(arg, "my-secret-key@123");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

export default decrypto;
