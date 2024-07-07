/* eslint-disable max-len */

// Create a Rectangle class with private fields width and height.
// Provide getters and setters for both fields.
// The setters should raise a RangeError if the width or height is not a positive number.
// Add a getter for area to compute the area of the rectangle (width * height).

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get area() {
    return this.#width * this.#height;
  }

  set width(newWidth) {
    if (newWidth <= 0) throw new RangeError('width must be positive');
    this.#width = newWidth;
  }

  set height(newHeight) {
    if (newHeight <= 0) throw new RangeError('heigth must be positive');
    this.#height = newHeight;
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}