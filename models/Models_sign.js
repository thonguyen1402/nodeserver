var mongoose = require('mongoose')
var bcrypt = require("bcrypt")

//setup schema
var userSchema = new mongoose.Schema({
	name: {type: String, unique: true, trim: true, required: true},
	pass: {type: String, required: true},
	email: {type: String, unique: true, required: true}
})

userSchema.methods.comparePassword = function(pass){
	return bcrypt.compare(pass,this.pass)
}
//export module
var User = module.exports = mongoose.model('user', userSchema,'users');