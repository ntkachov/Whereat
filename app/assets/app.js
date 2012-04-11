//Remove before device testing
/*WhereatDB = { 
	getPref: function(string) {
		return "fake";
	},
	putPref: function(string){
		return;
	}
};
*/
$(function(){
	if(WhereatDB.getPref("SecCode") == "NONE"){
		$("#login").show();
		$("#friends").hide();
	}
	else{
		var friendlist = ["Jake","Bill","Mike","John","Nick"];//fake friends list
		listFriends(friendlist);
	}

	function listFriends(flist){
		var friendList = $(".friendList")
		for(var friend in flist){
			friendList.append(formatFriendBox(flist[friend]));
		}
	}
	function formatFriendBox(string){
		return '<div class="friendBox">' + string + '</div>'
	}	
	function login(){
		var uname = $("#loginID").val();
		alert(uname);
	}
	$("#loginButton").click(login);
});
