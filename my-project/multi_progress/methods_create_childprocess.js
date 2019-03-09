// 进程复制的一些方法

var cp = require('child_process');

cp.spawn('node', ['worker,js']); // 用命令来开启子进程 

cp.exec('node worker.js', function(err, stdout, stderr) { // 用命令启动子进程，且将子进程情况给到回调函数
    console.log('err', err);
    console.log('stdout', stdout);
    console.log('stderr', stderr);
    //some code...
});

cp.execFile('worker.js', function(err, stdout, stderr) { // 启动子进程来执行可执行文件，如果是js文件，它首行内容必须添加
    console.log('err', err);                             // #!/usr/bin/env node
    console.log('stdout', stdout);
    console.log('stderr', stderr);
    //some code...
});

cp.fork('./worker.js');