/*
Let's add a method, readBook, that marks a book object as read
by setting the read property to true:
*/

let createBook = (title, author, read = false) => {
  return {
    title,  // same as `title: title,`
    author,  // same as `author: author,`
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}.`;
    },

    readBook() {
      this.read = true;
    }
  };
};

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris", false);
let book3 = createBook("Aunts aren't Gentlmen", "PG Wodehouse", true);

// console.log(book1.getDescription());
// console.log(book2.getDescription());
// console.log(book3.getDescription());

console.log(book1.read);  // false
console.log(book2.read);  // false
console.log(book3.read);  // true

book2.readBook();

console.log(book1.read);  // false
console.log(book2.read);  // true
console.log(book3.read);  // true

