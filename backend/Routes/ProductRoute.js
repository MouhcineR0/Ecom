const express = require('express');
const { AddProduct } = require('../Controllers/ProductController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();

Router.route('/ajouterPro').post(Authenticated, AddProduct);
module.exports = Router;

