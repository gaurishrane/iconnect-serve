const express = require('express');
const usersController = require('../controller/usersCt');
const users = express.Router();

users.get('/getUsersList', usersController.getUserRecords);
users.post('/registration', usersController.createRegistration);
users.post('/login', usersController.checkLogin);

module.exports = users;