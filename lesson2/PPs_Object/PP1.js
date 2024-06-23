// What will the following code log to the console?
// Explain why it logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*
The number 2 will be logged to the console!

baz is initialized an object with qux as its prototype.
Since the property foo exisists within the prototype qux, it also exists within
baz (baz.foo references qux.foo, as foo doesn't exists within baz).
Since the value of the prototype foo is 1, the
console.log statement basically calls console.log(1 + 1) => 2
*/