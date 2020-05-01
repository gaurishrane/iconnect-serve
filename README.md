# iConnect Node server 
```
npm i
```
## Change config.js
Change the setting in the utils/config.js

```
 dev: {
          port: 5555,
          baseUrl: '/iconnect-server/',
          dbUsername: 'gaurish',
          dbPassword: 'iConnectDBUser',
          mongoDB: 'test',
          jwtKey: '02z[8sdf}%d23'
      },
```
**__ Note: MongoDB is hosted on the cloud. So to connect to the database your need to send you ip address so that i can whitelist the ip and you will able to connect__ **
