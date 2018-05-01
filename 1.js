var http = require('http');
//
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	var fs = require("fs");
	var data = fs.readFileSync('input.txt');
	response.end("Hello123");
	response.end(data.toString());
	console.log("Hello");

}).listen(8888);

//get events object
var events = require('events');

//create eventemitter instance
var eventEmitter = new events.EventEmitter();

var connectHandler = () => {
	console.log('connect success');
	eventEmitter.emit('data_received');
}

//bind connection
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
	console.log("data has been recevied");
});

eventEmitter.emit('connection');

console.log('end of program');
