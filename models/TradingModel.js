var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    id: {type: String, required: true, unique : true},
    name: {type: String, required: true, unique : true},
    symbol: {type: String, required: true},
    rank: {type: Number, required: true}, 
    price_usd: {type: Number, required: true},
    price_btc: {type: Number, required: true},
    h24_volume_usd: {type: Number, required: true},
    available_supply: {type: Number, required: true},
    total_supply: {type: Number, required: true},
    percent_change_1h: {type: Number, required: true},
    percent_change_24h: {type: Number, required: true},
    percent_change_7d: {type: Number, required: true},
    last_updated: {type: Number, required: true}
    },
    { collection : 'trading' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('trading', schema);