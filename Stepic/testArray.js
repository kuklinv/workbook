// передаются два массива случайной длины заполненные случайными числами.
// считаем сумму всех элементов обоих массивов и возвращаем ее из функции.
function testArray(a, b) {
  var newArr = a.concat(b);
  var result = newArr.reduce(function(sum, current) {
  return sum + current;
  }, 0);
return result;
};
