var Contact = require("./contactModel.js")

exports.index = function(req, res){
	res.json({
		status: "success",
		message: "Contacts retrieved successfully"
	})
}

exports.new = function(req, res){
	var contact = new Contact()
	contact.name  = req.body.name
	contact.phone = req.body.phone
	contact.email = req.body.email
	contact.table = req.body.table

	contact.save(function(err){
		res.json({
			message: "new contact created!",
			data: contact
		})
	})
}

exports.view = function(req, res){
	console.log(req.params.contact_id)
	Contact.findOne({_id: req.params.contact_id},function(err,contact){
		if(err)res.send(err)
		res.json({
			messsage: "contact details",
			data: contact
		})
	})
}

exports.update = function(req, res){
	Contact.findOne({_id: req.params.contact_id},function(err, contact){
		contact.name = req.body.name?req.body.name:contact.name
		contact.phone = req.body.phone
		contact.email = req.body.email
		contact.table = req.body.table

		contact.save(function(err){
			if(err)res.send(err)
			res.json({
				message: "contact info updated",
				data: contact
			})
		})
	})
}

exports.delete = function(req, res){
	Contact.remove({_id: req.params.contact_id},function(req, res){
		if(err)res.send(err)
		res.json({
			status: "success",
			message: 'contact deleted'
		})
	})
}