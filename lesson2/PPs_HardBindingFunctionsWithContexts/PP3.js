// What will the following code output?

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());  // NaN or error in strict mode
console.log(bar());  // 5