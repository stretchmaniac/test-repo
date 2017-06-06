var http = require('http');

var server = http.createServer(function(request, response){
	if(request.method === 'POST' && request.url === '/payload'){
		var body = [];
		request.on('data', function(chunk){
			body.push(chunk);
		}).on('end', function(){
			body = Buffer.concat(body).toString();
			
			//parse the JSON package
			info = JSON.parse(body);
			//test whatever we need to test...
			//blah blah blah
			
			response.end();
		}).on('error', function(err){
			console.log(err);
		});
	}else{
		response.statusCode = 404;
		response.end();
	}
}).listen(4567);
