"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryBook = void 0;
class LibraryBook {
    constructor(title, author, isbn, availableCopies = 1) {
        if (availableCopies < 0) {
            throw new Error("Available copies cannot be negative");
        }
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }
    getISBN() {
        return this.isbn;
    }
    getAvailableCopies() {
        return this.availableCopies;
    }
    checkOut() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }
    returnBook() {
        this.availableCopies++;
    }
}
exports.LibraryBook = LibraryBook;
