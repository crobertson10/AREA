const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    zapId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Message', messageSchema);