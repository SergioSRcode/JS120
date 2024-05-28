/*
Finally, let's update getDescription function to reflect
the read state directly, For instance:
*/

let createBook = (title, author, read = false) => {
  return {
    title,  // same as `title: title,`
    author,  // same as `author: author,`
    read,

    readBook() {
      this.read = true;
    },

    getDescription() {
      let readInfo = this.read ? "have" : "haven't";
      return `${this.title} was written by ${this.author}. I ${readInfo} read it`;
    },
  };
};

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris", false);
let book3 = createBook("Aunts aren't Gentlmen", "PG Wodehouse", true);

book2.readBook();

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

// console.log(book1.read);  // false
// console.log(book2.read);  // false
// console.log(book3.read);  // true

book2.readBook();


/* LS solution

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription: function() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    },
  };
}

*/