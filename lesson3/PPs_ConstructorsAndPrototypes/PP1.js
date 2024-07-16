// What does the following code log to the console?
// Try to answer without running the code.
// Can you explain why the code produces the output it does?

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
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);  // undefined * undefined === NaN
console.log(rect1.perimeter); // undefined * undefined === NaN

/*
The code loggs NaN twice. The execution context is set to the
RECTANGLE object upon calling the methods. Since RECTANGLE doesn't
contain the width and height property, they return undefined.
undefined * undefined === NaN.
*/