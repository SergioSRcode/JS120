// What will the following code log to the console?
// Explain why it logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/*
The statement loggs 2 + 2 => 4

qux.foo reassigns the value of the foo property within qux to the number 2.
Since qux is the prototype of baz and baz doesn't contain a foo property itself,
it looks up the prototype chain, finding the foo property within the prototype
qux and returning its value.

Thus the statements reads like console.log(2 + 2) => 4
*/