export interface ILibraryBook {
    getISBN(): string;
    getAvailableCopies(): number;
    checkOut(): boolean;
    returnBook(): void;
    getDescription(): string;
}

export abstract class LibraryBook implements ILibraryBook {
    public title: string;
    public author: string;
    private isbn: string;
    protected availableCopies: number;

    constructor(title: string, author: string, isbn: string, availableCopies: number = 1) {
        if (availableCopies < 0) {
            throw new Error("Available copies cannot be negative");
        }

        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    public getISBN(): string {
        return this.isbn;
    }

    public getAvailableCopies(): number {
        return this.availableCopies;
    }

    public checkOut(): boolean {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }

    public returnBook(): void {
        this.availableCopies++;
    }

    public abstract getDescription(): string;
}
