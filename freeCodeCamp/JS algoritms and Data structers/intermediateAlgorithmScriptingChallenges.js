//////
//                         Intermediate Algorithm Scripting Challenges
//
// summAll
function sumAll(arr) {
  let max = arr[0];
  let min = arr[1];
  if (min > max) {
      max = arr[1];
    min = arr[0];
  }
  let summ = 0;
  for (let i = min; i <= max; i += 1) {
    summ += i;
  }
  return summ;
}

sumAll([1, 4]);


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);