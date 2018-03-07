var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
        balance: {type: Number}
    },
    { collection : 'balance' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Balance', schema);