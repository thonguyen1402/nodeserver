var express = require("express");

var app = express();

app.listen(3000);

app.set("view engine","ejs");
app.set("views","./views");

app.get("",function(req,res){
	res.render("home");
});