/* eslint-disable max-len */
/*
In the last question, we used a mix-in named Speed that contained a goFast method.

We included the mix-in in the Car class and then called the goFast method from
an instance of the Car class.

You may have noticed that the string printed when we call goFast includes
the name of the type of vehicle we are using. How is that done?
*/

/*
That is due to the "this" keyword or execution context inside the console.log method
of "goFast". The execution context changes according the the object calling the method.

so the line: this.constructor.name
changes "this" to the calling object => blueTruck
Then it looks up the constructor property on blueTruck, which is the "Truck" class
Then it looks up the hidden name property within the Truck class => "Truck"

this.constructor.name => blueTruck.constructor.name => class Truck.name => "Truck"

Thus the method prints the Name of the Class.

*/

class Test {}

let test = new Test();
console.log(test.constructor);
// console.log("name" in Test);