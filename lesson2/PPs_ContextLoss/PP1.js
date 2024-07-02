// The code below should output "Christopher Turk is a Surgeon".
// Without running the code, what will it output?
// If there is a difference between the actual and desired output,
// explain the difference.

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

/*
Since the function "getDescription" is passed in as the arg
for "LogReturnVal", it looses its execution context.
Thus "this" === undefined and loggs "undefined undefined is a undefined."
*/