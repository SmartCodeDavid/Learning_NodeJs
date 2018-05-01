var http = require("http");
var url = require("url");


function a(){
    throw new Error('err');
}

function b(){
    a();
}

function c(){
    b();
}

var server = http.createServer(function(req, res){
    // try {
    //     throw new Error("error");    
    // } catch (error) {
    //     res.end(error.message);
    // }finally{
    //     //res.end("!!");
    // }

    // process.on('uncaughtException', function(err){
    //     console.error(err);
    //     res.end(err.message);
    //     process.exit(1);
    // })
    // throw new Error("err");
    c();

});
server.listen(8080);