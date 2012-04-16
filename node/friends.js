var people = {};
var friends = {};

/* Note: 
	The way to access these commands is through /command?param1&param2&param3&...&paramm
*/


function success(person, obj){
	var r = {code: person};
	if(obj != undefined){
		for(var o in obj){
			r[o] = obj[o];
		}
	}
	return JSON.stringify(r);
}

function addFriend(person, friend){
	if(friend in people && person in people){
		friends[person].push(friend);
		friends[friend].push(person);
		return success(person);
	} 
	else{
		return "Failure";
	}
}

function addUser(person){
	if(!person in people){
		return "Failure";
	}
	else{
		people[person] = {coordx: 0, coordy:0};
		friends[person] = [];
		return success(person);
	}
}

function updatePerson(person, coordx, coordy){
	if(person in people){
		people[person].coordx = coordx;
		people[person].coordy = coordy;
		return success(person);
	}
	else{
		return "Failure";
		}
}

function getNearbyFriends(person){
	var json = {};
	if(person in people){
		for(var friend in friends[person]){
			var friend = friends[person][friend];
			if(friend != undefined){
				json[friend] = people[friend];
			}
		}
	}
	return sucess(person, json);
}

function writeSend(funct){
	return function (data, res){
		data = data.split('&');
		var d = funct.apply(this, data);
		console.log(people);
		console.log(friends);
		if(d != "Failure"){
			res(200, d);
		}
		else{
			res(400, d);	
		}
	}
}

exports.addFriend = writeSend(addFriend);
exports.addUser = writeSend(addUser);
exports.updatePerson = writeSend(updatePerson);
exports.getNearbyFriends = writeSend(getNearbyFriends);
