var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true},
    date: {type: Number, required: true},
    title: {type: String, required: true},
    text: {type: String, required: true},
    market_price_usd: {type: String, required: true},
    hash_rate: {type: Number, required: true},
    total_fees_btc: {type: Number, required: true},
    n_btc_mined: {type: Number, required: true}, 
    n_tx: {type: Number, required: true},
    n_blocks_mined: {type: Number, required: true},
    totalbc: {type: Number, required: true},
    n_blocks_total: {type: Number, required: true}, 
    estimated_transaction_volume_usd: {type: Number, required: true},
    blocks_size: {type: Number, required: true},
    miners_revenue_usd: {type: Number, required: true}, 
    nextretarget: {type: Number, required: true},
    difficulty: {type: Number, required: true},
    estimated_btc_sent: {type: Number, required: true},
    miners_revenue_btc: {type: Number, required: true},
    total_btc_sent: {type: Number, required: true},
    trade_volume_btc: {type: Number, required: true},
    trade_volume_usd: {type: Number, required: true},
    timestamp: {type: Number, required: true},
    lat: {type: Number}, 
    long: {type: Number}
    },
    { collection : 'StatsStatus' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('StatsStatus', schema);