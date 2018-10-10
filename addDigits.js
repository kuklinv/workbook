<<<<<<< HEAD
const addDigits = (num) => {

const summDigits () => {

}
};
=======
// принимает неотрицательное число. расчитывает сумму всех входящих в него
// цифр пока не останеться одно
const addDigits = (num) => {
var digitsSumm = 0;
var endDigitsSumm =0;
var str = String(num);
const summ = (str) => {
    String(str);
    for (var i = 0; i <= str.length; i += 1) {
    var numTemp = Number(str[i]);
    digitsSumm += numTemp;
     }
    return digitsSumm;
}

while (str.length > 1) {
    endDigitsSumm += summ(num);
        str = String(endDigitsSumm);
    }
 return Number(endDigitsSumm);
};
>>>>>>> 5d65424786c61b48515a0c8a5ddbea6162211331
