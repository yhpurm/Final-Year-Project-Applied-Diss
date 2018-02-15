const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


const userSchema = new Schema({
email: { type: String, required: true, unique: true, lowercase: true },
username: { type: String, required: true, unique: true, lowercase: true },
password: { type: String, required: true, }
});

// Middleware to encrypt passwords
userSchema.pre('save', function(next) {
    if (!this.isModified('password'))
    return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    })
});

// Matching up Encryted Passwords
userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);