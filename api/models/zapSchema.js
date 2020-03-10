const mongoose = require('mongoose');

const zapSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    serviceA: {
        type: String,
        required: true
    },
    nameA: {
        type: String,
        required: true
    },
    serviceR: {
        type: String,
        required: true
    },
    nameR: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Zap', zapSchema);