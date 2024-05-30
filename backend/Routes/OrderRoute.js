const express = require('express');
const { registerOrders} = require('../Controllers/OrderController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();

Router.route('/ajouterOrder').post(Authenticated, registerOrders);

module.exports = Router;

