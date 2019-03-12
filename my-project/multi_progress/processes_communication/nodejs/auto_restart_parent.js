var fork = require('child_process').fork;
var cpus = require('os').cpus();
var path = require('path')
var server = require('net').createServer();
server.listen(1337);

var workers = {};

var createWorker = function() {
    var worker = fork(path.join(__dirname, '/auto_restart_child.js'));
    worker.on('exit', function() {
        console.log('worker ' + worker.pid + ' exited');
        delete workers[worker.pid];
        createWorker();
    });
    
    // 句柄转发
    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log('Create worker. pid: ' + worker.pid);
};
console.log(cpus.length);

for(var i = 0; i < cpus.length; i++) {
    createWorker();
}

process.on('exit', function() {
    for(var pid in workers) {
        workers[pid].kill();
    }
});