/* eslint-disable max-len */

// Write a constructor function called Circle that takes a radius as an argument.
// You should be able to call an area method on any objects created by the constructor
// to get the circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return 3.1415926535898 * (this.radius * this.radius);
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false

/* LS solution
const Circle = function(radius) {
  this.radius = radius;
};

Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};
*/