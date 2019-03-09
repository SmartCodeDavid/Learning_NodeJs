var fork = require('child_process').fork;
var cpus = require('os').cpus();
console.log(cpus.length);
for(let i = 0; i < cpus.length; i++) {
    fork('./worker.js');
}

// 通过fork复制的进程都是独立的进程, fork进程是昂贵的需要消耗至少10MB内存和30ms启动时间