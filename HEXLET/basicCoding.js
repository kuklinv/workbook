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
const sumDigits = (strOfNum) => {
    let sumNum = 0;
    for (let i = 0; i < length(strOfNum); i += 1) {
      sumNum += Number(strOfNum[i]);
    }
    return sumNum;
  };
  
  const addDigits = (num) => {
    let result;
    if (length(String(num)) < 2) {
      result = num;
    }
    while (length(String(sumDigits(num))) > 1) {
      result = sumDigits(num);
    }
    return result;
  };
  
  export default addDigits;

  