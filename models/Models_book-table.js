var mongoose = require("mongoose");
var bcrypt = require("bcrypt");


//setup schema
var contactSchema = new mongoose.Schema({
	name: {type: String, trim: true, required: true},
	phone: {type: Number, trim: true, unique: true, required: true},
	email: {type: String, trim: true, unique: true, required: true},
	table: {type: Number, unique: true, required: true}
})

contactSchema.methods.comparePassword = function(pass){
	return bcrypt.compareSync(pass,this.email)
}
//export module
var Contact = module.exports = mongoose.model('contact', contactSchema,'book_table');
