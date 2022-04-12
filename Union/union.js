"use strict";
function add(n1, n2) {
    return n1 + n2;
}
let sum = add(20, 30);
console.log(sum);
sum = add("Pravin", "Shedbale"); //Not acceptable as the parameters are of strin types.
//Solution using union
function addUnion(n1, n2) {
    let result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
}
console.log(addUnion(10, 20));
console.log(addUnion("Pravin", "Shedbale")); //Now fine
