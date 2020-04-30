const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

const baseSetting = require('./utils/config');
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

/** Test Labs
 * Just to test new concept
 */
app.get(baseUrl + 'testLabs', async(req, res, next) => {
    res.send({ status: true, message: 'Test Labs Controller.' });
});

app.use('/', (req, res, next) => {
    res.send(404);
});

app.listen(baseSetting.environments[baseSetting.environment].port);