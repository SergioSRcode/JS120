// eslint-disable-next-line max-len
// What will the following code output and why? Try to answer without running the code.

function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());

/*
line 10 reassigns the prototype property of the Ninja constructor to
an anonymous object containing the swingSword method. Since the
ninja object was instantiated before the reassignment, it still has the
previous prototype of Ninja. As there was no change in prototype for the
object ninja, the swingSword method doesn't exist and throws an error.


*/