var querystring = require('querystring');
var fs = require("fs");

function start (response, postData) {
	console.log("Request handler 'start' was called.");
	var body = "<html><head></head><body><h1>Find your owner's manual</h1><form action='/modelSearch' method='post'><input type='text' name='model'	/><input type='submit' value='Find'	/></form></body></html>";
	response.end(body);
}

function modelSearch (res, postData) {
	console.log('Request handler "search" was called');
	res.end('hello');

}

function upload (response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent " + querystring.parse(postData).text);
	response.end();
}

exports.start = start;
exports.modelSearch = modelSearch;
