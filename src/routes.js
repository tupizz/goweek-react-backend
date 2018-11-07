const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController')
const TweetValidator = require('./validation/TweetValidator')
const LikeController = require('./controllers/LikeController')

routes.get('/tweets', TweetController.index)
routes.post('/tweets', TweetValidator.validations, TweetController.store);

routes.post('/likes/:id', LikeController.store);

module.exports = routes;
