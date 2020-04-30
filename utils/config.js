const baseSetting = {
    environment: 'dev',
    connectionName: 'iconnectServer',
    environments: {
        dev: {
            port: 5555,
            baseUrl: '/iconnect-server/',
            dbUsername: 'gaurish',
            dbPassword: 'iConnectDBUser',
            mongoDB: 'test',
            jwtKey: '02z[8sdf}%d23'
        },
        production: {
            port: process.env.PORT,
            baseUrl: '/iconnect-server/',

        }
    }
};

module.exports = baseSetting;