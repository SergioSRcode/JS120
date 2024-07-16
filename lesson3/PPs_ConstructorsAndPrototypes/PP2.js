// How would you fix the problem in the code from problem 1?

//=> initializing the properties to the method (without invocation)
//=> then invoking the methods on line 24/25.

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area;
  this.perimeter = RECTANGLE.perimeter;
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area());  // 6
console.log(rect1.perimeter()); // 10


/* LS Solution
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);      // => 6
console.log(rect1.perimeter); // => 10
*/