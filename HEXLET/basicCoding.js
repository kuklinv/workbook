// повторный курс - дублирует введение в программирование. повторяю
//калькулятор на свитч
function calc(operbin, a, b) {
    switch (operbin) {
        case '+':
            a + b;
            break;
        case '-':
            a - b;
            break;
        case '/':
            a / b;;
            break;
        case '*':
            a * b;;
            break;
        default:
            NaN;
    }
}

export default calc;