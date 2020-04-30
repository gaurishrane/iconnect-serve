const usersModel = require('../models/usersMd');

exports.getUserRecords = async(req, res, next) => {
    try {

        res.send({
            status: true,
            data: [{

            }],
            message: 'Success',
        });
    } catch (e) {

        res.send({
            status: false,
            data: [],
            reason: e.toString(),
        });
    }
};

exports.createRegistration = async(req, res, next) => {
    try {
        let regForm = req.body;

        var user = await usersModel.createUsers(regForm);


        res.send({
            status: true,
            data: [{}],
            input: regForm,
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

        if (loginForm.username == 'gaurish' && loginForm.password == '123') {
            var response = {
                status: true,
                data: [{}],
                input: loginForm,
                message: 'Welcome user.',
            };
        } else {
            var response = {
                status: false,
                data: [{}],
                reason: 'Invalid login or password',
            };
        }

        res.send(response);
    } catch (e) {

        res.send({
            status: false,
            data: [],
            reason: e.toString(),
        });
    }
};