// We now want to track which books we have and haven't read.
// Update the factory function so
// that it returns a book object that includes a property read
// that has an initial value of false.

let createBook = (title, author) => {
  return {
    title,  // same as `title: title,`
    author,  // same as `author: author,`
    read: false,

    getDescription() {
      return `${this.title} was written by ${this.author}.`;
    }
  };
};

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
let book3 = createBook("Aunts aren't Gentlmen", "PG Wodehouse");

// console.log(book1.getDescription());
// console.log(book2.getDescription());
// console.log(book3.getDescription());

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);
