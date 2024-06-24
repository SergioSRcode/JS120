// NOTE: Run this code from a file; don't use the REPL

// function declraration, JS uses hoisting to internally move the
// declaration to the top
bar();
function bar() {
  console.log("this is bar");
}

// function expression, JS needs to execute the expression first,
// therefore no hoisting is happening and foo can't be called before
// its definition
foo();
const foo = function() {
  console.log("this is foo");
};