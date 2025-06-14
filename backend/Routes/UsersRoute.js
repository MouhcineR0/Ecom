const express = require('express');
const { Login, Signup, UpdateUser } = require('../Controllers/UsersController');
const Authenticated = require('../Middlewares/isAuth');
const isAuth = require('../Middlewares/isAuth');
const Router = express.Router();


Router.route('/login').post(Login);
Router.route('/signup').post(Signup);
Router.route('/update').patch(isAuth, UpdateUser)

module.exports = Router;