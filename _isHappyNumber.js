//функцию, которая должна вернуть true, если число счастливое, и false, если нет.
// Количество итераций процесса поиска необходимо ограничить числом 10.
const isHappyNumber = (num) => {
//var numString = num.toString(10);
  for (let i = 1; i <= 10; i += 1) {
    function getNumbersSum(num){
      return num.toString().split('').reduce(function(a, b) {
        return +a + +b;
      })
    }
  }
};

/*7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
*/