var cp = require('child_process');
var path = require('path');
var n = cp.fork(path.join(__dirname, '/sub.js')); // 父进程在创建子进程之前，会创建IPC通道并监听它

n.on('message', function(m) {
    console.log('parent got message:', m);
});

n.send({hello: 'world'});