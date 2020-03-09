const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Action', actionSchema);