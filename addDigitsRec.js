// принимает неотрицательное число. расчитывает сумму всех входящих в него
// цифр пока не останеться одно
function sumOfDigits(number) {    
    return number.toString().split('').reduce(function(a,b){return +a + +b}, 0);
};



// другое решение через рекурсию и отдельную функцию сложения

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
