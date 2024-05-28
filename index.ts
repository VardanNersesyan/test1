import { task1 } from './part1/arrayOperations';
import { task2 } from './part2/processData';
import { task3 } from './part3';
import { task4 } from './part4/BankAccount';
import { task7 } from './part7';
import { task8 } from './part8';
import { task9 } from './part9/DataFetcher';
import {task10} from "./part10/Calculator";


(async () => {
    task1();
    task2();
    task3();
    task4();
    task7();
    task8();
    await task9();
    task10();
})()