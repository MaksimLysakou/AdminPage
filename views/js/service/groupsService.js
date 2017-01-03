var groupsService = (function(){

	function getGroups(request, start, count) {
		this.groups = [];

		$.ajax({ url: "api/groups?request=" + request + "&start=" + start + "&count=" + count, 
	        async: false,
	        success: function(data) {
				groups = $.parseJSON( data );
			}
        });

        return groups;
	}

	function getGroup(groupname) {
		return getGroups("{groupname : " + groupname + "}", 0, 1);

	}

	function getGroupsByUser(username, start, count) {
		return getGroups("{username : " + username + "}", start, count);

	}

	return {
		getGroups : getGroups,
		getGroup  : getGroup,
		getGroupsByUser : getGroupsByUser
	};

})();