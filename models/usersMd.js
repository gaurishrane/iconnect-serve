const mongoDB = require('mongodb');
const connectionName = 'users';

/**
 * User model
 * Author: Gaurish Rane
 * Created at: 30 April 2020
 */
exports.getUsers = async(connObj, payLoad) => {
    return new Promise(async(resolve, reject) => {
        try {

            let resultData = await connObj.collection(connectionName).find({
                _id: new mongoDB.ObjectId(payLoad['id'])
            }).next();

            if (resultData == null)
                throw ('No details found.');

            resolve(resultData);
        } catch (e) {
            reject(e.toString());
        }
    });
};

exports.createUsers = async(connObj, payLoad) => {
    return new Promise(async(resolve, reject) => {
        try {

            var userInserted = await connObj.collection(connectionName).insertOne({
                name: payLoad['name'],
                email: payLoad['email'],
                mobile: payLoad['mobile'],
                username: payLoad['username'],
                password: payLoad['password']
            });
            resolve(userInserted);
        } catch (e) {
            reject(e.toString());
        }
    });
};

exports.checkUserAuth = async(connObj, payLoad) => {
    return new Promise(async(resolve, reject) => {
        try {

            let resultData = await connObj.collection(connectionName).find({
                username: payLoad['username'],
                password: payLoad['password']
            }).next();

            if (resultData == null)
                throw ('Invalid username or password');

            resolve(resultData['_id']);
        } catch (e) {
            reject(e.toString());
        }
    });
};