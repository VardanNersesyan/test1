"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalBook = void 0;
const LibraryBook_1 = require("./LibraryBook");
class DigitalBook extends LibraryBook_1.LibraryBook {
    constructor(title, author, isbn, fileSize, availableCopies = 1) {
        super(title, author, isbn, availableCopies);
        if (fileSize <= 0) {
            throw new Error("File size must be positive");
        }
        this.fileSize = fileSize;
    }
    getDescription() {
        return `${this.title} by ${this.author}, ISBN: ${this.getISBN()}, File size: ${this.fileSize}MB, Available copies: ${this.getAvailableCopies()}`;
    }
}
exports.DigitalBook = DigitalBook;
