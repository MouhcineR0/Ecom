const express = require('express');
const { DeleteCategory, AddCategory, EditCategory, GetAllCategories } = require('../Controllers/CategoryController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();

Router.route('/AddCategory').post(Authenticated, AddCategory);
Router.route('/GetCat').get(GetAllCategories);
Router.route('/EditCat/:id').put(Authenticated, EditCategory);
Router.route('/DelCategory/:id').delete(Authenticated, DeleteCategory);
module.exports = Router;
