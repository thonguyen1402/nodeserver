var User = require('../models/Models_sign.js')
var jwt = require('jsonwebtoken')
var bcrypt = require("bcrypt");
var nodemailer = require('nodemailer')

exports.viewSignIn = function(req, res){
	res.render('signin')
}

exports.signin = function (req, res) {
	User.findOne({email : req.body.email},function(err,user){
		if(err)res.send(err)
		if(!user)res.send("User is not exist")
		else if(user.comparePassword(req.body.password)){
			var payload = {email: req.body.email}
			var jwtToken = jwt.sign(payload, "jwtsecret", { expiresIn: 1 * 30 });
            console.log('jwtToken: ' + jwtToken);
            var jsonResponse = {'access_token': jwtToken, 'refresh_token': "xxxxx-xxx-xx-x"}
            res.json(jsonResponse)
		}
		else res.send("sign in fail")
	})
}

exports.update = function(req, res){
	// User.findOne({name: req.body.password},function(err, user){
	// 	if(err)res.send(err)
	// 	if(user){
	// 		var newUser = new User(user)
	// 		newUser.name = req.body.username
	// 		newUser.pass = bcrypt.hash(req.body.password,10)
	// 		newUser.save(function(err){
	// 			if(err)res.send(err)
	// 			res.send("update successfully")
	// 		})
	// 	}
	// })
}

exports.viewSignUp = function(req, res){
	res.render("signup")
}

exports.signup = function(req,res){
	console.log(req.body)
	User.find({email: req.body.email},function(err, user){
		if(err)res.send(err)
		if(user.length )res.send("usename already exists")
		else{
			var newUser = new User(user)
			newUser.name = req.body.username
			newUser.pass = bcrypt.hashSync(req.body.password,10)
			newUser.email= req.body.email
			newUser.confirm = false

			newUser.save(function(err){
				if(err)res.send(err)
				var transporter = nodemailer.createTransport({
					service: "gmail",
					auth:{
						user: "thonguyen140294@gmail.com",
						pass: "thangngoc123"
					}
				})
				transporter.verify(function(err, success){
					if(err)res.send("connect mail fail")
					var mailoption = {
						from: "thonguyen140294@gmail.com",
						to: "nhokiurap@gmail.com",
						subject: "confirm mail",
						text: "webcome to nodejs"
					}
					transporter.sendMail(mailoption,function(err, info){
						if(err)res.send("err : "+err)
						res.send("signup successfully. we are sent an email. Please confirm to login.")
					})
				})
			})
		}
	})
}