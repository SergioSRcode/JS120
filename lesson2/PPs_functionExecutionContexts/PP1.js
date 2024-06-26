// What will the following code output?
// Try to determine the results without running the code.

function func() {
  return this;
}

let context = func();

console.log(context);  // object [global]

/*
func is declared from line 4 - 6, only returning "this" which
refers at this point in time to the global object (global).

On line 8, func is being called and the return value of func
is assigned to the variable context. The implicit execution context is
the global object, as func was called as a function, returning the global
object.

On line 10, context is being logged to the console => logging "global"
*/