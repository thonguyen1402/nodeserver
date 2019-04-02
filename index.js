var apiRouters = require("./routers/api-routers.js")
var signRouters = require('./routers/sign-routers.js')

var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

var app = express();

app.listen(3000);

app.set("view engine","ejs");
app.set("views","./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/sign',signRouters);
app.use('/api',apiRouters);

//set config mongoose
mongoose.connect("mongodb://localhost/my_db");
var db = mongoose.connection;