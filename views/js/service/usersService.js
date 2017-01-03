var usersService = (function(){

	function getUsers(request, start, count) {
		this.users = [];

		$.ajax({ url: "api/users?request=" + request + "&start=" + start + "&count=" + count, 
	        async: false,
	        success: function(data) {
				users = $.parseJSON( data );
			}
        });

        return users;
	}

	function getUser(username) {
		return getUsers("{username : " + username + "}", 0, 1);
	}

	function getUsersByGroup(groupname, start, count) {
		return getUsers("{groupname : " + groupname + "}", start, count);
	}

	return {
		getUsers : getUsers,
		getUser  : getUser,
		getUsersByGroup : getUsersByGroup
	};

})();