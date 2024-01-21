const mongoose = require('mongoose')

const Order_itens = mongoose.model('order_itens', {
    order_item_id : String, 
    order_id : String, 
    product_id: String,
    quantity: String,
    price_at_purchase: String
});

module.exports = Order_itens