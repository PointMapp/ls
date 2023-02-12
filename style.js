
const operator = prompt('Выберите операцию ( любую +, -, * или / ): ');


const number1 = parseFloat(prompt('Введите первую цифру: '));
const number2 = parseFloat(prompt('Введите вторую цифру: '));

let result;


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`);