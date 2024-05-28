"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalBook = void 0;
const LibraryBook_1 = require("./LibraryBook");
class PhysicalBook extends LibraryBook_1.LibraryBook {
    constructor(title, author, isbn, availableCopies = 1) {
        super(title, author, isbn, availableCopies);
    }
    getDescription() {
        return `${this.title} by ${this.author}, ISBN: ${this.getISBN()}, Available copies: ${this.getAvailableCopies()}`;
    }
}
exports.PhysicalBook = PhysicalBook;
