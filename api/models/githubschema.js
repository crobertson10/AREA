const mongoose = require('mongoose');

const githubSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    githubId: {
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

module.exports = mongoose.model('Github', githubSchema);
