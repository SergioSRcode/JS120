// How do you create an object that doesn't have a prototype?
// How can you determine whether an object has a prototype?

let obj = Object.create(null); // object without prototype
console.log(Object.getPrototypeOf(obj)); //=> null

let normObj = {}; // object with normal prototype
console.log(Object.getPrototypeOf(normObj)); //=> [Object: null prototype] {}

