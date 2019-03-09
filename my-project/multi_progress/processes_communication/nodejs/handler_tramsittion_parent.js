var cp = require('child_process');
var child1 = cp.fork('handler_tramsittion_child.js');
var child2 = cp.fork('handler_tramsittion_child.js');
var child3 = cp.fork('handler_tramsittion_child.js');


var server = require('net').createServer();

// server.on('connection', function(socket) {
//     socket.end('handle by parent\n');
//     console.log('connection');
// });

server.listen(1337, function() {
    child1.send('server', server); // 将句柄发送给子进程
    child2.send('server', server); // 将句柄发送给子进程
    child3.send('server', server); // 将句柄发送给子进程
    server.close();
});
