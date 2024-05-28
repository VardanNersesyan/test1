import {LibraryBook} from "./LibraryBook";

export class PhysicalBook extends LibraryBook {
    constructor(title: string, author: string, isbn: string, availableCopies: number = 1) {
        super(title, author, isbn, availableCopies);
    }

    public getDescription(): string {
        return `${this.title} by ${this.author}, ISBN: ${this.getISBN()}, Available copies: ${this.getAvailableCopies()}`;
    }
}