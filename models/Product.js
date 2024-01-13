const mongoose = require('mongoose')

const Produto = mongoose.model('produto', {
    name: String,
    description: String,
    price: String
});

module.exports = Produto