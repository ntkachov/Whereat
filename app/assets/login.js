_SITEURL = "http://elnux3.cs.umass.edu:9000/whereat/";
WhereatLogin = {
	setUName: function(uname){
		WhereatDB.putPref("username", uname);
	},
	login: function(){
		var user = WhereatDB.getPref("username");
		if(user == "NONE"){
			//Throw a shitfit
			alert("No username set");
			return;
		}
		$.get( _SITEURL + "addUser/" +user, function(data){
			//codeGen.handleCode(JSON.parse(data));
			console.log(data);
		});
	},
	onButton: function(){
		var uname = $("#loginID").val();
		console.log(uname);
		this.setUName(uname);
		this.login();
	}

};

CodeGen = {
	getCode: function(){
		WhereatDB.getPref("code");
	},
	handleCode: function(data){
		WhereatDB.putPref("code", data.code);
	}
};
