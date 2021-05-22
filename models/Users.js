const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    isAdmin: {
        type: String,
        default: false
    }
});

module.exports = mongoose.model('Users',UserSchema);