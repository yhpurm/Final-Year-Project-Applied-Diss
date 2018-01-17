var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true, unique : true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    bitcoinAddress: {type: String, required: true, unique : true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    location: [{ lat: Number, long: Number }],
    friends  : [{ type: Schema.Types.ObjectId, ref: 'friendsModel' }]
    },
    { collection : 'profile' });

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Profiles', schema);