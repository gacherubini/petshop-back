const mongoose = require('mongoose')

const Cart_Item = mongoose.model('cart_item', {
    cart_item_id : String, 
    cart_id : String, 
    product_id: String,
    quantity
});

module.exports = Cart_Item