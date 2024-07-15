/* eslint-disable max-lines-per-function */
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
  services.payments = [];

  services.total = function() {
    return this.phone + this.internet;
  };

  services.addPayment = function(payment) {
    this.payments.push(payment);
  };

  services.addPayments = function(payments) {
    payments.forEach(payment => this.payments.push(payment));
  };

  services.paymentTotal = function() {
    return this.payments.reduce((acc, payment) => acc + payment.total(), 0);
  };

  services.amountDue = function() {
    return this.total() - this.paymentTotal();
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


// Update the createInvoice function so that it can add payment(s) to invoices.
// Use the following code as a guideline:

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
