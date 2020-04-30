const databaseSettings = require('../data/configFile.json');
const config = require('../utils/config');
const mongoose = require('mongoose');

exports.connect = async() => {
    var connectionData = databaseSettings[config.connectionName]
        // var connectionString = `mongodb://${config.host}:${config.dbPort}/${config.mongoDB}`;
    var connectionString = `"mongodb+srv://cluster0-nkx5o.mongodb.net/test" --username admin`

    return await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};