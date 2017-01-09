var express = require('express');
var url = require('url');
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');


var app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/adminPage');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Controllers include
var mainController = require('./controllers/mainController');
var groupsController = require('./controllers/groupsController');
var usersController = require('./controllers/usersController');

app.use(express.static('./views'));

mainController(app);
groupsController(app, url);
usersController(app, url);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


// var Group = require('./model/group.js');
// var User = require('./model/user.js');

// var user = new User({username: 'Xerotico', firstName: 'Maxim', lastName: 'Lysakov', email: 'Lysakov_MS_14@mail.ru', groups: []});
// user.save(function() {
// 	console.log('ok');
// });

// var group = new Group({groupname: 'admin_group', label: 'Admin', users: [ {username:'Xerotico'} ]});
// group.save(function() {
// 	console.log('ok');
// });


//listen to port
app.listen(3000);