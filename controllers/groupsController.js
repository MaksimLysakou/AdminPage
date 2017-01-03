module.exports = function(app, qs, url){
	app.get('/api/groups', function(req, res) {
		
		var query = url.parse(req.url).query;
      	var params = qs.parse(query);

		// TODO: SQL request
		console.log("[Debug] ", params.request, params.start, params.count);

		res.end(
			JSON.stringify (
			[
				{ 
					"label" : "Лучшая группа",
					"groupname" : "group1",
					"users" : [ "First-user", "Lorem.User" ]
				},
				{ 
					"label" : "Лучшая группа",
					"groupname" : "group2",
					"users" : [ "Lorem.User" ]
				},
				{ 
					"label" : "Пользователи",
					"groupname" : "group3",
					"users" : [ "First-user" ]
				},
				{ 
					"label" : "Администраторы",
					"groupname" : "group4",
					"users" : [ "First-user" ]
				}
			] )
		)
	});
}