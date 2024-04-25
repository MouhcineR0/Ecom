const express = require('express');
const { AddRating } = require('../Controllers/RatingController');
const Authenticated = require('../Middlewares/isAuth');
const Router = express.Router();

Router.route('/ajouterRat').post(Authenticated, AddRating);
module.exports = Router;

