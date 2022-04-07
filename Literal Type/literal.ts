function add(
    n1: number | string,
    n2: number | string,
    mode: "as-number" | "as-string"
) {
    if (
        mode === "as-number" &&
        typeof n1 === "number" &&
        typeof n2 === "number"
    ) {
        return +n1 + n2;
    } else {
        return n1.toString() + n2.toString();
    }
}
let sum = add(20, 30, "as-number");

console.log(sum);

sum = add("Pravin", "Shedbale", "as-string"); //Not acceptable as the parameters are of strin types.
console.log(sum);
