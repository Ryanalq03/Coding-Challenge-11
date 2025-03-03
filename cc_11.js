//Challenge #11

//Task 1 Book Class

//Creates a book class with certain properties
class Book { 
    constructor(title, author, isbn, copies) { 
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };
    //Created method to give book details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    };
    //Created Method to update stock
    updateCopies(quantity) { 
        this.copies += quantity
    };
}


