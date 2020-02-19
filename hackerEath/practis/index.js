///////////////////////////////////////////////////////////FORMA FOR NODE.JS MODE

// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function(input) {
//   let buffer = Buffer.from(input);
//   stdin_input += buffer.toString();
// });

// process.stdin.on("end", function() {
//   main(stdin_input);
// });

// function main(input) {
//   let inputArg = input.split("\n");
//   let n = +inputArg[0];
//   let argsArray = Array.from(inputArg[1], function(item) {
//     return +item;
//   }).filter(item => item !== 0);
//   //   console.log();

//   // process.stdout.write(`${}`);
// }

//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////// tasks

// function strinToNumArray(string) {
//   let numArr = string.split(" ");
//   for (let i = 0; i < numArr.length; i++) {
//     numArr[i] = +numArr[i];
//   }
//   return numArr.filter(item => typeof item == "number");
// }

// function main(input) {
//   //////////////////////////////////////////// 1 num and 2 arrays
//   let inputArg = input.split("\n");
//   console.log(inputArg);
//   let n = +inputArg[0];
//   let argsArray = [];
//   for (let i = 1; i < inputArg.length; i++) {
//     argsArray.push(
//       Array.from(strinToNumArray(inputArg[i]), function(item) {
//         return +item;
//       }).filter(item => item !== 0)
//     );
//   }
//   console.log(argsArray);
//   ////
//   let summArr = [];
//   for (let j = 0; j < n; j++) {
//     summArr.push(argsArray[0][j] + argsArray[1][j]);
//   }
//   console.log(summArr);
//   //   process.stdout.write(`${summArr}`);
// }

// main("5\n1 2 3 4 5\n4 5 3 2 10");

//////////////////////////////////////////////////////////////Monk Teaches Palindrome

process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function(input) {
  let buffer = Buffer.from(input);
  stdin_input += buffer.toString();
});

process.stdin.on("end", function() {
  main(stdin_input);
});

function main(input) {
    let inputArg = input.split("\n");
    let n = +inputArg[0];
    console.log('NO');
 // process.stdout.write(`${}`);
    let argsArray = [];
    for (let i = 1; i < inputArg.length; i++) {
      argsArray.push(inputArg[i]);
    }
    argsArray.forEach(function(item){
        if(isPolindrome(item)){
            return `YES ${}`;
        } else return `NO ${}`;
    })
  }



  // process.stdout.write(`${}`);
}

// poly

const isPolindrome = (input) => {
  const strt = 0;
  const fin = input.length;
  if (fin < 2) {
	return true;
  }
  if (input(strt, 1) !== input(fin - 1, 1)) {
    return false;
  } else {
    const result = isPolindrome (input(strt + 1, fin - 2));
    return result;
  }
};
//
