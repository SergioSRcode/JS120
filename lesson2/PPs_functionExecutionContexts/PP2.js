// What will the following code output?
// Explain the difference, if any, between this output and that of problem 1.

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);

/*
Line 4 declares an object which spans from line 4 - 8.
The object contains the property "func" which has
a function as its value, returning "this".

Line 10 calls the func function from within the obj object,
implicitly setting the execution context to the obj object,
from which it is being called.
The return value is therefore obj, which initializes the value
for the variable "context".

Line 12 loggs the value of "context" to the console, displaying "obj".
*/