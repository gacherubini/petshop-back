const mongoose = require('mongoose')

const Address = mongoose.model('address', {
    address_id : String,
    user_id : String, 
    address_type : String, 
    street: String,
    city: String,
    state: String, 
    postal_code: String,
    country: String
});

module.exports = Address