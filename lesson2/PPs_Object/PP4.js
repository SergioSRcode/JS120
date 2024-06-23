// As we saw in problem 2, the following code creates a new property in the baz
// object instead of assigning the property in the prototype object.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

// Write a function that searches the prototype chain of an object for a
// given property and assigns it a new value.
// If the property does not exist in any of the prototype objects,
// the function should do nothing.
// The following code should work as shown:

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

function assignProperty(obj, property, val) {
  for (let key in obj) {
    if (key === property) {
      let proto = Object.getPrototypeOf(obj);
      while (!proto.hasOwnProperty(property)) {
        proto = Object.getPrototypeOf(proto);
      }

      proto[property] = val;
    }
  }
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

/*
LS Solution: Iterative

function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}

LS Solution: Recursive

function assignProperty(obj, property, value) {
  if (obj === null) { // property not found
    return;
  } else if (obj.hasOwnProperty(property)) {
    obj[property] = value;
  } else {
    assignProperty(Object.getPrototypeOf(obj), property, value);
  }
}
*/