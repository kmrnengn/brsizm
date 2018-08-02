const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;
// deneme