const mongoose = require('mongoose')

const Orders = mongoose.model('orders', {
    order_id : String,
    user_id : String, 
    paymentMethod : String, 
    phipping_adress_id: String,
    billing_address_id: String,
    order_status: String, 
    order_date: String,
    total_cost: String
});

module.exports = Orders