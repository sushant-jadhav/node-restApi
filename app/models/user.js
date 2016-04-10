/**
 * Created by SUSHANT on 03-04-2016.
 */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var UserSchema   = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    created_at:Date,
    mobile_no:Number

});

UserSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'userId',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('User', UserSchema);
