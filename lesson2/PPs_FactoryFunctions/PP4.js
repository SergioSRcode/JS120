/* eslint-disable max-len */
// In this problem and the remaining problems, we'll build a simple invoice processing program.
// To get you started, here's the code to process a single invoice:

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

function createInvoice(services = {}) {
  services.phone = services.phone || 3000;
  services.internet = services.internet || 5500;

  services.total = function() {
    return this.phone + this.internet;
  };

  return services;
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000

/*
Now we can build a factory function to create payments.
The function can take an object argument in one of 3 forms:

1. Payment for one service, e.g., { internet: 1000 } or { phone: 1000 }.
2. Payment for both services, e.g., { internet: 2000, phone: 1000 }.
3. Payment with just an amount property, e.g., { amount: 2000 }.

The function should return an object that has the amount paid for each service and
a total method that returns the payment total.

If the amount property is not present in the argument,
it should return the sum of the phone and internet service charges;
if the amount property is present, return the value of that property.

Your function should work with the following code:
*/

function createPayment(services = {}) {
  services.internet = services.internet || 0;
  services.phone = services.phone || 0;

  services.total = function() {
    return this.amount || (this.internet + this.phone);
  };

  return services;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

// LS solution
/*
function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}
*/