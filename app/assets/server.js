_SITEURL = "http://elnux3.cs.umass.edu:9000/whereat/";
WhereatServ = (function(){
	function connection(call, paramlist){
		var url = _SITEURL + call + "?";
		for(var i = 0; i < paramlist.length; i++){
			url += paramlist[i]+"&";
		}  
		url = url.substring(0, url.length-1);
		return url;	
	};
	var person = WhereatDB.getPref("username");
	console.log(connection("TEST",['a','b','c']));
	return {
		addUser: function(username, callback ){
			$.get(connection("addUser", username), callback);
		},
		addFriend: function( friend, callback){
			$.get(connection("addFriend",[person, friend]), callback);

		},
		updatePerson: function( coordx, coordy){
			//Not going to do this one yet as updates are handled by android
		},
		getNearbyFriends:function(){
			$.get(connection("getNearbyFriends",person));
		}
	};	
})();
