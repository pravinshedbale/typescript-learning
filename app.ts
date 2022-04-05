function add(
    n1: number,
    n2: number,
    showResult: boolean,
    resultPhrase: string
) {
    if (showResult) {
        alert(n1 + n2);
    } else {
        alert(resultPhrase);
    }
}

const number1 = 10;
const number2 = 20.5;

const showResult = false;
const resultPhrase = "You have selected not to log result .....";
const result = add(number1, number2, showResult, resultPhrase);
