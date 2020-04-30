const config = require('../utils/config');
const mongoDB = require('mongodb');
const mongoClient = mongoDB.MongoClient;

exports.connect = async() => {

    var connectionString = `mongodb+srv://${config.environments[config.environment].dbUsername}:${config.environments[config.environment].dbPassword}@cluster0-nkx5o.mongodb.net/${config.environments[config.environment].mongoDB}?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`;

    return new Promise((resolve, reject) => {
        mongoClient.connect(connectionString).then(connect => {
            console.log('connected');
            resolve(connect.db());
        }).catch(error => {
            reject(error);
        });
    });
};