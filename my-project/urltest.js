var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);
    var name = urlObj.query.name;
    var age = urlObj.query.age;
    var sex = urlObj.query.sex;
    res.end("name: " + name + " age: " +age + " sex: "+ sex);
});
server.listen(8080);