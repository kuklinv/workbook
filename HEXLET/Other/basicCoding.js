// повторный курс - дублирует введение в программирование. повторяю
//калькулятор на свитч
function calc(operbin, a, b) {
    switch (operbin) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '/':
            return a / b;;
            break;
        case '*':
            return a * b;;
            break;
        default:
            return NaN;
    }
}

export default calc;

// add Digits  - дает сумму числа пока число больше двух знаков.
const length = str => str.length;

const addDigits = (num) => {
    let result;
    while (length(String(sumDigits(num))) > 1) {
        result = sumDigits(num);
    }
    return result;
};

const sumDigits = (num) => {
    let sumNum = 0;
    for (let i = 0; i < length(String(num)); i += 1) {
        sumNum += num;
    }
    return sumNum;
};
addDigits(10);

// реальное решение!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const add = (num) => {
    const numToStr = String(num);
    let result = 0;
    for (let i = 0; i < numToStr.length; i += 1) {
        result += Number(numToStr[i]);
    }
    return result;
};

const addDigits = (num) => {
    if (add(num) < 10) {
        return add(num);
    }
    return addDigits(add(num));
};