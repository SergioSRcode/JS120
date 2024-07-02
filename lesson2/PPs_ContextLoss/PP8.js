// Consider the following code:

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();  // fix by using increment.call(this)
  }
};


foo.incrementA();
foo.incrementA();
foo.incrementA();

// What will the value of foo.a be after this code runs?

console.log(foo.a);

/*
The value of foo.a will be 0. Since increment gets invoked as a function,
this.a on line 7 references a property of the global object rather
than a property of foo
Thus, the property foo.a isn't modified by the increment; its value remains 0.
*/