// What will the following code log to the console?
// Explain why it logs that value. Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
The statement loggs 3 to the console.

baz initialized its own property foo within itself, setting it to 2.
When looking for foo within baz, foo is found inside the object itself, thus
returning 2. qux accesses its own property foo with the value 1.

The console.log statement reads console.log(2 + 1) => 3
*/