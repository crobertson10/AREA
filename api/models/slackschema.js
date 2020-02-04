const mongoose = require('mongoose');

const slackSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    slackId: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Slack', slackSchema);
