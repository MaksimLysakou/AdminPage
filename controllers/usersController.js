module.exports = function(app, qs, url){
	app.get('/api/users', function(req, res) {

		var query = url.parse(req.url).query;
      	var params = qs.parse(query);


		// TODO: SQL request
		console.log("[Debug] ", params.request, params.start, params.count);

		res.end(
			JSON.stringify (
			[
				{ 
					"username" : "First-user",
					"firstName" : "Максим",
					"lastName" : "Лысаков",
					"email" : "Lysakov_MS_14@mail.ru",
					"groups" : [ 
						{ 
							"label" : "Лучшая группа",
							"groupname" : "group1"
						}, 
						{ 
							"label" : "Пользователи",
							"groupname" : "group3"
						}, 
						{ 
							"label" : "Администраторы",
							"groupname" : "group4"
						}
					]
				},
				{ 
					"username" : "BeStUsEr",
					"firstName" : "Петька",
					"lastName" : "Васильев",
					"email" : "username2006@tut.by",
					"groups" : []
				},
				{ 
					"username" : "Lorem.User",
					"firstName" : "Ipsum",
					"lastName" : "Dolor",
					"email" : "sit-amet@example.com",
					"groups" : [ 
						{
							"label" : "Лучшая группа",
							"groupname" : "group1"
						},
						{
							"label" : "Лучшая группа",
							"groupname" : "group2"
						}
					]
				}
			])
		)
	});
}