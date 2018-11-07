const Tweet = require('../models/Tweet');
const { validationResult } = require('express-validator/check');


module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt');
        
        return res.json(tweets);
    },

    async store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }

        const tweet = await Tweet.create(req.body);

        req.io.emit('tweet', tweet);

        return res.json(tweet);
    }
};