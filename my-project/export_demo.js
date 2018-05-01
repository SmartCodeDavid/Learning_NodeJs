var exportModule = require("./export");

console.log(exportModule.name);
console.log(exportModule.data);

var receiveData = exportModule.showData();
console.log(receiveData);