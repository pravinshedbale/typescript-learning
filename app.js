function add(n1, n2, showResult, resultPhrase) {
    if (showResult) {
        alert(n1 + n2);
    }
    else {
        alert(resultPhrase);
    }
}
var number1 = 10;
var number2 = 20.5;
var showResult = false;
var resultPhrase = "You have selected not to log result .....";
var result = add(number1, number2, showResult, resultPhrase);
