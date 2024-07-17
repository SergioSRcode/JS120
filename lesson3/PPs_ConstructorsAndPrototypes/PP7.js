/* eslint-disable max-len */
// create a new instance of an object, without having direct access to the constructor function:

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = {};
Object.setPrototypeOf(ninjaB, Object.getPrototypeOf(ninjaA));

// LS solution =>
// let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor); // => true