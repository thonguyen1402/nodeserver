var apiRouters = require("./routers/api-routers.js")

var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var app = express();

app.listen(3000);

app.set("view engine","ejs");
app.set("views","./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',apiRouters)

//set config mongoose
mongoose.connect("mongodb://localhost/my_db");
var db = mongoose.connection;

app.get("/",function(req,res){
	res.render("home");
});

app.post("/", function (req, res) {
	// console.log(req.body.username+" "+req.body.phone+" "+req.body.email+" "+req.body.table );
	// var item = {
	// 				name: req.body.username,
	// 				phone: req.body.phone,
	// 				email: req.body.email,
	// 				table: req.body.table,
	// 				order:[
	// 					{dish: "mỳ quảng", amount: 4},
	// 					{dish: "phở", amount: 2}
	// 				]
	// 			}
	// db.collection("book_table").insert(item,function(error, result){
	// 	if(error) res.send(error)
	// 	if(result) res.send(result)
	// });
})

