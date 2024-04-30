const express = require('express');
const { Login, Signup } = require('../Controllers/UsersController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();


Router.route('/login').post(Login);
Router.route('/signup').post(Signup);
Router.route('/signup').get((req, res) => {
    return res.send('hh');
});

module.exports = Router;