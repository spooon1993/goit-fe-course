const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
        default: 0
    },
    count: {
        type: Number,
        required: true,
        default: 0
    },
    description: String,
});

module.exports = mongoose.model('Vegetables', vegetableSchema);
