'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LeagueSchema = Schema({
    name: String,
    country: String,
    image: String,
    description: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Team', LeagueSchema);