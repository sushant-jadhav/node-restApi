/**
 * Created by SUSHANT on 03-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

module.exports = mongoose.model('User', UserSchema);
