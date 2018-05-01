module.exports = Person;

function Person(name) {
    this.name = name;
    this.speak = function() {
        console.log("speak something");
    };
}

Person.prototype.talk = function() {
    console.log("my name is " + this.name);
}

