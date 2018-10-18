const withoutTwoZero = (m, n) => {
  var one = m + n;
  var two = one - m;
  var tree =  n + 1 // места размещения нулей между еденицеми = еденицы + 1
  var numOfCombination = factorial(one) / (factorial(two) * factorial(m)); //(m + n)! / ((m - n)! * n!);
  var numExcludedCombination = factorial(tree) / (factorial(tree - m) * factorial(m));
  var finalCombination = numOfCombination - numExcludedCombination;
  
  return finalCombination;
};

const factorial = (num) => {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
};

export default withoutTwoZero;

/*Мне кажется логика может быть короче. Имеется n нулей и m единиц. 
Пронумеруем кол-во мест для размещения нулей между единицами (m+1). 
Например между 3 единицами мест 4 {1; 2; 3; 4}. Далее нам нужно подсчитать 
сколькими способами можно выбрать места для нулей по количеству нулей. 
Например при 2 нулях и 3 единицах {1; 2}, {1; 3}, {1; 4}. 
При этом выборки различающиеся только лишь по порядку следования,
 но не по выбранным номерам мест считаем идентичными, а это и есть 
 определение кол-ва сочетаний, т.е. формула для подсчета, как и сказано выше,
  это кол-во сочетаний из (m+1) по n
  */const withoutTwoZero = (m, n) => {

var numOfCombination = (m + n)! / ((m -n)! * n!);


};