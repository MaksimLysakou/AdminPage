var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = Schema({
	username : { type: String, unique: true, required: true },
	firstName : { type: String, required: true },
	lastName : String,
	email : { type: String, unique: true, required: true },
	groups : [new Schema({
        label : { type: String, required: true },
        groupname : { type: String, unique: true, required: true },
    }, { _id: false })]
});

module.exports = mongoose.model('User', User);