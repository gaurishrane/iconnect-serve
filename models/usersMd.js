const connectionObj = require('../utils/connection');

exports.getUsers = async(username) => {
    return new Promise(async(resolve, reject) => {
        try {

            let con = await connectionObj.connect();
            resolve([]);
        } catch (e) {
            // console.log(JSON.stringify(e));
            // console.log(e.toString());
            reject(e.toString());
        }
    });
};

exports.createUsers = async(userDetails) => {
    return new Promise(async(resolve, reject) => {
        try {

            // let con = await connectionObj.connect();

            resolve([]);
        } catch (e) {
            // console.log(JSON.stringify(e));
            // console.log(e.toString());
            reject(e.toString());
        }
    });
};