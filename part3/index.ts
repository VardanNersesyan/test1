import { Person } from "./Person";
import { Employee } from "./Employee";

export function task3() {
    const person = new Person('Vardan', 32);
    const employee = new Employee('Vardan', 32, 'Senior Node.js Engineer');
    console.log('Task 3 running:');
    console.log('RESULT:')
    console.log(person.introduce());
    console.log(employee.introduce());
    console.log('--------------------------------------')
}