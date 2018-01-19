// game.js
var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    createdDate: {type: Date, default: Date.now},
    creatorID: String,
    isActive: {type: Boolean, default: true},
    endDate: Date,
    joinedPlayers: [{playerName: String, playerID: String, type: String, joined: Date}],
    winner: String
});
mongoose.model('Game', gameSchema);

module.exports = mongoose.model('Game');
