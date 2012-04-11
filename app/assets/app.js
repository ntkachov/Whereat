$(function(){
	WhereatDB.putPref("Test", "DBTEST worked!");
	$("body").append(WhereatDB.getPref("Test"));
});
