"use strict";
function add(n1, n2, mode) {
    if (mode === "as-number" &&
        typeof n1 === "number" &&
        typeof n2 === "number") {
        return +n1 + n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
let sum = add(20, 30, "as-number");
console.log(sum);
sum = add("Pravin", "Shedbale", "as-string");
console.log(sum);
