function Hello() {
    var info;
    this.setName = function setInfo(info){
        this.info = info;
    };

    this.sayHello = function printLog(){
        console.log(this.info);
    };
};
module.exports = Hello;