/* eslint-disable max-len */

// Create a class named Greeting that has a single method named greet.
// The method should take a string argument, and it should print that argument to the console.

// Now, create two more classes that inherit from Greeting:
// one named Hello, and the other Goodbye.

// The Hello class should have a hi method that takes no arguments and logs "Hello".
// The Goodbye class should have a bye method that logs "Goodbye".
// Use the greet method from the Greeting class when implementing Hello and Goodbye;
// don't call console.log from either Hello or Goodbye.

class Greeting {
  constructor(str) {
    this.str = str;
  }

  greet() {
    console.log(this.str);
  }
}

class Hello extends Greeting {
  constructor() {
    super("Hello");
  }

  hi = this.greet;
}

class Goodbye extends Greeting {
  constructor() {
    super("Goodbye");
  }

  bye = this.greet;
}

let test = new Greeting("OLaHOO");
let test2 = new Hello();
let test3 = new Goodbye();
test.greet();
test2.hi();
test3.bye();


/* LS solution

class Greeting {
  greet(message) {
    console.log(message)
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}
*/
