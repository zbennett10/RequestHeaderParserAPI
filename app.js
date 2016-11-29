var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var pug = require('pug');

var app = express();


//---------------------Configuration--------------------
//sets view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//----------------------Middleware-------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//-----------------------Routes-------------------------------
app.get('/', function(req, res) {
     res.json({address: req.headers['x-forwarded-for'],
            language: req.headers['accept-language'].substring(0,5),
            os: req.headers['user-agent'].split('(')[1].split(')')[0]
      });
});

//start server
//this is for c9.io dev environment
//app.listen(process.env.PORT, function() {
  //console.log(`ready on port 8080`);
//});

module.exports = app;