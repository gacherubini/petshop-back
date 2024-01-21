const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: String,
    name: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false // Pode ajustar conforme necessário
      }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
