//importa as denpedências
var express = require("express");
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require("express-validator");

// importa as views
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

// importa o bodyParser como middle
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(expressValidator());



// carrega todas as rotas via autoload
consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;