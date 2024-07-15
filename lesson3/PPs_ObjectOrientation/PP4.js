/* eslint-disable max-len */
/*
We want our code to take an object-oriented approach to keeping track of the products,
and although the functions we just wrote work fine,
since they are manipulating data in the objects, we should place them in the objects themselves.

Rewrite the code such that the functions describeProduct and
setProductPrice become methods describe and setPrice on both our scissors and drill objects.
*/


let scissors = {
  id: 0,
  name: "Scissors",
  stock: 8,
  price: 10,

  adjustPrice(newPrice) {
    if (newPrice < 0) throw new Error("New Price should be greater than 0");
    this.price = newPrice;
  },

  describeProduct() {
    console.log(`=> Name: ${this.name}
=> ID: ${this.id}
=> Price: ${this.price}
=> Stock: ${this.stock}`);
  },
};

let drill = {
  id: 1,
  name: "Cordless Drill",
  stock: 15,
  price: 45,

  adjustPrice(newPrice) {
    if (newPrice < 0) throw new Error("New Price should be greater than 0");
    this.price = newPrice;
  },

  describeProduct() {
    console.log(`=> Name: ${this.name}
=> ID: ${this.id}
=> Price: ${this.price}
=> Stock: ${this.stock}`);
  },
};

// function adjustPrice(product, newPrice) {
//   if (newPrice < 0) throw new Error("New Price should be greater than 0");
//   product.price = newPrice;
// }

// function describeProduct(product) {
//   console.log(`=> Name: ${product.name}
// => ID: ${product.id}
// => Price: ${product.price}
// => Stock: ${product.stock}`);
// }

scissors.adjustPrice(5);
console.log(scissors.price);
// adjustPrice(drill, -3);  // Error => new price is negative
// console.log(drill.price); // won't be read

scissors.describeProduct();
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8
drill.describeProduct();