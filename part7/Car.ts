import {Vehicle} from './Vehicle';
export class Car extends Vehicle {
    constructor(mark: string, model: string, year: number, mileage: number = 0) {
        super(mark, model, year, mileage);
    }
}