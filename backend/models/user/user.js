// user.js

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    type: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
