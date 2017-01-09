var groupsService = (function(){

	this.groups = [];
	this.group = {};

	function getGroups(request, start, count) {
		$.ajax({ url: "api/groups?request=" + request + "&start=" + start + "&count=" + count, 
         async: false,
         success: function( data ) {
			groups = data;

		}
        });

		return groups;
	}

	function getGroup(groupname) {
		$.ajax({ url: "api/groups?groupname=" + groupname, 
         async: false,
         success: function( data ) {
         	group = data[0];
		}
        });

        return group;
	}

	function getGroupsByUser(username) {
		$.ajax({ url: "api/groups?username=" + username, 
         async: false,
         success: function( data ) {
			groups = data;
		}
        });

        return groups;
	}

	function saveGroup(id, groupname, oldGroupname, label, oldLabel) {
		$.post( "api/group", { id: id,
							  groupname: groupname,
							  oldGroupname : oldGroupname,
							  label: label,
							  oldLabel: oldLabel } );
	}

	return {
		getGroups : getGroups,
		getGroup  : getGroup,
		getGroupsByUser : getGroupsByUser,
		saveGroup: saveGroup
	};

})();