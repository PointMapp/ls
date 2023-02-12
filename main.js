
let result;

const operator = prompt('Выберите операцию ( любую +, -, * или / ): ');


const number1 = parseFloat(prompt('Введите первую цифру: '));
const number2 = parseFloat(prompt('Введите вторую цифру: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`number1 + number2 = result`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`number1 - number2 = result`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`number1 * number2 = result`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`number1 / number2 = result`);
        break;

    default:
        console.log('Недопустимый оператор');
        break;
}