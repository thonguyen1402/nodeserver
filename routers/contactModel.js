var mongoose = require("mongoose");

//setup schema
var contactSchema = new mongoose.Schema({
	name: {type: String, required: true},
	phone: {type: Number, required: true},
	email: {type: String, required: true},
	table: {type: Number, required: true}
})
//export module
var Contact = module.exports = mongoose.model('contact', contactSchema,'book_table');