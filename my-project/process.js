var http = require("http");
var url = require("url");


console.log(1);
process.nextTick(function(){
    console.log(3);
})
console.log(2);
console.log(4);
for(var i = 0; i < 1000000000; i ++) {
}
console.log(5);