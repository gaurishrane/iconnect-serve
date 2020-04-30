const databaseSettings = require('../data/configFile.json');
const config = require('../utils/config');
const mongoose = require('mongoose');

exports.connect = async() => {
    var connectionData = databaseSettings[config.connectionName]
    var connectionString = `mongodb://${config.host}:${config.dbPort}/${config.mongoDB}`;

    return await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};