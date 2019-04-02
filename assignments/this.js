/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding - the "this" keyword interacts directly with the window/browser/console/environment.
* 2. Implicit Binding - when used in an object, the "this" keyword points to the parent object.
* 3. New binding - when used in conjunction with the "new" keyword and a contructor function, the "this" keyword points to the newly contructed object.
* 4. Explicit binding - when call or apply is used, the "this" keyword inherits the called object "this" characteristics.
*
* write out a code example of each explanation above
*/

// ##################################################

// Principle 1

// code example for Window Binding

// ##################################################

//Console log the global/browser/console architechure and platform
function browserInfo () {
    console.log(this.process.arch);
    console.log(this.process.platform);
}
browserInfo();

// ##################################################

// Principle 2

// code example for Implicit Binding

// ##################################################

//Define mikeObj object
mikeObj = {
    name: "Mike",
    favColor: "blue",
    age: "40",

    //Define sayHelloMike method
    sayHelloMike: function () {
        return `Hi! my name is ${this.name}`;
    }
}
//Call sayHelloMike()
console.log(mikeObj.sayHelloMike());

// ##################################################

// Principle 3

// code example for New Binding

// ##################################################

//PersonConstructor constructor function
function PersonConstructor (object) {
    this.name = object.name;
    this.favColor = object.favColor;
    this.age = object.age;
}
//Add a sayHello prototype method
PersonConstructor.prototype.sayHello = function () {
        return `Hi! my name is ${this.name}`;
}
//Define a new object using the PersonConstructor object constructor
joeObj = new PersonConstructor({name: "Joe", favColor: "red", age: 31});

//Call the sayHello() function from the newly created joeObj object
console.log(joeObj.sayHello());

// ##################################################

// Principle 4

// code example for Explicit Binding

// ##################################################

//ChildCostructor constructor function
function ChildConstructor (object) {
    //Take on PersonConstructor .this variables
    PersonConstructor.call(this, object);

    //Add child .this variables
    this.school = object.school
}
//Inherit PersonConstructor prototype methods into ChildConstructor prototype methods.
ChildConstructor.prototype = Object.create(PersonConstructor.prototype);

zachKidObj = new ChildConstructor({name: "Zach", favColor: "purple", age: 8, school: "Pinewood Elementary"});

console.log(zachKidObj.name);
console.log(zachKidObj.sayHello());
console.log(zachKidObj.school);

// ##################################################