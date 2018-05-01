var exportModule = require("./export.1"); //object

var person = new exportModule("david");

person.speak();
person.talk();

var person2 = new exportModule("john");
person2.speak();
person2.talk();


