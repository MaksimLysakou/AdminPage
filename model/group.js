var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Group = Schema({
	groupname : { type: String, unique: true, required: true },
	label : { type: String, required: true },
	users : [new Schema({
        username : { type: String, required: true }
    }, { _id: false })]
});

module.exports = mongoose.model('Group', Group);