const Tweet = require('../models/Tweet');

module.exports = {
    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id);
        if (!tweet) {
            return res.status(404).json({ errors: "tweet not valid" });
        }
        
        tweet.set({ likes: tweet.likes + 1 })
        
        await tweet.save();

        req.io.emit('like', tweet);
        
        return res.json(tweet);
    }
};