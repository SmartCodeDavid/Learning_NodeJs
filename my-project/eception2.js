var http = require("http");
var url = require("url");


function a(){
    try {
        setTimeout(() => {
            throw new Error('err');    
        }, (10000));        
    } catch (error) {
        console.log("run on here");   
    }
}

function b(){
    a();
}

function c(){
    b();
}

var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url, true);
    res.end(urlObj.query.name);
    c();
});
server.listen(8080);