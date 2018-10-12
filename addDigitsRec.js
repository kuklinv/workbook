// принимает неотрицательное число. расчитывает сумму всех входящих в него
// цифр пока не останеться одно
function sumOfDigits(number) {    
    return number.toString().split('').reduce(function(a,b){return +a + +b}, 0);
};
