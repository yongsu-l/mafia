// user.js
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    type: String,
    alive: Boolean
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
