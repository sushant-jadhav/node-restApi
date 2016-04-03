/**
 * Created by SUSHANT on 03-04-2016.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);
