http = require('http');
router = require('./router.js');

http.createServer(connectionManager).listen(7000);

function connectionManager(req, res) {
	var data = "";
	var url = req.url.slice(9, req.url.length);
	console.log(url);
	req.on('data', function(chunk) {
		chunk = unescape(chunk.toString());
		chunk = chunk.replace(/\+/g, ' ');
		data += chunk;
	});
	req.on('end', function(){
		if(data === ""){
			var d = req.url.slice(req.url.indexOf("?") + 1, req.url.length);
			if(d != undefined){
				data = decodeURI(d);
				url = url.substring(0, url.indexOf("?"));
			}
		}
		console.log("url : " + url);
		console.log("data : " + data);
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		if(router[url] != undefined){ //checks to see if the router has a given function. Then executes it.
			try{
				router[url](data, res);
			}
			catch(err){
				console.log(err);
				console.log(err.stack);
			}
		}
		else{
			console.log(url + " does not exist");
		}
	});
};
