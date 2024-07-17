// What will the following code log to the console and why?

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*
On line 9, a swingSword method is declared on the function prototype of the
Ninja constructor function. Since the instantiated ninja object has the
function/object prototype of the Ninja constructor as its own prototype,
line 13 loggs true to the console.
*/