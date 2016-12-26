var groupsService = (function(){

	function getGroups(request, start, count) {
		return [
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
				]; // TODO: http get request; (15)
	}

	return {
		getGroups : getGroups
	};

})();