/* eslint-disable max-len */

// Rewrite the following Person class to use private fields and
// provide a private setter for setting the age property.
// Ensure that the private setter raises a RangeError unless the age is a positive number.

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  showAge() {
    console.log(this.#age);
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge < 0) {
      throw new RangeError('Age must be positive');
    } else {
      this.#age = newAge;
    }
  }
}

let person = new Person('John', 30);
person.showAge(); // 30

try {
  person.age = -5;
  person.showAge();
} catch (e) {
  console.log('RangeError: Age must be positive');
}