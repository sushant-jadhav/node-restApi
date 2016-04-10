/**
 * Created by SUSHANT on 10-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var AnswerSchema = new Schema({
    description:String,
    created_at:Date,
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

AnswerSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'userId',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Answer',AnswerSchema);