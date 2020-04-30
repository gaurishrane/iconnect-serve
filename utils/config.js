const baseSetting = {
    environment: 'dev',
    connectionName: 'iconnectServer',
    host: 'localhost',
    mongoDB: 'demoapp',
    dbPort: 27017,
    environments: {
        dev: {
            port: 5555,
            baseUrl: '/iconnect-server/'
        },
        production: {
            port: process.env.PORT,
            baseUrl: '/iconnect-server/'
        }
    }
};

module.exports = baseSetting;