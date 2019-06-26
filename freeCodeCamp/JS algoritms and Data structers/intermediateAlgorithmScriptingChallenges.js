//////
//                         Intermediate Algorithm Scripting Challenges
//
//                                                  summAll
const arrSort = (arr) => {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

const factor = (one, two) => {
  if (one === two) return two;
  return one + factor(one + 1, two);
}
const summAll = (arr) => {
  let sortInput = arrSort(arr);
  let start = sortInput[0];
  let finish = sortInput[1];
  return factor(start, finish);
}

let testArr = [4, 1];
console.log(summAll(testArr));

//                                                Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

*/
function diffArray(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i <= arr1.length - 1; i += 1) {
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j <= arr2.length - 1; j += 1) {
    if (arr1.indexOf(arr2[j]) == -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//                                             Seek and Destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);