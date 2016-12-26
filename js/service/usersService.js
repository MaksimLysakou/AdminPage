var usersService = (function(){

	this.users = [
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
				];

	function getUsers(request, start, count) {
		return users; // TODO: http get request; (15)
	}

	function getUser(username) {
		var currentUser = users.find(function (user){
            return (user.username == username);
		});	

		return currentUser;
	}

	return {
		getUsers : getUsers,
		getUser  : getUser
	};

})();