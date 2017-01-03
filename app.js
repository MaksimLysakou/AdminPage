var express = require('express');
var fs = require('fs');
var 

var app = express();

// Controllers include
var mainController = require('./controllers/mainController');
var groupsController = require('./controllers/groupsController');
var usersController = require('./controllers/usersController');

app.use(express.static('./views'));

mainController(app);
groupsController(app);
usersController(app);


//listen to port
app.listen(3000);