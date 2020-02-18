const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/auth/trello', async (req, res) => {
    const request = `https://trello.com/1/authorize?callback_method=fragment&return_url=http://localhost:8080/&scope=read&expiration=never&name=area&response_type=token&key=${process.env.TRELLO_API_KEY}`;

    res.send({url: request});
});

module.exports = router;