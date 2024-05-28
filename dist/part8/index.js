"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task8 = void 0;
const PhysicalBook_1 = require("./PhysicalBook");
const DigitalBook_1 = require("./DigitalBook");
function task8() {
    console.log('Task 8 running:');
    const physicalBook = new PhysicalBook_1.PhysicalBook("Евгений Онегин", "Александр Пушкин", "978-5-699-12034-8", 3);
    console.log(physicalBook.getISBN());
    console.log(physicalBook.checkOut());
    console.log(physicalBook.getAvailableCopies());
    physicalBook.returnBook();
    console.log(physicalBook.getAvailableCopies());
    console.log(physicalBook.getDescription());
    const digitalBook = new DigitalBook_1.DigitalBook("Руслан и Людмила", "Александр Пушкин", "978-5-17-091250-7", 1.5, 5);
    console.log(digitalBook.getDescription());
    console.log(digitalBook.checkOut());
    console.log(digitalBook.getAvailableCopies());
    console.log('----------------------------------');
}
exports.task8 = task8;
