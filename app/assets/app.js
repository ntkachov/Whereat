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
	console.log("Where@ Version 1.0");
	if(WhereatDB.getPref("code") == "NONE"){
		$("#login").show();
		$("#friends").hide();
	}
	else{
		var friendlist = ["Jake","Bill","Mike","John","Nick"];//fake friends list
		friendlist = friendlist.concat(friendlist, friendlist);
		listFriends(friendlist);
	}

	function listFriends(flist){
		var friendList = $(".friendList")
		flist.sort();
		for(var friend in flist){
			friendList.append(formatFriendBox(flist[friend], "Is nearby"));
		}
	}
	function formatFriendBox(friend, text){
		return '<div class="friendBox clearfix"><div class="friendImg fl"></div><div class="friendText fl">' + friend + '</div><div class="friendText fr">' + text +' </div></div>'
	}	
	function login(){
		WhereatLogin.onButton();		
	}
	$("#loginButton").click(login);
});
