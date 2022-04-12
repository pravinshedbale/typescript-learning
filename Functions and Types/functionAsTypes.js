"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
printResult(add(10, 20));
let printResult2 = printResult;
printResult2 = 5; //Not acceptable
let addDummy;
addDummy = add;
