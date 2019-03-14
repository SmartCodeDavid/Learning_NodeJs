// cluster.js

var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus();

// cluster.setupMaster({
//     exec: "cluster_worker.js"
// })

if(cluster.isMaster) {
    // Fork workers
    for(var i = 0; i < numCPUs.length; i++) {
        var worker = cluster.fork();
        console.log(worker.process.pid);
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker' + worker.process.pid + ' died');
    });
} else {
    // Worker can share any TCP connections
    // In this case it is a HTTP server
    http.createServer(function(req, res) {
        console.log(process.pid);
        res.writeHead(200);
        res.end('Hello world\n');
    }).listen(8000);
}


