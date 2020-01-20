const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    github: {
        id: String,
        token: String,
        username: String
    }
});

module.exports = mongoose.model('User', userSchema);