interface DataInterface {
    name: string;
    value: number
}

function processData(data: DataInterface[]): string[] {
    return data
        .filter(item => item.value >= 10)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => item.name)
}

export function task2() {
    const testArr: DataInterface[] = [
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
    console.log('RESULT:')
    console.log(processData(testArr));
    console.log('--------------------------------------')

}