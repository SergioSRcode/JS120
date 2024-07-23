/* eslint-disable max-len */

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

// What happens in each of the following cases? Try to answer without running the code.

//Case 1
// let hello = new Hello();
// hello.hi();  // loggs "Hello!"

// //Case 2
// let hello = new Hello();
// hello.bye();  // throws Type error => hello.bye is not a function

//Case 3
// let hello = new Hello();
// hello.greet();  // loggs the undefined, as no argument is passed to greet

// //Case 4
// let hello = new Hello();
// hello.greet('Goodbye');  // loggs "Goodbye"

// //Case 5
// Hello.hi();  // error, as the hi method only exists on the prototype
console.log(Greeting.prototype === Object.getPrototypeOf(Hello.prototype));
// console.log(Hello.prototype);
