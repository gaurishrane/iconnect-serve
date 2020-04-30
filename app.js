const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

const baseSetting = require('./utils/config');
// const connectionObj = require('./utils/connection');
// const sql = require('mssql');
// const squel = require('squel');

/** Routers list */
const usersRouter = require('./routers/usersRt');

const baseUrl = baseSetting.environments[baseSetting.environment].baseUrl;
app.use(cors());

/** Body parser */
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));


/** Base controller */
app.use(baseUrl + '*', (req, res, next) => {
    next();
});


app.use(baseUrl + 'users', usersRouter);

/** Login Test */
app.get(baseUrl + 'userTest', async(req, res, next) => {
    res.send('not found asdasd');

    // let con = await connectionObj.connect();
    // con.request()
    // .input('P_UserId', sql.VarChar(20), 'LEE')
    //     .input('P_UserPWD', sql.VarChar(50), '999')
    //     .execute('usp_SysUserMast_Fetch')
    //     .then(data => {
    //         let result = data['recordset'][0];
    //         res.send({ result });
    //     }).catch(error => {
    //         res.send('Error while getting the data.');
    //     });

    // con.query('exec usp_SysUserMast_Fetch @P_UserId=\'LEE\' ,@P_UserPWD =\'999\'').then(data => {
    //     res.send({ data });
    // }).catch(e => {
    //     res.send({ e });
    // })

});

app.use('/', (req, res, next) => {
    res.send('not found');
});


// function storeParm(pnam, parms) {
//     let query = 'exec ';
//     query += pnam + ' ';
//     parms.forEach((v, k) => {
//         query += '@'+v['name']+'='+
//     });
// }

app.listen(baseSetting.environments[baseSetting.environment].port);