/**
 * Created by SUSHANT on 10-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var TagSchema = new Schema({
    name:String,
    created_at:{ type : Date, default: Date.now }
});

TagSchema.plugin(autoIncrement.plugin, {
    model: 'Tag',
    field: 'tagId',
    startAt: 1,
    incrementBy: 1
});
module.exports = mongoose.model('Tag',TagSchema);
