_SITEURL = "elnux3.cs.umass.edu/whereat/";
WhereatLogin = {
	setUName: function(uname){
		WhereatDB.setPref("username", uname);
	},
	login: function(){
		var user = WhereatDB.getPref("username");
		if(user == "NONE"){
			//Throw a shitfit
			alert("No username set");
			return;
		}
		$.get( _SITEURL + "/addUser/" +uname, function(data){
			//codeGen.handleCode(JSON.parse(data));
			console.log(data);
		});
	},
	onButton: function(){
		var uname = $("#loginID").val();
		this.setUName(uname);
		this.login();
	}

};

CodeGen = {
	getCode: function(){
		WhereatDB.getPref("code");
	},
	handleCode: function(data){
		WhereatDB.setPref("code", data.code);
	}
};
