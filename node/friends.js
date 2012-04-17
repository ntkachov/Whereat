var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('whereat');
/*
db.run("DROP TABLE persons");
db.run("DROP TABLE friends");
*/
//db.run('CREATE TABLE persons (P_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, coordx INTEGER, coordy INTEGER);');
//db.run('PRAGMA foreign_keys = ON;');
/*db.run('CREATE TABLE friends (P_id1 INTEGER, P_id2 INTEGER, FOREIGN KEY(P_id1) REFERENCES persons(P_id), FOREIGN KEY(P_id2) REFERENCES persons(P_id));',
function(){
		addUser("nick", function(res){
			dbprint();
			addUser("anna", function(res){
				dbprint();
				addFriend("nick","anna",function(res){dbprint();
					updatePerson("nick",12, 15, function(res){ dbprint();
						getNearbyFriends("anna", function(res){});
					});	
				});
			});
		});
});*/
//db.run("CREATE UNIQUE INDEX friendindex ON friends(P_id1, P_id2);");

/* Note: 
	The way to access these commands is through /command?param1&param2&param3&...&paramm
*/
function dbprint(){
	db.all("SELECT * FROM persons;", function(err, res){ console.log("TABLE: " + JSON.stringify(res)) });
	db.all("SELECT * FROM friends;", function(err, res){ console.log("TABLE: " + JSON.stringify(res)) });
};

function success(person, obj){
	var r = {code: person};
	if(obj != undefined){
		for(var o in obj){
			r[o] = obj[o];
		}
	}
	return JSON.stringify(r);
}
function e(err, res){};

function addFriend(person, friend, callback){
	db.run('INSERT INTO friends VALUES ((SELECT P_id FROM persons WHERE username= ?),(SELECT P_id FROM persons WHERE username= ? ));', [person, friend],e);
	db.run('INSERT INTO friends VALUES ((SELECT P_id FROM persons WHERE username= ?),(SELECT P_id FROM persons WHERE username= ? ));', [friend, person],e);
	callback(success(person));
}

function addUser(person, callback){
		console.log("AddUser");
		db.run("INSERT INTO persons(P_id, username, coordx, coordy) VALUES(null , ? ,0,0);", person,e);
			dbprint();
		callback( success(person) );
}

function updatePerson(person, coordx, coordy, callback){
		db.run('UPDATE persons SET coordx=?, coordy=? WHERE username=?', coordx, coordy, person);
			dbprint();
		callback(success(person));
}

function getNearbyFriends(person, callback){
	db.all('SELECT persons.username, persons.coordx, persons.coordy FROM friends JOIN persons ON friends.P_id2 = persons.P_id WHERE friends.P_id1 = (SELECT P_id FROM persons WHERE username= ?)', person, function(err, res){ callback(success(person, res));});
			dbprint();

	//callback(sucess(person, json));
}

function writeSend(funct){
	return function (data, res){
		params = [];
		data = data.split('&');
		params = params.concat(data);
		params = params.concat(function( d ){
			console.log("responce: " + d);
			res(200, d);
		});
		console.log(params);
		funct.apply(this, params);
	}
}

exports.addFriend = writeSend(addFriend);
exports.addUser = writeSend(addUser);
exports.updatePerson = writeSend(updatePerson);
exports.getNearbyFriends = writeSend(getNearbyFriends);
