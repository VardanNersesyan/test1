function arrayOperations(arr: number[]) {
    return arr
        .filter(el=> el > 0)
        .map(el => el * 2)
        .sort((a, b) => a - b)
}

export function task1() {
    const testArr = [6,12,-4,8,1,3,92,-8,64,-1];

    console.log('Task 1 running:');
    console.log('InputArr', testArr);
    console.log('RESULT:')
    console.log(arrayOperations(testArr));
    console.log('--------------------------------------')
}