import { LibraryBook } from "./LibraryBook";

export class DigitalBook extends LibraryBook {
    public fileSize: number;

    constructor(title: string, author: string, isbn: string, fileSize: number, availableCopies: number = 1) {
        super(title, author, isbn, availableCopies);
        if (fileSize <= 0) {
            throw new Error("File size must be positive");
        }
        this.fileSize = fileSize;
    }

    public getDescription(): string {
        return `${this.title} by ${this.author}, ISBN: ${this.getISBN()}, File size: ${this.fileSize}MB, Available copies: ${this.getAvailableCopies()}`;
    }
}
