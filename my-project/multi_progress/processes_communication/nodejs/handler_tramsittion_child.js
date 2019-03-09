// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end('handled by child pid is : ' + process.pid + '\n');
// });

process.on('message', function(m, tcp) {
    if(m === 'server') { // 子进程获取到句柄然后监听请求。
        tcp.on('connection', function(socket) {
            // server.emit('connection', socket);    
            socket.end('handle by child with pid ' + process.pid +'\n');
            // debugger;
            // server.emit('connect', socket);
        });
    }
});