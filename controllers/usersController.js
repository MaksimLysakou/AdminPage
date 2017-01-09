module.exports = function(app, url){	
	var User = require('../model/user.js');
	var Group = require('../model/group.js');

	app.get('/api/users', function(req, res) {
		var queryData = url.parse(req.url, true).query;

		User.find( { $or:[ 	{'username': new RegExp('^.*' + queryData.request + '.*$', "i")}, 
							{'firstName': new RegExp('^.*' + queryData.request + '.*$', "i")}, 
							{'lastName': new RegExp('^.*' + queryData.request + '.*$', "i")}, 
							{'email': new RegExp('^.*' + queryData.request + '.*$', "i")},
							{'groups.groupname': queryData.groupname},
							{'username': queryData.username}]}, function(err, persons) {
		   if(!err) {
		   	res.format({
			  'application/json': function(){
			    res.end( JSON.stringify (persons) );
			  }});
		   		
		   } else {
		   		res.end("Error!");
		   }
		});
		//.skip(queryData.start).limit(queryData.count)
	});

	app.post('/api/user', function(req, res){
		User.update(
		   { '_id' : req.body.id },
		   {
		      username: req.body.username,
		      firstName: req.body.firstName,
		      lastName: req.body.lastName,
		      email: req.body.email
		   }, function(err) {
			   if(req.body.username != req.body.oldUsername) {
			   		Group.update(
	   				{ 'users.username' : req.body.oldUsername },
	   				{ "$push" : { "users" :  { "username" : req.body.username }}  }, 
	   				function(err) {
	   					Group.update(
		   				{ 'users.username' : req.body.oldUsername },
		   				{ "$pull" : { "users" :  { "username" : req.body.oldUsername }}  }, 
		   				function(err) {
						   if(!err) {
				    			res.end( "OK" );
				    		} else {
						   		res.end("Error!");
						   	} 
			   			});
	   				})
			   }
			}
		)
	});
}