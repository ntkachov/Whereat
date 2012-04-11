$(function(){
	if(WhereatDB.getPref("SecCode") == "NONE"){
		$("login").show();
		$("friends").hide();
	}
	WhereatDB.putPref("Test", "DBTEST worked!");
	$("body").append(WhereatDB.getPref("Test"));
});
