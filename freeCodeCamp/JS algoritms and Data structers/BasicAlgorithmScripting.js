//////// INTRODACTION BASIC ALGORINM SCRIPTING

function findLongestWordLength(str) {
  let counter = 0;
  let maxSubStr = 0;
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] == ' ' || i == str.length) {
      if (counter >= maxSubStr) {
        maxSubStr = counter;
        counter = 0;
      } else {
        counter = 0;
      }
    } else counter += 1;
  }
  return maxSubStr;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//////////////////////////
//Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  let maxNumArr = [];
  for (let index = 0; index < arr.length; index++) {
    let innerMax = arr[index][0];
    for (let indexInn = 0; indexInn < arr[index].length; indexInn++) {
      if (arr[index][indexInn] >= innerMax) {
        innerMax = arr[index][indexInn];
      }
    }
    maxNumArr.push(innerMax);
  }
  return maxNumArr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// another variant with ES6:
function largestOfFour(arr) {
  let maxNumArr = [];
  for (let index = 0; index < arr.length; index++) {
    maxNumArr.push(Math.max(...arr[index]));
  }
  return maxNumArr;
}

///////////////////////
//Confirm the Ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");