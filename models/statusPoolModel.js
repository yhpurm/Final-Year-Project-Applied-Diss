var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true},
    date: {type: Number},
    title: {type: String, required: true},
    text: {type: String, required: true},
    Unknown: {type: Number},
    GBMiners: {type: Number},
    SlushPool: {type: Number},
    KanoCKPool: {type: Number},
    BitFury: {type: Number},
    AntPool: {type: Number},
    F2Pool: {type: Number}, 
    ViaBTC: {type: Number},
    lat: {type: Number}, 
    long: {type: Number}
    },
    { collection : 'PoolStatus' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('PoolStatus', schema);