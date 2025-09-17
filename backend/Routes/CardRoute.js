const express = require('express');
const Authenticated = require('../Middlewares/isAuth');
const { addToCard, GetCard, DeleteCard } = require('../Controllers/CardController');
const Router = express.Router();

Router.route('/AddCard').post(Authenticated, addToCard);
Router.route('/GetCard/:id').get(Authenticated, GetCard);
Router.route('/DeleteCard/:id').delete(Authenticated, DeleteCard);

module.exports = Router;