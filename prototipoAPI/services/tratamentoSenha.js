var CryptoJS = require("crypto-js");

module.exports = {
    encriptar: (text) => {
        return CryptoJS.AES.encrypt(text, 'chave secreta').toString();
    },

    descriptar: (text) => {
        var bytes = CryptoJS.AES.decrypt(text, 'chave secreta');
        return bytes.toString(CryptoJS.enc.Utf8)
    }
}