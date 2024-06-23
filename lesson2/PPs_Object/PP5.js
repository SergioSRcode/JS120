// Consider the following two loops:

let obj = {bongo: 2};
let foo = Object.create(obj);

foo.dingo = 3;

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}  // loggs dingo: 3, bongo: 2

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});  // loggs: dingo: 3


/*
If foo is an arbitrary object, will these loops always log the same
results to the console? Explain why they do or do not.
If they don't always log the same information,
show an example of when the results differ.


Result:
They don't if foo has a prototype object containing it's individual properties.
If that were the case, then the for/in loop would loop over all enumerable
properties from the current object and its prototypes.
Whereas Object.keys only contains an array of the properties of the current obj.
Thus ignoring the properties of their prototypes.
*/