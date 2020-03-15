const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    check: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Action', actionSchema);