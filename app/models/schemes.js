/**
 * Created by SUSHANT on 17-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var SchemeSchema   = new Schema({
    title: String,
    description: String,
    information: String,
    created_at:{ type : Date, default: Date.now }

});

SchemeSchema.plugin(autoIncrement.plugin, {
    model: 'Scheme',
    field: 'schemeId',
    startAt: 1,
    incrementBy: 1
});

module.exports = mongoose.model('Scheme', SchemeSchema);
