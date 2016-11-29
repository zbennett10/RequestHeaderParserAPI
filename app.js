var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');


var app = express();

//---------------------Configuration--------------------
//sets view engine
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

//----------------------Middleware-------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//-----------------------Routes-------------------------------
app.get('/', function(req, res) {
    //code for getting client's ip address, browser language, and client's OS in JSON
    //render the above user stories to the view.jade file
    res.render('view'); 
});

//start server
//this is for c9.io dev environment
app.listen(process.env.PORT, function() {
  console.log(`ready on port 8080`);
});

module.exports = app;