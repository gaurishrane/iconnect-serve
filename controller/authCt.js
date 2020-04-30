const jwt = require('jsonwebtoken');
const config = require('../utils/config');
/**
 * Auth check controller
 * Author: Gaurish Rane
 * Created at: 30 April 2020
 */
exports.checkAuth = async(req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, config.environments[config.environment].jwtKey, function(err, data) {
                if (err) {
                    res.send({
                        status: false,
                        reason: 'Access Denied.',
                    });
                } else {
                    res.id = data.result;
                    next();
                }
            });
        }

    } catch (e) {
        res.send({
            status: false,
            reason: e.toString(),
        });
    }
};