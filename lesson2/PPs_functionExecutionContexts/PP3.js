// What will the following code output?

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

/*
message serves as property in the global scope.

The function deliverMessage is defined on line 5 and spans
from line 5 - 7. On line 6, message is being logged to the
console.

On line 9, the function is invoked
with the implicit execution context (this) refering to the
global object. Since message is a property in the global object,
"Hello from the global scope!" is logged to the console.

On line 11, the object "foo" is created and contains the
"message" property with a string value.

Line 15 defines a new property within "foo" (deliverMessage) and
initializes it with the value of the deliverMessage function.

When on line 17, "foo" invokes the deliverMessage function from within
itself, the implicit execution context for method invokations is the calling
object (foo). Thus logging 'Hello from the function scope!'.

*/