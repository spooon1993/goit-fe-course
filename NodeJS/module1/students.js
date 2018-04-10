const mongoose = require('mongoose');

const studenstsSchema = new mongoose.Schema({
    name: String,
    age: Number,
    marks: [Number],
    anotherMarks: [{
        type: Number,
        min: 1,
        max: 5,
        validate: (value) => {
            return value <= 5 && value >= 1;
        }
    }],
    rang: {
        type: String,
        required: true,
        default: 'Семка',
        validate: (value) => {
            const vegetables = ['Помидор', 'Мрковока', 'Кабачок', 'Семка'];
            return vegetables.includes(value);
        }
    },
    themes: {
        module1: {
            type: String,
        }
    }
});

module.exports = mongoose.model('Students', studenstsSchema);
