//  限制重启
var worker;

process.on('message', function(m, tcp) {
    if(m === 'server') {
        worker = tcp;
        worker.on('connection', function(socket) {
            socket.end('handle by child with pid ' + process.pid +'\n');
            throw new Error('throw exception'); // 假设此处发生异常
        });
    }
});

process.on('SIGTERM', function() {
    console.log('Got a SIGTERM, exiting...');
    process.exit(1);
});

// 处理异常出现
process.on('uncaughtException', function(err) {
    logger.Error(err);
    // 发送自杀信号
    process.send({act: 'suicide'});
    // 停止接收新的连接
    worker.close(function() {
        // 所有连接断开后，退出进程
        process.exit(1);
    })
});

