module.exports = function(app, url){
	var User = require('../model/user.js');
	var Group = require('../model/group.js');

	app.get('/api/groups', function(req, res) {
		var queryData = url.parse(req.url, true).query;

		Group.find( { $or:[ {'groupname': new RegExp('^.*' + queryData.request + '.*$', "i")}, 
							{'label': new RegExp('^.*' + queryData.request + '.*$', "i")}, 
							{'users.username': queryData.username},
							{'groupname': queryData.groupname}]}, function(err, persons) {
		   if(!err) {
		   	res.format({
			  'application/json': function(){
			    res.end( JSON.stringify (persons) );
			  }});
		   		
		   }
		});
		//.skip(queryData.start).limit(queryData.count)
	});

	app.post('/api/group', function(req, res){
		Group.update(
		   { '_id' : req.body.id },
		   {
		      groupname: req.body.groupname,
		      label: req.body.label
		   }, function(err) {
		   	if(req.body.groupname != req.body.oldGroupname && req.body.label != req.body.oldLabel) {
			    	User.update(
	   				{ 'groups.groupname' : req.body.oldGroupname },
	   				{ "$push" : { "groups" :  { "groupname" : req.body.groupname, "label" : req.body.label }}  }, 
	   				function(err) {
	   					User.update(
		   				{ 'groups.groupname' : req.body.oldGroupname },
		   				{ "$pull" : { "groups" : {"groupname" : req.body.oldGroupname, "label" : req.body.oldLabel }} }, 
		   				function(err) {
						   if(!err) {
				    			res.end( "OK" );
				    		} else {
						   		res.end("Error!");
						   	} 
			   			});
	   				}
				);
			 }
			}
		)
	});
}
