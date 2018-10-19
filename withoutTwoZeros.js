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