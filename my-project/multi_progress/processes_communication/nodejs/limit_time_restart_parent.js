//  限制重启

var fork = require('child_process').fork;
var path = require('path')
var server = require('net').createServer();
server.listen(1337);

var limit = 10; 

// 时间单位
var during = 60000;
var restart = [];

var isTooFrequently = function() {
    // 记录重启时间
    var time = Date.now();
    var length = restart.push(time);
    if(length > limit) {
        // 取出最后10个记录
        restart = restart.slice(limit * -1);
    }

    // 最后一次重启到前10次之间的时间间隔
    return restart.length >= limit && restart[restart.length - 1] - restart[0] < during;
}

var workers = {};
var createWorker = function() {
    // 检查是否太过频繁
    console.log(1);
    if(isTooFrequently()) {
        // 触发giveup事件后，不再重启
        process.emit('giveup', length, during);
        return;
    }

    var worker = fork(path.join(__dirname, '/limit_time_restart_child.js'));
    worker.on('exit', function() {
        console.log('Worker pid '+ worker.pid + ' exited');
        delete workers[worker.pid];
    });

    // 重新启动新的进程
    worker.on('message', function(message) {
        if(message.act === 'suicide') {
            createWorker();
        }
    });

    // 句柄转发
    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log('Create worker. pid: ' + worker.pid);
}

createWorker();