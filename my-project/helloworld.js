var http = require("http");

var server = http.createServer(function(req, res){
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    res.end("Hello wolrd");
})

server.listen(8080);



