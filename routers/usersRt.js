const express = require('express');
const authController = require('../controller/authCt');
const usersController = require('../controller/usersCt');
const users = express.Router();

/**
 * User Router
 * Author: Gaurish Rane
 * Created at: 30 April 2020
 */

users.get('/userDetails', authController.checkAuth, usersController.getUserDetails);
users.post('/registration', usersController.createRegistration);
users.post('/login', usersController.checkLogin);

module.exports = users;