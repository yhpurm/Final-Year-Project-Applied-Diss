var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true},
    date: {type: Number, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    locationName: {type: String},
    contact: {type: String},
    lat: {type: Number, required: true}, 
    long: {type: Number, required: true}
    },
    { collection : 'FlagStatus' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('FlagStatus', schema);