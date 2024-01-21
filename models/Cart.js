const mongoose = require('mongoose')

const Cart = mongoose.model('cart', {
    cart_id : String, 
    user_id : String, 
});

module.exports = Cart