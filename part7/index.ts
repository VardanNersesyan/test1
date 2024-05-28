import { Car } from "./Car";
import { ElectricCar } from './ElectricCar'

export function task7() {
    const car = new Car("Mercedes", "C300", 2009, 240000);
    const electricCar = new ElectricCar("Tesla", "X", 2022, 30000, 30);
    console.log('Task 7 running:');
    console.log('Initial values for car: "Mercedes", "C300", 2009, 240000');
    console.log('Drive 500 miles')
    car.drive(500)
    console.log('RESULT:')
    console.log(car.getDescription());
    console.log('')
    console.log('')
    console.log('Initial values for electric car: "Tesla", "X", 2022, 30000, 30');
    console.log('RESULT:')
    console.log('Charge 80');
    electricCar.charge(70);
    console.log('Battery level', electricCar.getBatteryLevel());
    console.log('Drive 500 miles')
    electricCar.drive(500);
    console.log(electricCar.getDescription())
    console.log('----------------------------------');
}