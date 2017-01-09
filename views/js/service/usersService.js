var usersService = (function(){

	this.users = [];
	this.user = {};

	function getUsers(request, start, count) {
		$.ajax({ url: "api/users?request=" + request + "&start=" + start + "&count=" + count, 
         async: false,
         success: function( data ) {
			users = data;
		}
        });

		return users;
	}

	function getUser(username) {
		$.ajax({ url: "api/users?username=" + username, 
         async: false,
         success: function( data ) {
			user = data[0];
		}
        });

        return user;
	}

	function getUsersByGroup(groupname) {
		$.ajax({ url: "api/users?groupname=" + groupname, 
         async: false,
         success: function( data ) {
			users = data;
		}
        });

		return users;
	}


	function saveUser(id, username, oldUsername, firstName, lastName, email) {
		$.post( "api/user", { id: id,
							  username: username,
							  oldUsername: oldUsername,
							  firstName: firstName,
							  lastName: lastName,
							  email: email } );
	}

	return {
		getUsers : getUsers,
		getUser  : getUser,
		getUsersByGroup : getUsersByGroup,
		saveUser : saveUser
	};

})();