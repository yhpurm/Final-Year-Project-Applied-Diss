var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
   
    },
    { collection : 'collection' });

module.exports = mongoose.model('Message', schema);