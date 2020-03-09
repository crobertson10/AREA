const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reaction', reactionSchema);