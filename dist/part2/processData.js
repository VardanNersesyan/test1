"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task2 = void 0;
function processData(data) {
    return data
        .filter(item => item.value >= 10)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => item.name);
}
function task2() {
    const testArr = [
        {
            name: 'Mercedes',
            value: 11,
        },
        {
            name: 'BMW',
            value: 8,
        },
        {
            name: 'Chevrolet',
            value: 25,
        },
        {
            name: 'Toyota',
            value: 14
        }
    ];
    console.log('Task 2 running:');
    console.log('InputArr', testArr);
    console.log('RESULT:');
    console.log(processData(testArr));
    console.log('--------------------------------------');
}
exports.task2 = task2;
