var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true, unique : true},
    bitcoinAddress: {type: String, required: true, unique : true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    lat: {type: Number, required: true}, 
    long: {type: Number, required: true}
    },
    { collection : 'friends' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Profiles', schema);