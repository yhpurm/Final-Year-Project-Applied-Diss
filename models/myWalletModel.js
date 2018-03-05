var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
        guid: {type: String, required: true, unique : true},
        address: {type: String, required: true, unique : true}, 
        label: {type: String, required: true}
    },
    { collection : 'wallet' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Wallet', schema);