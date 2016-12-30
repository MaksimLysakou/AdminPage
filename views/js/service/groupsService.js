var groupsService = (function(){

	this.groups = [
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

	function getGroups(request, start, count) {
		return groups;
	}

	function getGroup(groupname) {
		var currentGroup = groups.find(function (group){
            return (group.groupname == groupname);
		});	

		return currentGroup;
	}

	function getGroupsByUser(username) {
		return groups.filter(function(group){
			return group.users.some(function(user) {
				return (user == username);
			});
		});
	}

	return {
		getGroups : getGroups,
		getGroup  : getGroup,
		getGroupsByUser : getGroupsByUser
	};

})();