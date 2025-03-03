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

//Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456", 5);
console.log(book1.getDetails());

book1.updateCopies(-1); 
console.log(book1.getDetails());

//Task 2 Borrower

//Creates a borrower class with certain properties
class Borrower {
    constructor(name, borrowerID) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];
    };
    //Created method to allow for borrowing books
    borrowBook(book) { 
        if (!this.borrowedBooks.includes(book)) { 
            this.borrowedBooks.push(book); 
        } else {
            console.log(`${book} is already borrowed. `);
        };
    };
    //Created method to allow for returning books
    returnBook(book) { 
       const index = this.borrowedBooks.indexOf(book); 
        if (index !== -1) { 
            this.borrowedBooks.splice(index, 1)  
        } else {
            console.log(`${book} is available`) 
        }
    }
}

//Test Cases
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Expected output: []
