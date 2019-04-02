var mongoose = require('mongoose')
var bcrypt = require("bcrypt")

//setup schema
var userSchema = new mongoose.Schema({
	name: {type: String, trim: true},
	pass: {type: String},
	email: {type: String, unique: true},
	confirm: {type: Boolean}
})

userSchema.methods.comparePassword = function(pass){
	return bcrypt.compareSync(pass,this.pass)
}
//export module
var User = module.exports = mongoose.model('user', userSchema,'users');