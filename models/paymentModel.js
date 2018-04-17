var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
        to: {type: String, required: true, unique : true},
        from: {type: String, required: true, unique : true},
        amount: {type: Number, required: true, unique : true},
        fees: {type: Number, required: true, unique : true}, 
        txid: {type: String, required: true},
        success: {type: Boolean, required: true}
    },
    { collection : 'sendbtc' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Sendbtc', schema);
