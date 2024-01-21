const mongoose = require('mongoose')

const Produto = mongoose.model('produto', {
    product_id: String,
    name: String,
    description: String,
    price: String,
    quantity: String,
    image: String
});

module.exports = Produto