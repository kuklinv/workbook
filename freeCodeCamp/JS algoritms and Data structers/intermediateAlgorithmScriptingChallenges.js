//////
//                         Intermediate Algorithm Scripting Challenges
//
//                                                  summAll
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

// нужно переписать. две функции : одна выбирает максимин , вторая суммирует через рекурсию. хотя как уже
// сделано возмоджно и эффективнее но менее понятно и красиво.

// например

function sumAll(arr) {

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  
  let max = getMaxOfArray(arr);
}

//                                                Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

*/
function diffArray(arr1, arr2) {
  var newArr = [];
    for (let i = 0; i <= arr1.length; i += 1) {
     if (arr2.forEach(item => item !== arr1[i])) {
       newArr.push(arr1[i]);
     }
    }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);