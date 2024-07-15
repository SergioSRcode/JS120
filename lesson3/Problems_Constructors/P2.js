// What happens if you run the following code? Why?

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?

//Type error => cannot read property of undefined:
// as Lizard wasn't called as a constructor it returns undefined.
// the method therefore is only in scope of the function.