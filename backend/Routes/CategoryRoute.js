const express = require('express');
const { DeleteCategory, AddCategory, EditCategory, GetAllCategories } = require('../Controllers/CategoryController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();

Router.route('/ajouterCat').post(Authenticated, AddCategory);
Router.route('/GetCat').get(GetAllCategories);
Router.route('/editCatt/:id').put(Authenticated, EditCategory);
Router.route('/delProduct/:id').delete(Authenticated, DeleteCategory);
module.exports = Router;
