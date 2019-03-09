// 多进程架构
// 对于nodejs单进程单线程对多核CPU使用不足问题，通过开启多进程得方式可以解决。
// child_process.fork() ---> 实现进程的复制

var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type:' : 'text/plain'});
  res.end('Hello World\n');
}).listen(Math.round((1 + Math.random()) * 1000), '127.0.0.1');