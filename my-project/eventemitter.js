var EventEmitter = require('events').EventEmitter;
var a = new EventEmitter;
a.on('click', '.selector', function(event) {
  event.preventDefault();
  /* Act on the event */
  console.log("event called");
});

a.emit('click');

var EventEmitter = process.EventEmitter, MyClass = function(){};
MyClass.prototype.__proto__ = EventEmitter.prototype;
var a = new EventEmitter;
a.on('click', function(){
  //do something
})

//prototype
// function Z(){
//   this.zz = 1;
// }
// Z.prototype.zz = 1;
// Z.prototype.zfunction = function(){
//   console.log("zfunction");
// }
//
// function Y(){
//   this.yy = 2;
// }
//
// Y.prototype.__proto__ = Z.prototype;
// var y = new Y();
// console.log(y.yy);
// console.log(y.zz);
// y.zfunction();

// function A(){
//   this.aa = 10;
// }
//
// function B(){
//   this.bb = 20;
// }
//
// function C(){
//   this.cc = 30;
// }
//
// function D(){
//   this.dd = 40;
// }
// C.prototype = new D();
// B.prototype = new C();
// A.prototype = new B();
// console.log(A.prototype.__proto__ === B.prototype)
// console.log(A.prototype.__proto__.__proto__.__proto__ === D.prototype);
//
// var a = new A();
// console.log(a.aa + a.bb + a.cc + a.dd);
// console.log(a.__proto__);
//
// function E(){
//   this.ee = 100;
// }
//
// function F(){
//   this.ff = 200;
// }
//
// console.log(E.prototype);
// E.prototype.__proto__ = F.prototype;
// var e = new E();
// console.log(E.prototype.__proto__);
// console.log(e.__proto__ === E.prototype);
