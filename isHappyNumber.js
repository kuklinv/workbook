//функцию, которая должна вернуть true, если число счастливое, и false, если нет.
// Количество итераций процесса поиска необходимо ограничить числом 10.
function isHappyNumber(num) {
for (var i = 0; i <= 10; i += 1) {
 if (sumOfSquareDigits(num) !== 1 && sumOfSquareDigits(num).toString().length < 2) {
     return false;
 } else  return true;
}
};

function sumOfSquareDigits(num) {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }
  return sum;
}

export default isHappyNumber;
/*7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
*/