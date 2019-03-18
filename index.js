var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.listen(3000);

app.set("view engine","ejs");
app.set("views","./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/",function(req,res){
	res.render("home");
});

app.post("/", function (req, res) {
	console.log(req.body.username);
	console.log(req.body.password);
	res.send(req.body.username + " " + req.body.password);
})