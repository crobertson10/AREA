const router = require('express').Router();
const axios = require('axios');
const Registered = require('../models/registeredschema');
const Message = require('../models/messageSchema');


router.get('/slack/check/message', (req, res) => {
    var token = req.body.token;
    var name = req.body.name;
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    Message.findOne({ userId: verified._id, name: name}, function (err, message) {
        
    });
});

module.exports = router