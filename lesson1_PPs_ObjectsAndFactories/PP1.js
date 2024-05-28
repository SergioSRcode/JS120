/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description
*/

let createBook = (title, author) => {
  return {
    title: title,
    author: author,
    
    getDescription() {
      return `${this.title} was written by ${this.author}.`
    }
  };
}

let book1 = createBook("Mythos", "Stephen Fry");
let book2 = createBook("Me Talk Pretty One Day", "David Sedaris");
let book3 = createBook("Aunts aren't Gentlmen", "PG Wodehouse");

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());
