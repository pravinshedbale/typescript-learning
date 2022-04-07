function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
}

printResult(add(10, 20));

let printResult2: Function = printResult;

printResult2 = 5; //Not acceptable

let addDummy: (a: number, b: number) => number;

addDummy = add;
