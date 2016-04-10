/**
 * Created by SUSHANT on 08-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var QuestionSchema = new Schema({
    title: String,
    description: String,
    created_at:Date,
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    answers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Answer'
    }],
    tags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tag'
    }]
});

QuestionSchema.plugin(autoIncrement.plugin, {
    model: 'Question',
    field: 'questionId',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Question',QuestionSchema);