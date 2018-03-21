var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true, unique : true},
    aboutMe: {type: String, required: true},
    avatar: {type: Number, required: true},
    statusCount: {type: Number, required: true},
    friendCount: {type: Number, required: true},
    isOnline: {type: Boolean, required: true},
    bitcoinAddress: {type: String, required: true},
    email: {type: String, required: true},
    lat: {type: Number, required: true}, 
    long: {type: Number, required: true}
    },
    { collection : 'Friends' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Friends', schema);