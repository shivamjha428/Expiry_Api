const userModel = require("./schema");
const bcrypt = require("bcryptjs");
const generateHash= (text) => {
    const salt = 10;
    return new Promise((resolve, reject)=> {
         bcrypt.genSalt(salt).then((hashSalt)=> {
            bcrypt.hash(text, hashSalt).then((textHash)=> {
                resolve(textHash);
            })
        })
    });
}
module.exports = {generateHash};