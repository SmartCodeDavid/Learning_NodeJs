// H5 webworker api 创建工作线程并在后台运行，使得较为严重的计算不影响主线程上的UI渲染
// H5 实例， woker

var worker = new Worker('worker.js');
worker.onmessage = function(event) { // worker 通过onmessage 来监听子线程的结果返回
  document.getElementById('result').textContent = event.data;
}

// 下面是worker.js里面的实现
var n = 1;
search: while(true) {
  n += 1;
  for(var i = 2; i <= Math.sqrt(n); i += 1)
    if(n % i == 0) 
      continue search;
  postMessage(n); //子线程通过postmessage 方法将结果返回
}
