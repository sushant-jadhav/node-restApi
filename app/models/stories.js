/**
 * Created by SUSHANT on 17-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var StorySchema   = new Schema({
    title: String,
    description: String,
    created_at:{ type : Date, default: Date.now },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

});

StorySchema.plugin(autoIncrement.plugin, {
    model: 'Story',
    field: 'storyId',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Story', StorySchema);
