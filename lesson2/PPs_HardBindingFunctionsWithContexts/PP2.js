// What will the following code log to the console?

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

/*
Nothing will be logged to the console, as bind doesn't immediately
call the function used to invoke itself, but returns a new function
with its altered execution context.

In order for the code to log something to the console,
the function returned by "foo.bind(obj)" should be stored in a var.
Then the function can be invoked using the standard sytax (var())
*/

