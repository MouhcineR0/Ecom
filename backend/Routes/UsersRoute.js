const express = require('express');
const { Login, Signup, UpdateUser, GetUsers, CreateAccount, DeleteUser } = require('../Controllers/UsersController');
const Authenticated = require('../Middlewares/isAuth');
const isAuth = require('../Middlewares/isAuth');
const Router = express.Router();


Router.route('/login').post(Login);
Router.route('/signup').post(Signup);
Router.route('/update').patch(isAuth, UpdateUser)
Router.route('/GetUsers').get(Authenticated, GetUsers)
Router.route('/CreateAccount').post(Authenticated, CreateAccount)
Router.route('/DeleteUser').delete(Authenticated, DeleteUser)

module.exports = Router;