const mongoose = require('mongoose');

const sportsmanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: '123'
    }
});

module.exports = mongoose.model('Sportsman', sportsmanSchema);