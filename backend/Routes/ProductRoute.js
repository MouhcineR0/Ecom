const express = require('express');
const { AddProduct, GetProducts, GetProduct, ProductsApi, EditProduct, DeleteProduct } = require('../Controllers/ProductController');
const Authenticated = require('../Middlewares/isAuth');
const { upload } = require('../Middlewares/Cloudinary');
const UploadMiddleware = require('../Middlewares/Cloudinary');
const Router = express.Router();



Router.route('/AddProduct').post(Authenticated, UploadMiddleware, AddProduct);
Router.route('/GetPro').get(GetProducts);
Router.route('/GetPro/:id').get(GetProduct);
Router.route('/Products').post(ProductsApi);
Router.route('/editProduct/:id').put(Authenticated, EditProduct);
Router.route('/delProduct/:id').delete(Authenticated, DeleteProduct);
module.exports = Router;
