/* eslint-disable max-len */
/*
This solution has brought us closer to our object-oriented ideal,
but has also introduced some inefficiency,
insofar as our setPrice and describe methods are duplicated in each object,
and we will have to type out this code for each new object we want to create.

One solution to this problem is to stop manually creating each object,
and instead use a factory function to generate them.

Create a new function createProduct which takes arguments for
id, name, stock, and price and also adds setPrice and describe to the new object.
*/

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

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
}

let scissors = createProduct(0, "Scissors", 8, 10);
let drill = createProduct(1, "Cordless Drill", 15, 45);

// let scissors = {
//   id: 0,
//   name: "Scissors",
//   stock: 8,
//   price: 10,

//   adjustPrice(newPrice) {
//     if (newPrice < 0) throw new Error("New Price should be greater than 0");
//     this.price = newPrice;
//   },

//   describeProduct() {
//     console.log(`=> Name: ${this.name}
// => ID: ${this.id}
// => Price: ${this.price}
// => Stock: ${this.stock}`);
//   },
// };

// let drill = {
//   id: 1,
//   name: "Cordless Drill",
//   stock: 15,
//   price: 45,

//   adjustPrice(newPrice) {
//     if (newPrice < 0) throw new Error("New Price should be greater than 0");
//     this.price = newPrice;
//   },

//   describeProduct() {
//     console.log(`=> Name: ${this.name}
// => ID: ${this.id}
// => Price: ${this.price}
// => Stock: ${this.stock}`);
//   },
// };

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