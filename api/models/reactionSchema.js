const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    actionService: {
        type: String,
        required: true
    },
    actionName: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reaction', reactionSchema);