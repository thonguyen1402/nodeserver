// var User = require('../models/Models_sign.js')
var jwt = require('jsonwebtoken')

exports.viewSignIn = function(req, res){
	res.render('signin')
}

exports.signin = function (req, res) {
	User.findOne({name : req.body.username},function(err,user){
		if(err)res.send(err)
		if(!user)res.send("User is not exist")
		else if(user.comparePassword(req.body.password)){
			var payload = {name: req.body.username}
			var jwtToken = jwt.sign(payload, "jwtsecret", { expiresIn: 1 * 30 });
            console.log('jwtToken: ' + jwtToken);
            var jsonResponse = {'access_token': jwtToken, 'refresh_token': "xxxxx-xxx-xx-x"}
            res.json(jsonResponse)
		}
		else res.send("sign in fail")
	})
}

exports.update = function(req, res){
	User.findOne({name: req.body.username},function(err, user){
		if(err)res.send(err)
		if(user){
			user.name = req.body.username
			user.pass = req.body.password
			user.save(function(err){
				if(err)res.send(err)
				res.send("update successfully")
			})
		}
	})
}

exports.viewSignUp = function(req, res){
	res.render(signup)
}

exports.signup = function(req,res){
	User.find({$or:[{name: req.body.username},{email: req.body.email}]},function(err, user){
		if(err)res.send(err)
		if(user)res.send("usename already exists")
		else{
			user.name = req.body.username
			user.pass = req.body.password
			user.email= req.body.email
			user.save(function(err){
				if(err)res.send(err)
				res.send("signup successfully")
			})
		}
	})
}