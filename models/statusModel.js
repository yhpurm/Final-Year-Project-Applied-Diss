var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true},
    date: {type: Number, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    valueAtTime: {type: Number},
    sentAmount: {type: Number},
    bitcoinAddress: {type: String, required: true},
    receivingAddress: {type: String, required: true},
    lat: {type: Number, required: true}, 
    long: {type: Number, required: true}
    },
    { collection : 'Status' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Status', schema);