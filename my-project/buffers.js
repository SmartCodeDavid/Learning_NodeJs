var myBuffer = new Buffer('==ii1j2i3hli23h', 'base64');

console.log(myBuffer);
var fileSystem = require('fs');
fileSystem.writeFile('logo1.gif', myBuffer);
