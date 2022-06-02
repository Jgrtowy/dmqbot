const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('quotes', schema, 'quotes');