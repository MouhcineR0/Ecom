const express = require('express');
const { AddProduct, GetProducts ,GetProduct,ProductsApi} = require('../Controllers/ProductController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();

Router.route('/ajouterPro').post(Authenticated, AddProduct);
Router.route('/GetPro').get(GetProducts);
Router.route('/GetPro/:id').get(GetProduct);
Router.route('/Products').post(ProductsApi);
module.exports = Router;

