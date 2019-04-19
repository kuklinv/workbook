// используем переменные, while, без рекурсии
const smallestDivisor = (num) => {
if (num < 1) {
    return NaN;
   }
if (num === 1) {
    return num;
   }
var smDivisor = 2;
    while (smDivisor <= num) {
    if (num % smDivisor === 0 || smDivisor === num) {
        return smDivisor;
    }
    else smDivisor += 1;
  }
};
