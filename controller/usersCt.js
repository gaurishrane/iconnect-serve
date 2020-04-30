const connectionObj = require('../utils/connection');
const config = require('../utils/config');
const usersModel = require('../models/usersMd');
const jwt = require('jsonwebtoken');
/**
 * User controller
 * Author: Gaurish Rane
 * Created at: 30 April 2020
 */

exports.getUserDetails = async(req, res, next) => {
    try {

        let connObj = await connectionObj.connect();
        let result = await usersModel.getUsers(connObj, { id: res.id });

        res.send({
            status: true,
            data: result,
            message: '',
        });

    } catch (e) {
        res.send({
            status: false,
            reason: e.toString(),
        });
    }
};

exports.createRegistration = async(req, res, next) => {
    try {
        let regForm = req.body;

        let connObj = await connectionObj.connect();
        let userRegistration = await usersModel.createUsers(connObj, regForm);

        res.send({
            status: true,
            data: userRegistration,
            message: 'Create successfully',
        });
    } catch (e) {

        res.send({
            status: false,
            data: [],
            reason: e.toString(),
        });
    }
};

exports.checkLogin = async(req, res, next) => {
    try {
        let loginForm = req.body;
        let connObj = await connectionObj.connect();

        let result = await usersModel.checkUserAuth(connObj, loginForm);
        let token = jwt.sign({ result }, config.environments[config.environment].jwtKey);

        res.send({
            status: true,
            token: token,
            message: 'Login successfully',
        });

    } catch (e) {

        res.send({
            status: false,
            data: [],
            reason: e.toString(),
        });
    }
};