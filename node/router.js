var friend = require('./friends.js');


function finish(res){
	return function(send){
		res.writeHead(200, "Content-Type: text/plain");
		res.end(send);
	}

}
	
function resGen(res){
	return function(code, data){
		res.writeHead(code, "content-type: text/plain");
		res.end(data);
	}
}

function setRoute(funct){
	return function(data,res){
		funct(data, resGen(res));
	}
}

exports.helloworld = function (data, res){
	var fin = finish(res)
	fin(data + " JELLO WORLD", res);

}

exports.addUser = setRoute(friend.addUser);

exports.addFriend = setRoute(friend.addFriend);

exports.updatePerson = setRoute(friend.updatePerson);

exports.getNearbyFriends = setRoute(friend.getNearbyFriends);
